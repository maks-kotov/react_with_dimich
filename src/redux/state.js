const state = {
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
            {name: 'Andrew', id: 1, path: '/messages/andrew', avatar: 'аватарка1.jpg', alt: 'ava'},
            {name: 'Dmitry', id: 2, path: '/messages/dmitry', avatar: 'ава3.jpg', alt: 'ava'},
            {name: 'Sasha', id: 3, path: '/messages/sasha', avatar: 'ава9.jpg', alt: 'ava'},
            {name: 'Sveta', id: 4, path: '/messages/sveta', avatar: 'ава8.jpg', alt: 'ava'},
            {name: 'Valera', id: 5, path: '/messages/valera', avatar: 'ава5.jpg', alt: 'ava'},
            {name: 'Victor', id: 6, path: '/messages/victor', avatar: 'ава7.jpg', alt: 'ava'},
            {name: 'Mm', id: 7, path: '/messages/mason', avatar: 'ава1.jpg', alt: 'ava'},
            {name: 'Oleg', id: 8, path: '/messages/oleg', avatar: 'ава2.jpg', alt: 'ava'},
        ],
        messages: [
            
            {text1: 'I am a normal popower and i can have text and everything',
            text2: 'I am a normal pBlabllbl i can have text and everything',
            text3: 'I am a normal popower and i can have text and everything', 
            text4: 'I am a normal popower and i can have text and everything', 
            name1: 'Andrew', name2: 'Me', name3: 'Me', name4: 'Andrew'},
          
            {text1: 'я диман', text2: 'вуссап', text3: 'я масон', text4: 'ай эм сэд', name1: 'Dmitry', name2: 'Me', name3: 'Me', name4: 'Dmitry'},
          
            {text1: 'я sasha', text2: 'вуссап', text3: 'я масон', text4: "i'm sad", name1: 'Sasha', name2: 'Me', name3: 'Me', name4: 'Sasha'},
          
            {text1: 'hello', text2: 'nice to meet you', text3: 'how are you?', text4: "i'm fine", name1: 'Sveta', name2: 'Me', name3: 'Me', name4: 'Sveta'},
          
            {text1: 'валер', text2: 'чё', text3: 'валер', text4: 'настало твоё время', name1: 'Valera', name2: 'Me', name3: 'Me', name4: 'Valera'},
          
            {text1: 'здарова масон', text2: 'здарова виктор', text3: 'как оно', text4: "i am fine niga", name1: 'Victor', name2: 'Me', name3: 'Me', name4: 'Victor'},
          
            {text1: 'hello', text2: 'hello', text3: 'who are you?', text4: 'mm.', name1: 'Mm', name2: 'Me', name3: 'Me', name4: 'Mm'},
            
            {text1: 'здарова', text2: 'привет', text3: 'как дела?', text4: 'щас расскажу охуеешь', name1: 'Oleg', name2: 'Me', name3: 'Me', name4: 'Oleg'},

            {text1: '', text2: '', text3: '', text4: '', name1: '', name2: '', name3: '', name4: ''},
        ]
    },
    mainPage: {
        info: [
            {name: 'mm', avatar: 'ава1.jpg', alt: 'кот', dateOfBirth: '2 janiary', city: 'Minsk', education: 'BSU 11', webSite: 'https://it-kamasutra.com', id: 0}
        ],
        postData: [
            {myText: 'today is 05.01.2025', countLikes: '1', id: 0, avatar: 'ава1.jpg', alt: 'кот'},
            {myText: 'i cheepful now', countLikes: '2', id: 1, avatar: 'ава1.jpg', alt: 'кот'},
            {myText: 'i am coder', countLikes: '999', id: 2, avatar: 'ава1.jpg', alt: 'кот'}
        ],
    }
    
    
}
export default state;