import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile /> }/>

                <Route path='/users'
                       render={() => <UsersContainer /> }/>

                <Route path='/dialogs'
                       render={() => <DialogsContainer /> }/>

                <Route path='/news'
                       render={() => <News/> }/>

                <Route path='/music'
                       render={() => <Music/> }/>

                <Route path='/settings'
                       render={() => <Settings/> }/>
            </div>
            <Sidebar/>
        </div>
    );
}

export default App;
