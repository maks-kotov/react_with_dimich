import classes from './main.module.css'
import AvaAndDesc from './avaAndDesc/avaAndDesc'
import ImgTop from './imgTop/imgTop'
import ContainerMyPosts from './myPosts/containerMyPosts';
const Main = (props) => {
    return (
        
        <main className={classes.main}>
            <ImgTop />
            
            <AvaAndDesc info={props.state.mainPage.info}/>
            
            <ContainerMyPosts dispatch={props.dispatch}
            state={props.state}/>
        </main>
    )
}
export default Main;