import ListItem from './listItem/listitem'
import Messages from './messages'
import Message from './message/message'
import React from 'react'
import { makeActionForAddMessage, makeActionForAddSymbolToMessage } from '../../redux/reducer-messages'

const ContainerMessages = (props) => {
    const namesElements = props.state.messagesPage.names
    .map( name => <ListItem name={name.name} id={name.id} to={name.path} avatar={name.avatar} alt={name.alt}/>)

    const messagesElements = props.state.messagesPage.messages
    .map(message => <Message name={message.name} text={message.text} avatar={message.avatar} id={message.id}/>)

    const addSymbol = (input) => {
        const inputText = input.current.value
        props.dispatch(makeActionForAddSymbolToMessage(inputText))
    }
    const addMessage = () => {
        props.dispatch(makeActionForAddMessage())
        // input.current.value = '' эти 2 хуйни выпоняем в messages.jsx
        // event.preventDefault() 
    }
    
    return <Messages namesElements={namesElements} messagesElements={messagesElements} addSymbol={addSymbol} addMessage={addMessage} inputValue={props.state.messagesPage.currentValue}/>
}

export default ContainerMessages