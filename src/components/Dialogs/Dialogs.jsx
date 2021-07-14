import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>);
    let newMessageText = state.newMessageText;

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessageActionCreator();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageTextActionCreator(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.text}>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={newMessageText} placeholder ="Введите сообщение"/>
                </div>
                <div>
                    <button onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;