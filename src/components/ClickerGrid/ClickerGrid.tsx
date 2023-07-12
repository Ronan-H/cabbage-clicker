import styled from 'styled-components';

const ClickerGridDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  align-items: center;
  justify-items: center;
`;

interface ClickerGridProps {
  heading: JSX.Element,
  cabbage: JSX.Element,
}

function ClickerGrid(props: ClickerGridProps) {
  return (
    <ClickerGridDiv>
      {props.heading}
      {props.cabbage}
    </ClickerGridDiv>
  );
}

export { ClickerGrid };
