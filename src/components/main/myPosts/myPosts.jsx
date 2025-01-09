import classes from "./myPosts.module.css";
import Post from "./post/post";
const MyPosts = () => {
  const postData = [
    {myText: 'today is 05.01.2025', countLikes: '1', id: 0},
    {myText: 'i cheepful now', countLikes: '2', id: 1},
    {myText: 'i am coder', countLikes: '999', id: 2}
  ]
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
      <Post myText={postData[0].myText} countLikes={postData[0].countLikes}></Post>
      <Post myText={postData[1].myText} countLikes={postData[1].countLikes}></Post>
      <Post myText={postData[2].myText} countLikes={postData[2].countLikes}></Post>

    </div>
  );
};
export default MyPosts;
