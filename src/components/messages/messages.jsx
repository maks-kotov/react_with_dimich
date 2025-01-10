import ListItem from './listItem/listitem'
import Message from './message/message'
import classes from './messages.module.css'


const Messages = (props) => {
    const names = [
        {name: 'Andrew', id: 1, path: '/messages/andrew'},
        {name: 'Dmitry', id: 2, path: '/messages/dmitry'},
        {name: 'Sasha', id: 3, path: '/messages/sasha'},
        {name: 'Sveta', id: 4, path: '/messages/sveta'},
        {name: 'Valera', id: 5, path: '/messages/valera'},
        {name: 'Victor', id: 6, path: '/messages/victor'},
        {name: 'Mason', id: 7, path: '/messages/mason'},
        {name: 'Oleg', id: 8, path: '/messages/oleg'},]
        // создание jsx элементов с информацией из массива messagesData
    const namesElements = names
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