let initionalState = {
    titles: ['Profile', 'Messages', 'News', 'Music', 'Settings', 'Friends'],
    paths: ['/main', '/messages', '/news', '/music', '/settings', '/friends'],
    avatars: ['аватарка1.jpg', 'ава9.jpg', 'ава8.jpg'],
    friends: ['Andrew', 'Sasha', 'Sveta']
}

const reducerAside = (state=initionalState, action) => {
    return state
}
export default reducerAside;