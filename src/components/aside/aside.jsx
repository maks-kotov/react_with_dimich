import { NavLink } from 'react-router-dom';
import classes from './aside.module.css'
const Aside = () => {
    return (
        <aside className={classes.aside}>
          <div>
            <NavLink to="/main" className={navData=> navData.isActive ? classes.active : classes.yaSsilka}>Profile</NavLink>
          </div>
          <div>
            <NavLink to="/messages" className={navData=> navData.isActive ? classes.active : classes.yaSsilka}>Messages</NavLink>
          </div>
          <div>
            <NavLink to="/news" className={navData=> navData.isActive ? classes.active : classes.yaSsilka}>News</NavLink>
          </div>
          <div>
            <NavLink to="/music" className={navData=> navData.isActive ? classes.active : classes.yaSsilka}>Music</NavLink>
          </div>
          <div className={classes.settings}>
            <NavLink to="/settings" className={navData=> navData.isActive ? classes.active : classes.yaSsilka}>Settings</NavLink>
          </div>
        </aside>
    )
}
export default Aside;