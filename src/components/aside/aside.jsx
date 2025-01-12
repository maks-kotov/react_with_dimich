import classes from './aside.module.css'
import Link from './link/link';
import AvatarAndName from './avatarAndName/avatarAndName';
const Aside = (props) => {
  return (
        <aside className={classes.aside}>
          
          <Link to={props.aside.paths[0]} title={props.aside.titles[0]}/>
          <Link to={props.aside.paths[1]} title={props.aside.titles[1]}/>
          <Link to={props.aside.paths[2]} title={props.aside.titles[2]}/>
          <Link to={props.aside.paths[3]} title={props.aside.titles[3]}/>
          <div className={classes.settings}>
            <Link to={props.aside.paths[4]} title={props.aside.titles[4]}/>
          </div>

          <div className={classes.friends}>
                <Link to={props.aside.paths[5]} title={props.aside.titles[5]}/>
            <div className={classes.mainFlexContainer}>
                <AvatarAndName name={props.aside.friends[0]} avatar={props.aside.avatars[0]}/>
                <AvatarAndName name={props.aside.friends[1]} avatar={props.aside.avatars[1]}/>
                <AvatarAndName name={props.aside.friends[2]} avatar={props.aside.avatars[2]}/>
            </div>
          </div>

        </aside>
    )
}
export default Aside;