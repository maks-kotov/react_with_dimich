import classes from './avaAndDesc.module.css'
const AvaAndDesc = (props) => {
    return (
            <div className={classes.avaAndDesc}>

                <img className={classes.ava} src="https://yt3.googleusercontent.com/G2sIluUKPSeeZHLwoAwzX8smIFyApp-O71N7uogfHFTUw6vggZwR_9npoZ88798NgOMa9OP2=s900-c-k-c0x00ffffff-no-rj" alt="кот"></img>

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