import './ClickerGrid.css';

interface ClickerGridProps {
  heading: JSX.Element,
  cabbage: JSX.Element,
}

function ClickerGrid(props: ClickerGridProps) {
  return (
    <div className="clicker-grid">
      {props.heading}
      {props.cabbage}
    </div>
  );
}

export default ClickerGrid;
