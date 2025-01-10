import classes from './post.module.css'
const Post = (props) => {
    return (
      <div >
        <div className={classes.post}>
          <div className={classes.circle}>
            <img src={props.avatar} alt={props.alt} className={classes.postAvatar}></img>
          </div>
          <div>{props.myText}</div>
        </div>
        <div className={classes.likesCount}>
          <span className={classes.heart}>&hearts;</span>
          <span className={classes.countLikes}>{props.countLikes}</span>
        </div>
      </div>
    );
}
export default Post;