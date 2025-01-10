import classes from './avaAndDesc.module.css'
const AvaAndDesc = (props) => {
    return (
            <div className={classes.avaAndDesc}>

                <img className={classes.ava} src={props.info.avatar} alt={props.info.alt}></img>

              <div className={classes.desc}>
                <div className={classes.desc__name}>{props.info.name}</div>
                <div>Date of Birth: {props.info.dateOfBirth}</div>
                <div>City: {props.info.city}</div>
                <div>Education: {props.info.education}</div>
                <div>Web Site: {props.info.webSite}</div>
              </div>
            </div>
    )
}
export default AvaAndDesc;