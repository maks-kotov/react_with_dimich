import classes from './messages.module.css'
import React from 'react'
const Messages = (props) => {

    const input = React.createRef()
    const button = React.createRef()

    const myFunc1 = () => {
        props.addSymbol(input)
    }
    const myFunc2 = (event) => {
        props.addMessage()
        input.current.value = ''
        event.preventDefault()
    }
    
    return (
        <div>
        <div className={classes.gridContainer}>
            <div className={classes.chats}>
                <div className={classes.dialogs}>DIALOGS</div>
                <ul className={classes.list}>
                    {props.namesElements}
                </ul>
            </div>
            
            <div>
                <div className={classes.messagesContainer}>
                    {props.messagesElements}
                    {/* <Message name={props.state.messagesPage.messages.name1} text={props.state.messagesPage.messages.text1} avatar={ava1}/>     
                    <Message name={props.state.messagesPage.messages.name2} text={props.state.messagesPage.messages.text2} avatar={ava2}/>
                    <Message name={props.state.messagesPage.messages.name3} text={props.state.messagesPage.messages.text3} avatar={ava2}/>
                    <Message name={props.state.messagesPage.messages.name4} text={props.state.messagesPage.messages.text4} avatar={ava1}/> */}
                </div>
                
                <form className={classes.form} action="#">
                    <input onInput={myFunc1} className={classes.input} value={props.inputValue} ref={input}/>
                    <button onClick={myFunc2} className={classes.button} ref={button}>Send</button>
                </form>
            </div>
            
        </div>
        </div>
        
    )
}

export default Messages