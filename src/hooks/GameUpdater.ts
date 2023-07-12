import { useEffect } from "react";
import { useGameStore } from "./GameStore";

const TICKS_PER_SEC = 5;
const UPDATE_INTERVAL = 1000 / TICKS_PER_SEC;
const TICK_TO_SEC_RATIO = 1 / TICKS_PER_SEC;

function useGameUpdater() {
  const changeNumCabbagesBy = useGameStore((store) => store.changeNumCabbagesBy);

  useEffect(() => {
    const interval = setInterval(() => {
      const shopItems = useGameStore.getState().shopItems;

      let numNewCabbages = 0;
      shopItems.forEach((item) => {
        numNewCabbages += item.cpsIncrease * item.numOwned * TICK_TO_SEC_RATIO;
      });

      if (numNewCabbages > 0) {
        changeNumCabbagesBy(numNewCabbages);
      }
    }, UPDATE_INTERVAL);

    // Clean up
    return () =>clearInterval(interval);
  }, []);
}

export { useGameUpdater };