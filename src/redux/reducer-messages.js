const ADD_SYMBOL_TO_MESSAGE = 'ADD-SYMBOL-TO-MESSAGE'
const ADD_MESSAGE = 'ADD-MESSAGE'

const reducerMessages = (state, action) => {
    switch (action.type) {
        case ADD_SYMBOL_TO_MESSAGE:
            state.messageValue = action.receivedWord 
            return state
        case ADD_MESSAGE:
            let newMessage = {
                name: 'makson',
                text: state.messageValue,
                avatar: 'ава1.jpg',
                id: 0
            }
            state.messages.push(newMessage)
            return state     
        default:
            return state
    }
}
export const makeActionForAddSymbolToMessage = (inputText) => {
    return {
        type: ADD_SYMBOL_TO_MESSAGE,
        receivedWord: inputText
    }
}
export const makeActionForAddMessage = () => {
return {
  type: ADD_MESSAGE,
}
}

export default reducerMessages;