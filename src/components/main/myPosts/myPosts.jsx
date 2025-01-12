import React from "react";
import classes from "./myPosts.module.css";
import Post from "./post/post";
const MyPosts = (props) => {
  
  let newPostElement = React.createRef()
  const addPost= () => {
    let text = newPostElement.current.value
    alert(text)
  
  }

  const postElements = props.posts.map(post => <Post myText={post.myText} countLikes={post.countLikes} id={post.id} avatar={post.avatar} alt={post.alt}></Post>)

  return (
    <div className={classes.myPostsContainer}>
      <div className={classes.myPosts}>My posts</div>
      <form className={classes.form}>
        <textarea
          className={classes.textarea}
          placeholder="your news..."
          ref={newPostElement}
        ></textarea>
        <button onClick={addPost} className={classes.button}>Add post</button>
      </form>
      
      {postElements}

    </div>
  );
};
export default MyPosts;
