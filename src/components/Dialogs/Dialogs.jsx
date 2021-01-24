import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messages.map(message => <Message message={message.message}/>);

//
    let newMessageElement = React.createRef();

    let addMessage = () => {
        debugger;
        props.addMessage();
    }

    let onMessageChange = () => {
        debugger;
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
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
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;