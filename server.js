const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');

require('dotenv').config();

const app = express();

massive(process.env.CONNECTION_STRING)
    .then((db)=>{
        console.log('the server is sawing logs');
        app.set('db', db);
    })
    .catch(err => {
        console.warn('Failed to connect:');
        console.error(err);
    });

app.use(cors());
app.use(bodyParser.json());
app.set('trust proxy', 1)
app.use(session({
    name: 'houser',
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    rolling: true,
    resave: false,
}));

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(checkDb());




app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    req.db.user_table.findOne({ email, password })
        .then(user => {
            if (!user) {
                return res.status(401).send({ success: false, message: 'it didnt work' });
            }
            req.session.user = user.user_id;
            res.send({ success: true, message: 'Logged in successfully' });
        })
        .catch(handleDbError(res));
});


app.post('/api/register', (req, res) => {
    const db = req.app.get('db');
    const { email, password } = req.body;
    
    req.db.user_table.insert({ email, password })
        .then(user => {
            req.session.user = user.user_id;
            console.log(req.session.user)
            res.send({ success: true, message: 'logged in successfully' });
        })
        .catch(handleDbError(res));
});

app.get('/api/properties', (req, res) => {
    const db = req.app.get('db');
    db.sessionFind(req.session.user)
        .then(properties => {
            res.send(properties);
        })
        .catch(handleDbError(res));        
});

app.post(`/api/properties`, (req, res) => {
    const db = req.app.get('db');
    const params = Object.assign({}, req.body, {user_id:req.session.user})
    req.db.property.insert(params)
    .then(property => {
            res.send(property)
        })
        .catch(handleDbError(res));
});

app.delete('/api/properties/:id', (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    
    req.db.property.destroy({ id })
        .then(properties => {
            res.send(properties);
        })
        .catch(handleDbError(res));
});
app.get(`/api/:filter`, (req, res) => {
    const db = app.get('db');
    const filter = Number(req.params.filter)
    db.filter(req.session.user, filter )
        .then(filter => {
            res.status(200).send(filter);
        })
        .catch(handleDbError(res));
})


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log('this port is awesome', port)
});


function checkDb() {
    return (req, res, next) => {
        const db = app.get('db');
        
        if (db) {
            req.db = db;
            next();
        }
        else {
            res.status(500).send({ message: 'this died' });
        }
    };
}
function handleDbError(res) {
    return (err) => {
        console.warn('hit a snag');
        console.error(err);
        
        if (err.code == 'ECONNRESET') {
            return res.status(500).send({ message: 'something died again' });
        }
        if (err.code == '22P02') {
            res.status(422).send({ message: 'The request had incorrect or missing properties: ' + err.message });
        }
        res.status(500).send({ message: 'Internal Server Error' })
    };
}