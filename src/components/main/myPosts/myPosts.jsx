import React from "react";
import classes from "./myPosts.module.css";
import Post from "./post/post";
const MyPosts = (props) => {
  const postElements = props.posts.map( post => (
    <Post
      myText={post.myText}
      countLikes={post.countLikes}
      id={post.id}
      avatar={post.avatar}
      alt={post.alt}
    ></Post>
  ));

  let newPostElement = React.createRef();
  const addPost = (event) => {
    let text = newPostElement.current.value;
    props.addPost(text)
    event.preventDefault()
    
  };

  return (
    <div className={classes.myPostsContainer}>
      <div className={classes.myPosts}>My posts</div>
      <form className={classes.form} action="#">
        <textarea
          className={classes.textarea}
          placeholder="your news..."
          ref={newPostElement}
        ></textarea>
        <button onClick={addPost} className={classes.button}>
          Add post
        </button>
      </form>

      {postElements}
    </div>
  );
};
export default MyPosts;
