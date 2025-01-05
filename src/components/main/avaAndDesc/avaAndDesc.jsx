import classes from './avaAndDesc.module.css'
const AvaAndDesc = (props) => {
    return (
            <div className={classes.avaAndDesc}>

                <img className={classes.ava} src="https://yt3.googleusercontent.com/G2sIluUKPSeeZHLwoAwzX8smIFyApp-O71N7uogfHFTUw6vggZwR_9npoZ88798NgOMa9OP2=s900-c-k-c0x00ffffff-no-rj" alt="кот"></img>

              <div className={classes.desc}>
                <div className={classes.desc__name}>{props.scam}</div>
                <div>Date of Birth: 2 janiary</div>
                <div>City: Minsk</div>
                <div>Education: BSU 11</div>
                <div>Web Site: https://it-kamasutra.com</div>
              </div>
            </div>
    )
}
export default AvaAndDesc;