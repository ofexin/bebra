
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessagesBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessagesBody;
            state.newMessagesBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default messagesReducer;