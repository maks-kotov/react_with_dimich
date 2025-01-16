import ListItem from './listItem/listitem'
import Message from './message/message'
import classes from './messages.module.css'
import ava1 from './аватарка1.jpg'
import ava2 from './ава1.jpg'
import React from 'react'

const Messages = (props) => {
    const namesElements = props.state.messagesPage.names
    .map( name => <ListItem name={name.name} id={name.id} to={name.path} avatar={name.avatar} alt={name.alt}/>)
    const input = React.createRef()
    const addSymbol = () => {
        const inputText = input.current.value
        props.store.addSymbolToMessage(inputText)
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
                    <Message name={props.state.messagesPage.messages.name1} text={props.state.messagesPage.messages.text1} avatar={ava1}/>     
                    <Message name={props.state.messagesPage.messages.name2} text={props.state.messagesPage.messages.text2} avatar={ava2}/>
                    <Message name={props.state.messagesPage.messages.name3} text={props.state.messagesPage.messages.text3} avatar={ava2}/>
                    <Message name={props.state.messagesPage.messages.name4} text={props.state.messagesPage.messages.text4} avatar={ava1}/>
                </div>
                
                <form className={classes.form} action="#">
                    <input onInput={addSymbol} className={classes.input} value={props.state.messagesPage.currentValue} ref={input}/>
                    <button className={classes.button}>Send</button>
                </form>
            </div>
            
        </div>
        </div>
        
    )
}

export default Messages