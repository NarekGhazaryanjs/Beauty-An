import classes from '../Global.module.css'

const Header = (props) => {
    return (
        <header className={classes['header-menu']}>
             {props.children}
        </header>
    )
}

export default Header