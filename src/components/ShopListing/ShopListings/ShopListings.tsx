import { useGameStore } from '../../../hooks';
import { CabbageSeeds } from '../CabbageSeeds';
import { Farmer } from '../Farmer';
import './ShopListings.css';

const listingMap = {
  'Cabbage Seeds': CabbageSeeds,
  'Farmer': Farmer,
}

function ShopListings() {
  const shopItems = useGameStore((state) => state.shopItems);
  const onShopItemClicked = useGameStore((state) => state.onShopItemClicked);

  return (
    <div>{
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
    }</div>
  );
}

export { ShopListings }
