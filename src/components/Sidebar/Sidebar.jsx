import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <header>
                Friends
            </header>
            <div className={classes.friendsItem}>
                <div>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="Friend 1"/>
                    Friend 1
                </div>
                <div>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/>
                    Friend 2
                </div>
                <div>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/>
                    Friend 3
                </div>
                <div>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/>
                    Friend 4
                </div>
                <div>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/>
                    Friend 5
                </div>
                <div>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/>
                    Friend 6
                </div>
                <div>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/>
                    Friend 7
                </div>
                <div>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/>
                    Friend 8
                </div>
            </div>
        </div>
    )
}

export default Sidebar;