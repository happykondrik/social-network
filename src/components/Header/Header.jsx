import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/617/617254.svg" />
            <h2>Social network</h2>
        </header>
    );
}

export default Header;