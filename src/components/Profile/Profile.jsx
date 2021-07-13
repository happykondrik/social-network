import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    debugger;
    return (
        <div>
            <div className={classes.wrapper}>
                <ProfileInfo/>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;