import { NavLink } from "react-router-dom"
import classes from './listitem.module.css'

const ListItem = (props) => {
    
    return (
        <li className={classes.ListItem}>
                        <NavLink to={props.to}  className={navData=> navData.isActive ? classes.activeEl : classes.yaSsilka}>
                            <img src={props.avatar} alt={props.alt} className={classes.avatar}/>
                        </NavLink>
                        
                        <NavLink to={props.to}  className={navData=> navData.isActive ? classes.activeEl : classes.yaSsilka} id={props.id}>{props.name}</NavLink>
        </li>
    )
}
export default ListItem;