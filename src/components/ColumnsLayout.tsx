import { ReactNode } from 'react';
import './ColumnsLayout.css';
import FlexColumn from './FlexColumn';

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

export default ColumnsLayout;
