import classes from "./myPosts.module.css";
import Post from "./post/post";
const MyPosts = () => {
  return (
    <div>
      <div className={classes.myPosts}>My posts</div>
      <form className={classes.form}>
        <textarea
          className={classes.textarea}
          placeholder="your news..."
        ></textarea>
        <button className={classes.button}>Send</button>
      </form>
      <Post myText='today is 05.01.2025' countLikes='1'></Post>
      <Post myText='i cheepful now' countLikes='2'></Post>
      <Post myText='i am coder' countLikes='999'></Post>
    </div>
  );
};
export default MyPosts;
