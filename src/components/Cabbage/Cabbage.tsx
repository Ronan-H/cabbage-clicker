import cabbageImage from './cabbage.png';
import './Cabbage.css';

interface CabbageProps {
  onClick: () => void,
}

function Cabbage(props: CabbageProps) {
  return (
    <div className="rotate-anim container">
      <div className="hover-anim">
        <div className="click-anim">
          <img src={cabbageImage} onClick={props.onClick} className='cabbage-image' />
        </div>
      </div>
    </div>
  );
}

export { Cabbage }
