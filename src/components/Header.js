import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/header-logo.svg';

function Header(props) {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="Around the U.S. Logo" />
            {props.linkText && <Link className="header__link btn-animate" to={props.linkTo}>{props.linkText}</Link>}
        </header>
    )
}

export default Header;