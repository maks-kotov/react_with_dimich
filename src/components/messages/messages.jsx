import ListItem from './listItem/listitem'
import Message from './message/message'
import classes from './messages.module.css'
import ava1 from './аватарка1.jpg'
import ava2 from './ава1.jpg'
import React from 'react'
// import ava3 from './ава1.jpg'
// import ava4 from './ава1.jpg'
// import ava5 from './ава1.jpg'
// import ava6 from './ава1.jpg'
// import ava7 from './ава1.jpg'
// import ava8 from './ава1.jpg'
// import ava9 from './ава1.jpg'
// import ava10 from './ава1.jpg'
// import ava11 from './ава1.jpg'
// import ava12 from './ава1.jpg'


const Messages = (props) => {
    const namesElements = props.names
    .map( name => <ListItem name={name.name} id={name.id} to={name.path} avatar={name.avatar} alt={name.alt}/>)
    const input = React.createRef()
    const addSymbol = () => {
        const inputText = input.current.value
        props.addSymbolToMessage(inputText)
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
                    <Message name={props.messages.name1} text={props.messages.text1} avatar={ava1}/>     
                    <Message name={props.messages.name2} text={props.messages.text2} avatar={ava2}/>
                    <Message name={props.messages.name3} text={props.messages.text3} avatar={ava2}/>
                    <Message name={props.messages.name4} text={props.messages.text4} avatar={ava1}/>
                </div>
                
                <form className={classes.form} action="#">
                    <input onInput={addSymbol} className={classes.textarea} value={props.currentValue} ref={input}/>
                    <button className={classes.button}>Send</button>
                </form>
            </div>
            
        </div>
        </div>
        
    )
}

export default Messages