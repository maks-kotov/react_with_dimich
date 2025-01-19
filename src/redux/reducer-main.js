const ADD_POST = 'ADD-POST'
const ADD_SYMBOL_TO_POST = 'ADD-SYMBOL-TO-POST'

const reducerMain = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:5,
                myText: state.postValue,
                countLikes: 0,
                avatar: 'ава1.jpg',
                alt: 'кот',
            }
            state.postData.push(newPost)
            state.postValue = ''
            return state
        
        case ADD_SYMBOL_TO_POST:
            state.postValue = action.receivedWord
            return state
    
        default:
            return state
    }
}
export const makeActionForAddPost = () => {
    return {
      type: ADD_POST
    }
}
export const makeActionForAddSymbolToPost = (symbol) => {
    return {
      type: ADD_SYMBOL_TO_POST,
      receivedWord: symbol
    }
}

export default reducerMain;