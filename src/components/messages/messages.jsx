import ListItem from './listItem/listitem'
import Message from './message/message'
import classes from './messages.module.css'


const Messages = (props) => {
    const namesElements = props.names
    .map( name => <ListItem name={name.name} id={name.id} to={name.path} />)
    
    return (
        
        <div className={classes.gridContainer}>
            <div className={classes.chats}>
                <div className={classes.dialogs}>DIALOGS</div>
                <ul>
                    {namesElements}
                </ul>
            </div>
            
            <div>
                <Message name={props.name1} text={props.text1}/>    
                <Message name={props.name2} text={props.text2}/>
                <Message name={props.name3} text={props.text3}/>
                <Message name={props.name4} text={props.text4}/>
            </div>
        </div>
    )
}
export default Messages