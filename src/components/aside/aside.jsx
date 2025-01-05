import classes from './aside.module.css'
const Aside = () => {
    return (
        <aside className={classes.aside}>
          <div>
            <a href="#">Profile</a>
          </div>
          <div>
            <a href="#">Messages</a>
          </div>
          <div>
            <a href="#">News</a>
          </div>
          <div>
            <a href="#">Music</a>
          </div>
          <div className={classes.settings}>
            <a href="#">Settings</a>
          </div>
        </aside>
    )
}
export default Aside;