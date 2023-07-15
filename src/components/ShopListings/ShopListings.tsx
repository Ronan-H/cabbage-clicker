import { useGameStore } from '../../hooks';
import { ShopListing } from '../ShopListing/ShopListing';
import './ShopListings.css';
import itemImages from '../../assets/shop-item-images';
import backdrop from '../../assets/scroll-backdrop.gif';
import styled from 'styled-components';

const ShopListingDiv = styled.div`
  background: url('${backdrop}') repeat-y top center;
  color: black;
`;

function ShopListings() {
  const shopItems = useGameStore((state) => state.shopItems);
  const onShopItemClicked = useGameStore((state) => state.onShopItemClicked);
  
  return (
    <ShopListingDiv>{
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
    }</ShopListingDiv>
  );
}

export { ShopListings }
