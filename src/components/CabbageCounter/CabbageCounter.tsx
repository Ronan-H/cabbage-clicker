
interface CabbageCounterProps {
  count: number,
}

function CabbageCounter(props: CabbageCounterProps) {
  return (
    <span>{props.count} cabbages</span>
  );
}

export { CabbageCounter };
