import React from "react";
import classes from "./myPosts.module.css";
const MyPosts = (props) => {
  
  let newPostSymbol = React.createRef(); //параметр, нужный для написания символа
  const myFunc = () => { // 
      props.writeCurrentValue(newPostSymbol)
}

  return (
    <div className={classes.myPostsContainer}>
      <div className={classes.myPosts}>My posts</div>
      <form className={classes.form} action="#">
        <textarea
          className={classes.textarea}
          placeholder="your news..."
          ref={newPostSymbol}
          onInput={myFunc}
          value={props.valueTextarea} 
        />
        <button onClick={props.addPost} className={classes.button}>
          Add post
        </button>
      </form>

      {props.postElements}
    </div>
  );
};
export default MyPosts;
