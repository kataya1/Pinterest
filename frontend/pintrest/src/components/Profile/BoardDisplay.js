
const media = localStorage.getItem('media')
const BoardDisplay = props => {
  return (
    <div className='boards'>
      <div className='board'>
        <div className='board-image'>
          <img
            style={{ width: "157px", height: "157px" }}
            src={`${media}${props.image}`}
            alt='board'
          />
        </div>
      </div>
    </div>
  );
};

export default BoardDisplay;
