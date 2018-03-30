import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="fullHeader">
      <div className="Header">
        <div className = 'leftContainer'>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAAAXNSR0IArs4c6QAAAplJREFUSA3tlU+ITXEUx++b9yQz1CjN2sLMFIMdNRtbZIHSsFNkactSoySKRihiO5SNovxZsFDjTxYiYRJmZRrJyCA1PJ/v9Tv1m9+7v+ve996UhW997/md8zvne867v3vvS5IWUK/X18Injmt8KWJn4U9omGGx289pyxrRIfjVumDVaIfEsQugPwRuinttae6adCB51AnLqOEvzz/CepHnP2Y95fz7bRkEsW54w4nKTMPNcAv8DA23bIE9AXV8QuuDILISjkvN4QW2z34h63740u35ptAgHSaUZ1Hdyv4D2OvyrmHXVyqVcecnrF+xXgevW8zZxYFf3mWACjwE7RmQHVY8pqY9eBhazSzrL1AofzQULYFXVe0gsW2xAcI4uduhDeAkSg5CVS98btXY13BV2OxvPjUDrhaT4j1XO978chI3wU9p2Z/LTczS/Kr4rmqh/xZJe2O8gh0SDkL/Q3QMv9ADnSeMRhUehwb1ONBQQ7ATXrYsrL6YOxsSWwyguQt+gwb17JSsvpLLsWNwCAoTcAMsdpaqKI4VpEpbPQT1HEtn4PIQGu6w6IO34cc0tY0XaTpt9bgLDY/0XLxx3gi2Bk87f74Gkbx6qNcpOeBpjR+sv+9lfBnf6ccTrMrOM6r0m6XHfvqdxH6oEZhhIRYGxatJ7okUTKH5LLLXECb3rYK6I6XAEHsouJBXRM5eGlzMywn3mvlGDIYiGX6RnDllpe8I1faHN8163xy1JDmP3+3lBNtxt5lBTO07t/+KObIcyQhGg5RGM0dTukmRgv+DhHfpn7kjeQ9rFw/fuXBy/CKv5mCktitDLw1lDaJPr7AQhq9nuuEulpcV6ycoxtBQm3U0l6iejCm4+A/smYwcxbSXB2mPhgm/AS0s0PCHwwurAAAAAElFTkSuQmCC' alt="" height = "28" width = "34" className = 'logo'/>
        <h1 className="houser">Houser</h1>
        <h1 className="dashboard">Dashboard</h1>
        </div>
        <div className="right container">
        <Link to='/'>
        <p className = 'headerLogout'>Logout</p>
        </Link>
        </div>
      </div>
      </div>
    );
  }
}

export default Header;