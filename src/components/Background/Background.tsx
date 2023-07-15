import styled from 'styled-components';
import backgroundImage from '../../assets/page-background.jpg';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${backgroundImage}) repeat-y top center;
  background-size: 100% 500px;
`;

export { Background };
