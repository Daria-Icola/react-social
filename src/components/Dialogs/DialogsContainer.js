import React from 'react';
import { sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

// let DialogsContainer = (props) => {

//     return <StoreContext.Consumer> 
//         { store => {
//             let state = store.getState().dialogsPage;

//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             }

//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body));
//             }

//             return <Dialogs updateNewMessageBody={onNewMessageChange} 
//                             sendMessages={onSendMessageClick} 
//                             dialogsPage={state}/>
//             }
//         }
//     </StoreContext.Consumer> 
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {    
    return {
        sendMessages: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);