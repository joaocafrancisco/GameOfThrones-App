import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
            <h1>
                <Link to="/">Game Of Thrones App</Link> 
            </h1>
        </header>
    )
}