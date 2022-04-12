import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are u?', likesCount: 9},
                {id: 2, message: "Aliya loh", likesCount: 8},
                {id: 1, message: 'Jopa', likesCount: 1},
                {id: 2, message: "It's my first post", likesCount: 13},
            ],
            newPostText: 'text',
        },
        sidebar: {},
        messagesPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'yo'},
                {id: 3, message: 'How a u'},
                {id: 4, message: 'pedik'}
            ],
            dialogs: [
                {id: 1, name: 'Pozer'},
                {id: 2, name: 'Melbaby'},
                {id: 3, name: 'Artem'},
                {id: 4, name: 'Tolyan'}
            ],
            newMessagesBody: ''
        },
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar= sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;