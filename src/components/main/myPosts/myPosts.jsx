import React from "react";
import classes from "./myPosts.module.css";
import Post from "./post/post";
import { makeActionForAddPost, makeActionForAddSymbolToPost } from "../../../redux/state";
const MyPosts = (props) => {
  const postElements = props.state.mainPage.postData.map( post => (
    <Post
      myText={post.myText}
      countLikes={post.countLikes}
      id={post.id}
      avatar={post.avatar}
      alt={post.alt}
    ></Post>
  ));

  

  let newPostElement = React.createRef();
  const writeCurrentValue = () => {
    let symbol = newPostElement.current.value;
    props.dispatch(makeActionForAddSymbolToPost(symbol))
  }

  const addPost = (event) => {
    props.dispatch(makeActionForAddPost())
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
          onInput={writeCurrentValue}
          value={props.state.mainPage.postValue} 
        />
        <button onClick={addPost} className={classes.button}>
          Add post
        </button>
      </form>

      {postElements}
    </div>
  );
};
export default MyPosts;
