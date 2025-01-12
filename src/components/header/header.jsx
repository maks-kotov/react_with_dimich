import classes from './header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
        <img
          className={classes.logo}
          src="https://banner2.cleanpng.com/20180425/soq/kisspng-logo-clip-art-5ae10d88490e92.4932963515246985042993.jpg" alt='изображение'
        ></img>
      </header>
    )
}
export default Header;