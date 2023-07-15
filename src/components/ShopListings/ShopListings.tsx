import { useGameStore } from '../../hooks';
import { ShopListing } from '../ShopListing/ShopListing';
import './ShopListings.css';
import itemImages from '../../assets/shop-item-images';

function ShopListings() {
  const shopItems = useGameStore((state) => state.shopItems);
  const onShopItemClicked = useGameStore((state) => state.onShopItemClicked);
  
  return (
    <div>{
      shopItems.map((item) => (
          <ShopListing
            key={item.name}
            name={item.name}
            price={item.currentPrice}
            imageNode={<img src={itemImages[item.name]} alt={item.imagePath} />}
            numOwned={item.numOwned}
            onClick={() => onShopItemClicked(item.name)}
          />
        )
      )
    }</div>
  );
}

export { ShopListings }
