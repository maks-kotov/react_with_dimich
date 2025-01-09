import classes from './messages.module.css'
import { NavLink } from 'react-router-dom'

const ListItem = (props) => {
    return (
        <li className={classes.ListItem}>
                        <NavLink to={props.to}  className={navData=> navData.isActive ? classes.activeEl : classes.yaSsilka} id={props.id}>{props.name}</NavLink>
        </li>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
                    <div className={classes.circle}>
                        <div className={classes.leftEye}></div>    
                        <div className={classes.rightEye}></div>    
                        <div className={classes.mounth}></div>           
                        <div className={classes.name}>{props.name}</div>    
                    </div>    
                    <div className={classes.cloud}>
                        <div className={classes.cloudText}>{props.text}</div>
                        <div className={classes.stick}></div>    
                        <div className={classes.stick2}></div>    
                    </div>    
                </div>
    )
}

const Messages = (props) => {

    const messagesData = [
        {name: 'Andrew', id: 1, path: '/messages/andrew'},
        {name: 'Dmitry', id: 2, path: '/messages/dmitry'},
        {name: 'Sasha', id: 3, path: '/messages/sasha'},
        {name: 'Sveta', id: 4, path: '/messages/sveta'},
        {name: 'Valera', id: 5, path: '/messages/valera'},
        {name: 'Victor', id: 6, path: '/messages/victor'},
        {name: 'Mason', id: 7, path: '/messages/mason'},
        {name: 'Oleg', id: 8, path: '/messages/oleg'},
    ]
    const messagesElements = messagesData
    .map( message => <ListItem name={message.name} id={message.id} to={message.path} />
    )
    return (
        
        <div className={classes.gridContainer}>
            <div className={classes.chats}>
                <div className={classes.dialogs}>DIALOGS</div>
                <ul>
                    {messagesElements}
                    {/* <ListItem name={messagesData[0].name} to={messagesData[0].path}/>
                    <ListItem name={messagesData[1].name} to={messagesData[1].path}/>
                    <ListItem name={messagesData[2].name} to={messagesData[2].path}/>
                    <ListItem name={messagesData[3].name} to={messagesData[3].path}/>
                    <ListItem name={messagesData[4].name} to={messagesData[4].path}/>
                    <ListItem name={messagesData[5].name} to={messagesData[5].path}/>
                    <ListItem name={messagesData[6].name} to={messagesData[6].path}/>
                    <ListItem name={messagesData[7].name} to={messagesData[7].path}/> */}
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