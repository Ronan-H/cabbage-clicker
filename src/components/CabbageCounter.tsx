import cabbageImage from './cabbage.png';
import './Cabbage.css';

interface CabbageCounterProps {
  count: number,
}

function CabbageCounter(props: CabbageCounterProps) {
  return (
    <span>{props.count} cabbages</span>
  );
}

export default CabbageCounter;
