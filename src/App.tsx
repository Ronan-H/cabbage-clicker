import { ColumnsLayout } from './components/ColumnsLayout';
import { ClickerGrid } from './components/ClickerGrid';
import { Cabbage } from './components/Cabbage';
import { CabbageCounter } from './components/CabbageCounter/CabbageCounter';
import { useGameStore, useGameUpdater } from './hooks';
import { ShopListings } from './components/ShopListing/ShopListings';

function App() {
  const numCabbages = useGameStore((state) => state.numCabbages);
  const cabbageCounter = <CabbageCounter count={Math.floor(numCabbages)} />;

  const onCabbageClicked = useGameStore((state) => state.onCabbageClicked);
  const cabbage = <Cabbage onClick={onCabbageClicked} />;

  useGameUpdater();

  return ((
    <ColumnsLayout>
      <ClickerGrid heading={cabbageCounter} cabbage={cabbage} />
      <div />
      <ShopListings />
    </ColumnsLayout>
  ));
}

export default App;
