import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <div className={classes.wrapper}>
                <ProfileInfo/>
                <MyPosts
                    posts={props.profilePage.posts}
                    addPost={props.addPost}
                    newPostText={props.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText}
                />
            </div>
        </div>
    )
}

export default Profile;