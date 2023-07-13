import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { CabbageSeeds } from '.';

test('renders the name', () => {
  const { container } = render(<CabbageSeeds numOwned={10} onClick={() => {}} />);
  expect(container).toHaveTextContent('Cabbage Seeds');
});

test('renders the price', () => {
  const { container } = render(<CabbageSeeds numOwned={10} onClick={() => {}} />);
  expect(container).toHaveTextContent('Price: 25 cabbages');
});

test('calls the onClick function on click', () => {
  const onClickMock = jest.fn();

  const { container } = render(<CabbageSeeds numOwned={10} onClick={onClickMock} />);

  expect(onClickMock).not.toHaveBeenCalled(); // sanity check
  act(() => {
    container.click();
  });
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
