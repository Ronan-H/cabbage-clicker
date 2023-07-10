import './CabbageCounter.css';

interface CabbageCounterProps {
  count: number,
}

function CabbageCounter(props: CabbageCounterProps) {
  return (
    <span className="cabbage-counter">{props.count} cabbages</span>
  );
}

export { CabbageCounter };
