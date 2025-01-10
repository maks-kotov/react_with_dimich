import classes from "./myPosts.module.css";
import Post from "./post/post";
const MyPosts = (props) => {

  const postElements = props.posts.map(post => <Post myText={post.myText} countLikes={post.countLikes} id={post.id}></Post>)

  return (
    <div className={classes.myPostsContainer}>
      <div className={classes.myPosts}>My posts</div>
      <form className={classes.form}>
        <textarea
          className={classes.textarea}
          placeholder="your news..."
        ></textarea>
        <button className={classes.button}>Send</button>
      </form>
      
      {postElements}

    </div>
  );
};
export default MyPosts;
