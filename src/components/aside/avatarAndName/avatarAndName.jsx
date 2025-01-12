import classes from './avatarAndName.module.css'
const AvatarAndName = (props) => {
    return  (
        <div className={classes.flexContainer}>
                  <div className={classes.circle}>
                    <img className={classes.avatar} src={props.avatar} alt="?" />
                  </div>
                  <div className={classes.name}>{props.name}</div>
        </div>
    )
}
export default AvatarAndName;