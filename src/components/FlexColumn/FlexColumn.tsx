import './FlexColumn.css';

interface FlexColumnProps {
  children: React.ReactNode,
}

function FlexColumn(props: FlexColumnProps) {
  return (
    <div className="flex-column">
      {props.children}
    </div>
  );
}

export { FlexColumn };
