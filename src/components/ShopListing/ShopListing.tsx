import './ShopListing.css';
import { ItemName, useGameStore } from '../../hooks';

interface ShopListingProps {
  imageNode: React.ReactNode,
  name: ItemName,
  price: number,
  numOwned: number,
  onClick: () => void,
}

function ShopListing(props: ShopListingProps) {
  const onShopItemClicked = useGameStore((state) => state.onShopItemClicked);
  
  function onClick() {
    onShopItemClicked('Cabbage Seeds');
  }

  return (
    <div className='listing-container' onClick={onClick}>
      {props.imageNode}
      <div className='name-and-price'>
        <span className='listing-name'>{props.name}</span>
        <span>Price: {props.price} cabbages</span>
      </div>
      <span className='num-owned'>{props.numOwned}</span>
    </div>
  );
}

export { ShopListing }
