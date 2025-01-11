import classes from './message.module.css'

const Message = (props) => {
    if(props.name === '' && props.text === '') {
        return ''
    }
    const marginLeft = {
        marginLeft: '250px'
    }
  
    // if(props.name === 'Me') {
    //     console.log('me');
    // }

    return (
        <div>
            <div className={classes.message} style={props.name === 'Me' ? marginLeft : {}}>
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