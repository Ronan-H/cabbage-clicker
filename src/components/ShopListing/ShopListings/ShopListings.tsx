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
  const onShopItemClicked = useGameStore((state) => state.onShopItemClicked);

  return (
    <>{
      shopItems.map((item) => {
        const ListingComponent = listingMap[item.name];
        return (
          <ListingComponent
            key={item.name}
            numOwned={item.numOwned}
            onClick={() => onShopItemClicked(item.name)}
          />
        );
      })
    }</>
  );
}

export { ShopListings }
