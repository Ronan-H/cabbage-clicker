import { produce } from 'immer';
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type ItemName =
  'Cabbage Seeds' |
  'Farmer';

interface ShopItem {
  name: ItemName
  numOwned: number
  currentPrice: number
  cpsIncrease: number
}

interface GameState {
  numCabbages: number
  clickMultiplier: number
  onCabbageClicked: () => void
  changeNumCabbagesBy: (delta: number) => void
  onShopItemClicked: (itemName: ItemName) => void
  shopItems: ShopItem[]
}

const useGameStore = create<GameState>()(
  devtools(
    (set) => ({
      numCabbages: 0,
      clickMultiplier: 1,
      onCabbageClicked: () => set((state) => ({ numCabbages: state.numCabbages + state.clickMultiplier })),
      changeNumCabbagesBy: (delta) => set((state) => ({ numCabbages: state.numCabbages + delta })),
      onShopItemClicked: (itemName: ItemName) => set((state) => {

        return produce<GameState>(state, (draft) => {
          const item = draft.shopItems.find((item) => item.name === itemName) as ShopItem;
            
          if (state.numCabbages >= item.currentPrice) {
            // Item will be bought
            draft.numCabbages -= item.currentPrice;
            item.numOwned++;
          }
        });
      }),
      shopItems: [
        {
          name: 'Cabbage Seeds',
          numOwned: 0,
          currentPrice: 25,
          cpsIncrease: 1,
        },
        {
          name: 'Farmer',
          numOwned: 0,
          currentPrice: 100,
          cpsIncrease: 5,
        }
      ]
    })
  )
)

export { useGameStore };