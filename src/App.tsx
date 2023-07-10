import './App.css';
import { ColumnsLayout } from './components/ColumnsLayout';
import { ClickerGrid } from './components/ClickerGrid';
import { Cabbage } from './components/Cabbage';
import { useState } from 'react';
import { CabbageCounter } from './components/CabbageCounter/CabbageCounter';
import { CabbageSeeds } from './components/ShopListing/CabbageSeeds';
import { useGameStore } from './hooks';
import { ShopListings } from './components/ShopListing/ShopListings';

function App() {
  const numCabbages = useGameStore((state) => state.numCabbages);
  const cabbageCounter = <CabbageCounter count={numCabbages} />;

  const onCabbageClicked = useGameStore((state) => state.onCabbageClicked);
  const cabbage = <Cabbage onClick={onCabbageClicked} />;

  const cabbageSeeds = <CabbageSeeds 
    numOwned={0}
    onClick={() => console.log('Cabbage seeds clicked!')}
  />;

  return ((
    <ColumnsLayout>
      <ClickerGrid heading={cabbageCounter} cabbage={cabbage} />
      <div />
      <ShopListings />
    </ColumnsLayout>
  ));
}

export default App;
