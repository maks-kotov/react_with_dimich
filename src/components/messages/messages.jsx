import Message from './components/message'
import classes from './messages.module.css'
import { NavLink } from 'react-router-dom'
const Messages = (props) => {
    return (
        
        <div className={classes.gridContainer}>
            <div className={classes.chats}>
                <div className={classes.dialogs}>DIALOGS</div>
                <ul>
                    <li className={classes.ListItem}>
                        <NavLink to='andrew'>Andrew</NavLink>
                    </li>
                    <li className={classes.ListItem}>
                        <NavLink to='dmitry' className={classes.activeEl}>Dmitry</NavLink>
                    </li>
                    <li className={classes.ListItem}>
                        <NavLink to='sasha'>Sasha</NavLink>
                    </li>
                    <li className={classes.ListItem}>
                        <NavLink to='sveta'>Sveta</NavLink>
                    </li>
                    <li className={classes.ListItem}>
                        <NavLink to='valera'>Valera</NavLink>
                    </li>
                    <li className={classes.ListItem}>
                        <NavLink to='victor'>Victor</NavLink>
                    </li>
                    <li className={classes.ListItem}>
                        <NavLink to='mason'>Mason</NavLink>
                    </li>
                    <li className={classes.ListItem}>
                        <NavLink to='oleg'>Oleg</NavLink>
                    </li>
                </ul>
            </div>
            
            <div className={classes.messages}>
                <Message name='Dmitry' text='I am a normal popower and i can have text and everything'/>    
                <Message name='Me' text='I am a normal pBlabllbl i can have text and everything'/>
                <Message name='Me' text='I am a normal popower and i can have text and everything'/>
                <Message name='Dmitry' text='I am a normal popower and i can have text and everything'/>
                </div>
            </div>
    )
}
export default Messages