import { combineReducers } from 'redux';
import {STEP1, STEP2, STEP3, STEP4, STEP5} from '../Actions/constraints';


function step1 (state = {}, action) {
    switch(action.type){
        case STEP1 :
            return action.payload;
        default : 
            return state;
    }
}

function step2 (state = {}, action) {
    switch(action.type){
        case STEP2 :
            return action.payload;
        default : 
            return state;
    }
}

function step3 (state = {}, action) {
    switch(action.type){
        case STEP3 :
            return action.payload;
        default : 
            return state;
    }
}

function step4 (state = {}, action) {
    switch(action.type){
        case STEP4 :
            return action.payload;
        default : 
            return state;
    }
}

function step5 (state = {}, action) {
    switch(action.type){
        case STEP5 :
            return action.payload;
        default : 
            return state;
    }
}
const rootReducer = combineReducers({step1, step2, step3, step4, step5});

export default rootReducer;