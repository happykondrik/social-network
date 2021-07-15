import React from "react";
import classes from './Users.module.css';

const Users = (props) => {
    debugger
    if (props.users.length === 0) {
        props.setUsersAC([
                {
                    id: 1,
                    photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                    followed: true,
                    fullName: 'Алексей',
                    status: 'Я знаю ReactJS',
                    location: {city: 'Днепр', country: 'Украина'}
                },
                {
                    id: 2,
                    photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                    followed: true,
                    fullName: 'Павел',
                    status: 'Я знаю как делать бабки',
                    location: {city: 'Днепр', country: 'Украина'}
                },
                {
                    id: 3,
                    photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                    followed: false,
                    fullName: 'Андрей',
                    status: 'Я знаю как пригнать тачку',
                    location: {city: 'Днепр', country: 'Украина'}
                },
                {
                    id: 4,
                    photoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                    followed: false,
                    fullName: 'Шарапчик',
                    status: 'Я беркут',
                    location: {city: 'Днепр', country: 'Украина'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(users => <div key={users.id}>
                <span>
                    <div>
                        <img src={users.photoUrl} alt="photoUrl" className={classes.usersPhoto}/>
                    </div>
                    <div>
                        {users.followed
                            ? <button onClick={() => {
                                props.unFollowAC(users.id)
                            }}>Un follow</button>
                            : <button onClick={() => {
                                props.followAC(users.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{users.fullName}</div>
                        <div>{users.status}</div>
                    </span>
                    <span>
                        <div>{users.location.country}</div>
                        <div>{users.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;