import cabbageImage from './cabbage.png';
import './Cabbage.css';

interface CabbageProps {
  onClick: () => void,
}

function Cabbage(props: CabbageProps) {
  return (
    <img src={cabbageImage} onClick={props.onClick} className='cabbage-image' />
  );
}

export { Cabbage }
