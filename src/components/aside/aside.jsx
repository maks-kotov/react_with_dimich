import { NavLink } from 'react-router-dom';
import classes from './aside.module.css'
const Aside = (props) => {
  // debugger
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

          <div className={classes.friends}>
            <NavLink to="/Friends" className={navData=> navData.isActive ? classes.active : classes.yaSsilka}>Friends</NavLink>
            <div className={classes.mainFlexContainer}>
              <div className={classes.flexContainer}>
                  <div className={classes.circle}>
                    <img className={classes.avatar} src={props.avatars[0].avatar} alt="" />
                  </div>
                  <div className={classes.name}>Andrew</div>
              </div>
              <div className={classes.flexContainer}>
                  <div className={classes.circle}>
                    <img className={classes.avatar} src={props.avatars[2].avatar} alt="" />
                  </div>
                  <div className={classes.name}>Sasha</div>
              </div>
              <div className={classes.flexContainer}>
                  <div className={classes.circle}>
                    <img className={classes.avatar} src={props.avatars[3].avatar} alt="" />
                  </div>
                  <div className={classes.name}>Sveta</div>
              </div>
            </div>

            
              
          </div>

        </aside>
    )
}
export default Aside;