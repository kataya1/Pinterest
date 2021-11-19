import styles from './Navbar.module.css';
import Searchbox  from '../Searchbox/Searchbox'; 
export default function Navbar() {
    
    return (
    <nav className={styles.navigation}>
        <Searchbox></Searchbox>
        <button>hello</button>
    </nav>
    )
}
