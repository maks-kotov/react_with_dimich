import React from "react";
import Post from "./post/post";
import { makeActionForAddPost, makeActionForAddSymbolToPost } from "../../../redux/reducer-main";
import MyPosts from './myPosts'
const ContainerMyPosts = (props) => {
  const postElements = props.state.mainPage.postData.map( post => (
    <Post
      myText={post.myText}
      countLikes={post.countLikes}
      id={post.id}
      avatar={post.avatar}
      alt={post.alt}
    ></Post>
  ));
  
  const writeCurrentValue = (newPostSymbol) => {
    let symbol = newPostSymbol.current.value;
    props.dispatch(makeActionForAddSymbolToPost(symbol))
  }

  const addPost = (event) => {
    props.dispatch(makeActionForAddPost())
    event.preventDefault()
  };

  return <MyPosts postElements={postElements} writeCurrentValue={writeCurrentValue} addPost={addPost} valueTextarea={props.state.mainPage.postValue}/>;
};
export default ContainerMyPosts;
