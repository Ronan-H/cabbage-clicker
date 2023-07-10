import './App.css';
import { ColumnsLayout } from './components/ColumnsLayout';
import { ClickerGrid } from './components/ClickerGrid';
import { Cabbage } from './components/Cabbage';
import { useState } from 'react';
import { CabbageCounter } from './components/CabbageCounter/CabbageCounter';
import { CabbageSeeds } from './components/ShopListing/CabbageSeeds';

function App() {
  const [ cabbageCount, setCabbageCount ] = useState<number>(0);

  function onCabbageClicked() {
    setCabbageCount((prev) => prev + 1);
  }

  const cabbageCounter = <CabbageCounter count={cabbageCount} />;
  const cabbage = <Cabbage onClick={onCabbageClicked} />;

  const cabbageSeeds = <CabbageSeeds 
    numOwned={0}
    onClick={() => console.log('Cabbage seeds clicked!')}
  />;

  return ((
    <ColumnsLayout>
      <ClickerGrid heading={cabbageCounter} cabbage={cabbage} />
      <div />
      <div>
        {cabbageSeeds}
      </div>
    </ColumnsLayout>
  ));
}

export default App;
