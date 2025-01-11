import classes from './message.module.css'

const Message = (props) => {
    if(props.name === '' && props.text === '') {
        return ''
    }
    
    return (

        <div className={classes.message}>
                    <div className={classes.circle}>
                        <img className={classes.avatar} src={props.avatar} alt="" />
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
export default Message;