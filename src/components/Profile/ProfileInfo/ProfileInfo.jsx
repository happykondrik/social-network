import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.backgroundBlock}>
                <img src='./../../../img/profile-bg1.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + discription
            </div>
        </div>
    );
}

export default ProfileInfo;