import classes from './avaAndDesc.module.css'
const AvaAndDesc = (props) => {
    return (
            <div className={classes.avaAndDesc}>

                <img className={classes.ava} src={props.info[0].avatar} alt={props.info[0].alt}></img>

              <div className={classes.desc}>
                <div className={classes.desc__name}>{props.info[0].name}</div>
                <div>Date of Birth: {props.info[0].dateOfBirth}</div>
                <div>City: {props.info[0].city}</div>
                <div>Education: {props.info[0].education}</div>
                <div>Web Site: {props.info[0].webSite}</div>
              </div>
            </div>
    )
}
export default AvaAndDesc;