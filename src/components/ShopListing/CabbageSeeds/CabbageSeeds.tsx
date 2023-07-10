import { ShopListing } from '../ShopListing';
import cabbageSeedsImage from './cabbage-seeds.png';
import './CabbageSeeds.css';

interface CabbageSeedsProps {
  numOwned: number,
  onClick: () => void,
}

function CabbageSeeds(props: CabbageSeedsProps) {
  return (
    <ShopListing
      imageNode={<img src={cabbageSeedsImage} />}
      name='Cabbage Seeds'
      price={25}
      numOwned={props.numOwned}
      onClick={props.onClick}
    />
  );
}

export { CabbageSeeds }
