import classes from "./myPosts.module.css";
import Post from "./post/post";
const MyPosts = () => {
  const postData = [
    {myText: 'today is 05.01.2025', countLikes: '1', id: 0},
    {myText: 'i cheepful now', countLikes: '2', id: 1},
    {myText: 'i am coder', countLikes: '999', id: 2}
  ]
  const postElements = postData.map(post => <Post myText={post.myText} countLikes={post.countLikes} id={post.id}></Post>)

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
