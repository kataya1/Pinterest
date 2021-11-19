import './Searchbox.css'
import {ReactComponent as Magniglass} from './magni.svg'

export default function Searchbox(){
    return (
        <div id="Search-box">
            <div id="sb-magnifying-glass">
                <Magniglass style={{ "font-size": '10px'}}/>
            </div>
            <form id="sb-input-container" action="https://google.com/search" method="GEt">
                <input type="text" id="search-input-field" name="q" />
            </form>
        </div>
    )
}