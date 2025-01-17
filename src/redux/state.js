const ADD_POST = 'ADD-POST'
const ADD_SYMBOL_TO_POST = 'ADD-SYMBOL-TO-POST'
const ADD_SYMBOL_TO_MESSAGE = 'ADD-SYMBOL-TO-MESSAGE'
const ADD_MESSAGE = 'ADD-MESSAGE'
let messageId = 0
const store = {
    _state:  {
        globalData: {
            names: ['Andrew', 'Dmitry', 'Sasha', 'Sveta', 'Valera', 'Victor', 'Mm', 'Oleg']
        },
        permEls: {
            aside: {
                titles: ['Profile', 'Messages', 'News', 'Music', 'Settings', 'Friends'],
                paths: ['/main', '/messages', '/news', '/music', '/settings', '/friends'],
                avatars: ['аватарка1.jpg', 'ава9.jpg', 'ава8.jpg'],
                friends: ['Andrew', 'Sasha', 'Sveta']
            }
        },
        messagesPage: {
            names: [
                {name: 'Andrew', id: 0, path: '/messages/andrew', avatar: 'аватарка1.jpg', alt: 'ava'},
                {name: 'Dmitry', id: 1, path: '/messages/dmitry', avatar: 'ава3.jpg', alt: 'ava'},
                {name: 'Sasha', id: 2, path: '/messages/sasha', avatar: 'ава9.jpg', alt: 'ava'},
                {name: 'Sveta', id: 3, path: '/messages/sveta', avatar: 'ава8.jpg', alt: 'ava'},
                {name: 'Valera', id: 4, path: '/messages/valera', avatar: 'ава5.jpg', alt: 'ava'},
                {name: 'Victor', id: 5, path: '/messages/victor', avatar: 'ава7.jpg', alt: 'ava'},
                {name: 'Mm', id: 6, path: '/messages/mason', avatar: 'ава1.jpg', alt: 'ava'},
                {name: 'Oleg', id: 7, path: '/messages/oleg', avatar: 'ава2.jpg', alt: 'ava'},
            ],
            messages: [
                
                // {text1: 'I am a normal popower and i can have text and everything',
                // text2: 'I am a normal pBlabllbl i can have text and everything',
                // text3: 'I am a normal popower and i can have text and everything', 
                // text4: 'I am a normal popower and i can have text and everything', 
                // name1: 'Andrew', name2: 'Me', name3: 'Me', name4: 'Andrew'},
              
                // {text1: 'я диман', text2: 'вуссап', text3: 'я масон', text4: 'ай эм сэд', name1: 'Dmitry', name2: 'Me', name3: 'Me', name4: 'Dmitry'},
              
                // {text1: 'я sasha', text2: 'вуссап', text3: 'я масон', text4: "i'm sad", name1: 'Sasha', name2: 'Me', name3: 'Me', name4: 'Sasha'},
              
                // {text1: 'hello', text2: 'nice to meet you', text3: 'how are you?', text4: "i'm fine", name1: 'Sveta', name2: 'Me', name3: 'Me', name4: 'Sveta'},
              
                // {text1: 'валер', text2: 'чё', text3: 'валер', text4: 'настало твоё время', name1: 'Valera', name2: 'Me', name3: 'Me', name4: 'Valera'},
              
                // {text1: 'здарова масон', text2: 'здарова виктор', text3: 'как оно', text4: "i am fine niga", name1: 'Victor', name2: 'Me', name3: 'Me', name4: 'Victor'},
              
                // {text1: 'hello', text2: 'hello', text3: 'who are you?', text4: 'mm.', name1: 'Mm', name2: 'Me', name3: 'Me', name4: 'Mm'},
                
                // {text1: 'здарова', text2: 'привет', text3: 'как дела?', text4: 'щас расскажу охуеешь', name1: 'Oleg', name2: 'Me', name3: 'Me', name4: 'Oleg'},
    
                // {text1: '', text2: '', text3: '', text4: '', name1: '', name2: '', name3: '', name4: ''},
            ],
            currentValue: ''
        },
        mainPage: {
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
    },
    _callSubscriber() {

    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id:5,
                myText: this._state.mainPage.postValue,
                countLikes: 0,
                avatar: 'ава1.jpg',
                alt: 'кот',
            }
            this._state.mainPage.postData.push(newPost)
            this._state.mainPage.postValue = ''
            this._callSubscriber(this._state)

        }
        else if(action.type === ADD_SYMBOL_TO_POST) {
            this._state.mainPage.postValue = action.receivedWord 
            this._callSubscriber()
        }
        else if(action.type === ADD_SYMBOL_TO_MESSAGE) {
            this._state.messagesPage.currentValue = action.receivedWord 
            this._callSubscriber()
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                name: 'makson',
                text: this._state.messagesPage.currentValue,
                avatar: 'ава1.jpg',
                id: messageId++
            }
            this._state.messagesPage.messages.push(newMessage)
            this._callSubscriber(this._state)
            this._state.messagesPage.currentValue = ''
            console.log(this._state.messagesPage.messages);
            
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }
    
}
export default store;

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