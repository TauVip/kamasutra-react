import { NavLink } from "react-router-dom"
import s from "./Header.module.css"

const Header = (props) => (
  <header className={s.header}>
    <img src='https://www.pngkey.com/png/full/961-9610434_png-file-svg-google-chrome-logo-png.png' />
    <div className={s.loginBlock}>
      { 
        props.isAuth ? 
        <div>
          {props.login} - <button onClick={props.logout}>Log out</button>
        </div> : <NavLink to={'/login'}>Login</NavLink> 
      }
    </div>
  </header>
)

export default Header
