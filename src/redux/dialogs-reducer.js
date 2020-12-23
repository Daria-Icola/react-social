const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Darya'},
        {id: 3, name: 'Maria'},
        {id: 4, name: 'Ulya'},
        {id: 5, name: 'Nikita'},
        {id: 6, name: 'Maks'},
    ],
    messages: [
        {id: 1, message: 'Whats up?'},
        {id: 2, message: 'Lets play?'},
        {id: 3, message: "Hello everyone!"},
        {id: 4, message: "Hashtag Itsfun"},
        {id: 5, message: "Priveeet, kak dela?"},
        {id: 6, message: "Baby, don't hurt me"}
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body} ]
            };

        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;