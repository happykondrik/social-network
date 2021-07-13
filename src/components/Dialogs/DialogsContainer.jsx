import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {


    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;

            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
            }

            let onMessageChange = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text));
            }
            return <Dialogs updateNewMessageTextActionCreator={onMessageChange} addMessageActionCreator={addMessage}
                            dialogsPage={state}/>
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;