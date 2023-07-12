import styled from 'styled-components';
import './ColumnsLayout.css';

const ColumnsLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
`;

export { ColumnsLayout };
