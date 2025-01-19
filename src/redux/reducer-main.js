const ADD_POST = 'ADD-POST'
const ADD_SYMBOL_TO_POST = 'ADD-SYMBOL-TO-POST'

let initionalState = {
    info: [
        {name: 'mm', avatar: 'ава1.jpg', alt: 'кот', dateOfBirth: '2 janiary', city: 'Minsk', education: 'BSU 11', webSite: 'https://it-kamasutra.com', id: 0}
    ],
    postData: [
        {myText: 'today is 05.01.2025', countLikes: '1', id: 0, avatar: 'ава1.jpg', alt: 'кот'},
        {myText: 'i cheepful now', countLikes: '2', id: 1, avatar: 'ава1.jpg', alt: 'кот'},
        {myText: "i'm a coder", countLikes: '999', id: 2, avatar: 'ава1.jpg', alt: 'кот'}
    ],
    postValue: '',
}

const reducerMain = (state=initionalState, action) => {
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