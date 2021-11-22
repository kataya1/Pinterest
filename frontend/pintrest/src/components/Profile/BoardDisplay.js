const BoardDisplay = (props) => {
    
    return ( 
    <div className='boards'  >
        <div className='board'>
            <div className='board-image' >
            <img style={{width:'157px',height:'157px'}} src={`http://localhost:8000${props.image}`}/>
           </div>
        </div>
    </div>

     );
}
 
export default BoardDisplay;