import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.backgroundBlock}>
                <img src='https://engageemployee.com/wp-content/uploads/2016/09/Data2-1.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + discription
            </div>
        </div>
    );
}

export default ProfileInfo;