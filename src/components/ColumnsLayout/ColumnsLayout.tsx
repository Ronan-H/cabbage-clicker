import './ColumnsLayout.css';

interface ColumnsLayoutProps {
  children: React.ReactNode,
}

function ColumnsLayout(props: ColumnsLayoutProps) {
  return (
    <div className="columns">
      {props.children}
    </div>
  );
}

export { ColumnsLayout };
