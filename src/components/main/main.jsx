import classes from './main.module.css'
import MyPosts from './myPosts/myPosts';
import AvaAndDesc from './avaAndDesc/avaAndDesc'
import ImgTop from './imgTop/imgTop'
const Main = () => {
    return (
        <main className={classes.main}>
            <ImgTop />
            
            <AvaAndDesc scam='mm' />
            
            <MyPosts />
        </main>
    )
}
export default Main;