import { useGameStore } from '../../../hooks';
import { CabbageSeeds } from '../CabbageSeeds';
import './ShopListings.css';

interface ShopListingsProps {
}

const listingMap = {
  'Cabbage Seeds': CabbageSeeds,
}

function ShopListings(props: ShopListingsProps) {
  const shopItems = useGameStore((state) => state.shopItems);

  return (
    <>{
      shopItems.map((item) => {
        const ListingComponent = listingMap[item.name];
        return (
          <ListingComponent
            key={item.name}
            numOwned={item.numOwned}
            onClick={() => console.log('Clicked:', item.name)}
          />
        );
      })
    }</>
  );
}

export { ShopListings }
