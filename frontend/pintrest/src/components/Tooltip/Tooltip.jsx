import React, {useEffect, useState, useRef} from 'react'
import styles from './Tooltip.module.css'
import ReactDOM from 'react-dom';

export const injectTooltip = (e) => {
    function Tooltip(props) {
        const [visible, setvisible] = useState(true)
        const tooltip  = useRef(null)
    
        setTimeout(()=>{
            setvisible(false)
        },1000)
    
        useEffect(() => {
            if(visible){
                
                tooltip.current.className = [styles.tooltip, styles.visible].join(" ")
            }else{
                tooltip.current.className = [styles.tooltip, styles.invisible].join(" ")
            }
        })
        return (
            <div ref={tooltip} className={styles.tooltip} style={{top: `${props.posY - 60}px`, left: `${+props.posX + 10}px`}}>
                coming soon...rr
            </div>
        )
    }
    ReactDOM.render(<Tooltip posX={e.pageX} posY={e.pageY} />,document.querySelector("#tooltipspan"))
}


