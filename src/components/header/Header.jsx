import { NavLink } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return(
        <div className={styles.headerWrapper}>
            <div className={styles.logoContainer}>*Logo*</div>
            <div className={styles.linkContainer}>
                <NavLink to='/'>Hem</NavLink>
                <NavLink to='/'>Alla te</NavLink>
            </div>
            <div className={styles.btnContainer}>
                <button>Kontakt</button>
            </div>
        </div>
    )
}

export default Header;