import classes from './link.module.css'
import { NavLink } from 'react-router-dom';
const Link = (props) => {
    return (
        <div>
            <NavLink to={props.to} className={navData=> navData.isActive ? classes.active : classes.yaSsilka}>{props.title}</NavLink>
        </div>
    )
}
export default Link;