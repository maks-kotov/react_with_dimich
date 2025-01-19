import classes from "./aside.module.css";
import Link from "./link/link";
import AvatarAndName from "./avatarAndName/avatarAndName";
const Aside = (props) => {
  return (
    <aside className={classes.aside}>
      <Link to={props.asidePage.paths[0]} title={props.asidePage.titles[0]} />
      <Link to={props.asidePage.paths[1]} title={props.asidePage.titles[1]} />
      <Link to={props.asidePage.paths[2]} title={props.asidePage.titles[2]} />
      <Link to={props.asidePage.paths[3]} title={props.asidePage.titles[3]} />
      <div className={classes.settings}>
        <Link to={props.asidePage.paths[4]} title={props.asidePage.titles[4]} />
      </div>

      <div className={classes.friends}>
        <Link to={props.asidePage.paths[5]} title={props.asidePage.titles[5]} />
        <div className={classes.mainFlexContainer}>
          <AvatarAndName
            name={props.asidePage.friends[0]}
            avatar={props.asidePage.avatars[0]}
          />
          <AvatarAndName
            name={props.asidePage.friends[1]}
            avatar={props.asidePage.avatars[1]}
          />
          <AvatarAndName
            name={props.asidePage.friends[2]}
            avatar={props.asidePage.avatars[2]}
          />
        </div>
      </div>
    </aside>
  );
};
export default Aside;
