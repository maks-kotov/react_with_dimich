import classes from './main.module.css'
import MyPosts from './myPosts/myPosts';
import AvaAndDesc from './avaAndDesc/avaAndDesc'
import ImgTop from './imgTop/imgTop'
const Main = (props) => {
    return (
        
        <main className={classes.main}>
            <ImgTop />
            
            <AvaAndDesc info={props.state.mainPage.info}/>
            
            <MyPosts
            state={props.state}
            dispatch={props.dispatch}
            />
        </main>
    )
}
export default Main;