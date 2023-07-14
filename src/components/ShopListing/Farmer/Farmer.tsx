import { ShopListing } from '../ShopListing';
import cabbageSeedsImage from './farmer.png';
import './Farmer.css';

interface FarmerProps {
  numOwned: number,
  onClick: () => void,
}

function Farmer(props: FarmerProps) {
  return (
    <ShopListing
      imageNode={<img src={cabbageSeedsImage} />}
      name='Farmer'
      price={100}
      numOwned={props.numOwned}
      onClick={props.onClick}
    />
  );
}

export { Farmer }
