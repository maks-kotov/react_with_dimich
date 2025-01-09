import classes from './message.module.css'

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
export default Message;