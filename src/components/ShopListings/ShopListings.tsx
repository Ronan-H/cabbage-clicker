import { useGameStore } from '../../hooks';
import { MemoizedShopListing, ShopListing } from '../ShopListing/ShopListing';
import './ShopListings.css';
import itemImages from '../../assets/shop-item-images';
import backdrop from '../../assets/scroll-backdrop.gif';
import styled from 'styled-components';

const ShopListingDiv = styled.div`
  background: url('${backdrop}') repeat-y top center;
  color: black;
`;

const TransparentOverlay = styled.div`
  opacity: 0.2;
`;

function ShopListings() {
  const shopItems = useGameStore((state) => state.shopItems);
  const onShopItemClicked = useGameStore((state) => state.onShopItemClicked);
  const numCabbages = useGameStore((state) => state.numCabbages);
  
  return (
    <ShopListingDiv>{
      shopItems.map((item) => {
        const canAfford = (numCabbages >= item.currentPrice);
        const shopListing = (
          <MemoizedShopListing
            key={item.name}
            name={item.name}
            price={item.currentPrice}
            imageNode={<img src={itemImages[item.name]} alt={item.name} />}
            numOwned={item.numOwned}
            onClick={() => onShopItemClicked(item.name)}
          />
        );

        return canAfford ? shopListing : <TransparentOverlay>{shopListing}</TransparentOverlay>; 
      }
      )
    }</ShopListingDiv>
  );
}

export { ShopListings }
