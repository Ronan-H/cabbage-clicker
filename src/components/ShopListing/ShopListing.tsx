import './ShopListing.css';
import { ItemName, useGameStore } from '../../hooks';
import React from 'react';

interface ShopListingProps {
  imageNode: React.ReactNode,
  name: ItemName,
  price: number,
  numOwned: number,
  onClick: () => void,
}

function ShopListing(props: ShopListingProps) {
  console.log('Rerendering shop listing:', props.name);

  return (
    <div className='listing-container' onClick={props.onClick}>
      {props.imageNode}
      <div className='name-and-price'>
        <span className='listing-name'>{props.name}</span>
        <span>Price: {props.price} cabbages</span>
      </div>
      <span className='num-owned'>{props.numOwned}</span>
    </div>
  );
}

function propsAreEqual(prev: ShopListingProps, next: ShopListingProps) {
  return (
    prev.name === next.name &&
    prev.price === next.price &&
    prev.numOwned === next.numOwned
  );
}

const MemoizedShopListing = React.memo(ShopListing, propsAreEqual);

export { ShopListing, MemoizedShopListing }
