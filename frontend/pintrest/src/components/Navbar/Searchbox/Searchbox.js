import './Searchbox.css'
import styles from './Searchbox.module.css'
import {ReactComponent as Magniglass} from './magni.svg'

export default function Searchbox(){
    return (
        <div id={styles["Search-box"]}>
            <div id={styles["sb-magnifying-glass"]}>
                <Magniglass style={{ "fontSize": '10px'}}/>
            </div>
            <form id={styles["sb-input-container"]} action="https://google.com/search" method="GEt">
                <input type="text" id={styles["search-input-field"]} name="q" />
            </form>
        </div>
    )
}