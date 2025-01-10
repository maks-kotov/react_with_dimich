import classes from './main.module.css'
import MyPosts from './myPosts/myPosts';
import AvaAndDesc from './avaAndDesc/avaAndDesc'
import ImgTop from './imgTop/imgTop'
const Main = (props) => {
    return (
        
        <main className={classes.main}>
            <ImgTop />
            
            <AvaAndDesc info={props.info}/>
            
            <MyPosts posts={props.postss}/>
        </main>
    )
}
export default Main;