import classes from './message.module.css'

const Message = (props) => {
    const marginLeft = {
        marginLeft: '250px'
    }

    return (
        <div>
            <div className={classes.message} style={Number(props.id) % 2 === 0 ? marginLeft : {}}>
                        <div className={classes.circle}>
                            <img className={classes.avatar} src={props.avatar} alt="" />
                            <div className={classes.name}>{props.name}</div>    
                        </div>    
                        <div className={classes.cloud}>
                            <div className={classes.cloudText}>{props.text}</div>
                        </div>    
            </div>
        </div>
        
    )
    
}
export default Message;