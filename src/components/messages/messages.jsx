import ListItem from './listItem/listitem'
import Message from './message/message'
import classes from './messages.module.css'
import React from 'react'
import { makeActionForAddMessage, makeActionForAddSymbolToMessage } from '../../redux/reducer-messages'

const Messages = (props) => {
    const namesElements = props.state.messagesPage.names
    .map( name => <ListItem name={name.name} id={name.id} to={name.path} avatar={name.avatar} alt={name.alt}/>)

    const messagesElements = props.state.messagesPage.messages
    .map(message => <Message name={message.name} text={message.text} avatar={message.avatar} id={message.id}/>)

    const input = React.createRef()
    const button = React.createRef()
    const addSymbol = () => {
        const inputText = input.current.value
        props.dispatch(makeActionForAddSymbolToMessage(inputText))
    }
    const addMessage = (event) => {
        props.dispatch(makeActionForAddMessage())
        input.current.value = ''
        event.preventDefault()
    }
    
    return (
        <div>
        <div className={classes.gridContainer}>
            <div className={classes.chats}>
                <div className={classes.dialogs}>DIALOGS</div>
                <ul className={classes.list}>
                    {namesElements}
                </ul>
            </div>
            
            <div>
                <div className={classes.messagesContainer}>
                    {messagesElements}
                    {/* <Message name={props.state.messagesPage.messages.name1} text={props.state.messagesPage.messages.text1} avatar={ava1}/>     
                    <Message name={props.state.messagesPage.messages.name2} text={props.state.messagesPage.messages.text2} avatar={ava2}/>
                    <Message name={props.state.messagesPage.messages.name3} text={props.state.messagesPage.messages.text3} avatar={ava2}/>
                    <Message name={props.state.messagesPage.messages.name4} text={props.state.messagesPage.messages.text4} avatar={ava1}/> */}
                </div>
                
                <form className={classes.form} action="#">
                    <input onInput={addSymbol} className={classes.input} value={props.state.messagesPage.currentValue} ref={input}/>
                    <button onClick={addMessage} className={classes.button} ref={button}>Send</button>
                </form>
            </div>
            
        </div>
        </div>
        
    )
}

export default Messages