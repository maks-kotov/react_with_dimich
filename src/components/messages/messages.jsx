import ListItem from './listItem/listitem'
import Message from './message/message'
import classes from './messages.module.css'


const Messages = (props) => {
    const namesElements = props.names
    .map( name => <ListItem name={name.name} id={name.id} to={name.path} avatar={name.avatar} alt={name.alt}/>)
    
    return (
        
        <div className={classes.gridContainer}>
            <div className={classes.chats}>
                <div className={classes.dialogs}>DIALOGS</div>
                <ul>
                    {namesElements}
                </ul>
            </div>
            
            <div>
                <Message name={props.messages.name1} text={props.messages.text1}/>     
                <Message name={props.messages.name2} text={props.messages.text2}/>
                <Message name={props.messages.name3} text={props.messages.text3}/>
                <Message name={props.messages.name4} text={props.messages.text4}/>
            </div>
            
        </div>
    )
}
export default Messages