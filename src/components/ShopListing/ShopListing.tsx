import './ShopListing.css';

interface ShopListingProps {
  imageNode: React.ReactNode,
  name: string,
  price: number,
  numOwned: number,
  onClick: () => void,
}

function ShopListing(props: ShopListingProps) {
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

export { ShopListing }