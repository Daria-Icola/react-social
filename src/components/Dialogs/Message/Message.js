import React from 'react';
import s from './../Dialogs.module.css';

let newMessageElement = React.createRef();
  let sendMessage = () => {
    let text = newMessageElement.current.value;
    alert('something');
  }

const Message = (props) => {
    return (
        <div>
            <div className={s.dialog}>{props.message}</div>
        </div>
        
    )
}

export default Message;