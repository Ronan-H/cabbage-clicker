import styled from 'styled-components';

interface CabbageCounterProps {
  count: number,
  cps: number,
}

const CounterSpan = styled.span`
  font-size: 25px;
  font-weight: bold;

  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const CpsSpan = styled.span`
  font-size: 17px;
  font-style: italic;

  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const VerticalFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

function CabbageCounter(props: CabbageCounterProps) {
  return (
    <VerticalFlexbox>
      <CounterSpan>{props.count} cabbages</CounterSpan>
      <CpsSpan>per second: {props.cps}</CpsSpan>
    </VerticalFlexbox>
  );
}

export { CabbageCounter };
