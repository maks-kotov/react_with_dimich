import ListItem from './components/listItem'
import Message from './components/message'
import classes from './messages.module.css'
import { NavLink } from 'react-router-dom'
const Messages = (props) => {
    return (
        
        <div className={classes.gridContainer}>
            <div className={classes.chats}>
                <div className={classes.dialogs}>DIALOGS</div>
                <ul>
                    <ListItem name='Andrew' to='/messages/andrew'/>
                    <ListItem name='Dmitry' to='/messages/dmitry'/>
                    <ListItem name='Sasha' to='/messages/sasha'/>
                    <ListItem name='Sveta' to='/messages/sveta'/>
                    <ListItem name='Valera' to='/messages/valera'/>
                    <ListItem name='Victor' to='/messages/victor'/>
                    <ListItem name='Mason' to='/messages/mason'/>
                    <ListItem name='Oleg' to='/messages/oleg'/>
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