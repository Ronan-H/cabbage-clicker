import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type ItemName = 'Cabbage Seeds';

interface ShopItem {
  name: ItemName
  numOwned: number
  currentPrice: number
}

interface GameState {
  numCabbages: number
  clickMultiplier: number
  onCabbageClicked: () => void
  shopItems: ShopItem[]
}

const useGameStore = create<GameState>()(
  devtools(
    (set) => ({
      numCabbages: 0,
      clickMultiplier: 1,
      onCabbageClicked: () => set((state) => ({ numCabbages: state.numCabbages + state.clickMultiplier })),
      shopItems: [
        {
          name: 'Cabbage Seeds',
          numOwned: 0,
          currentPrice: 25,
        }
      ]
    })
  )
)

export { useGameStore };