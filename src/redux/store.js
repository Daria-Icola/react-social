// --------------
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Whats up?', likesCount: 15},
                {id: 2, message: 'Lets play?', likesCount: 25}],
            newPostText: 'meowmeowmeow',
        },

        dialogsPage: {
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
            newMessageBody: '',
        },

        galleryPage: {
            images: []
        },
        sidebar: {

        },
    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}
window.store = store;

export default store;

