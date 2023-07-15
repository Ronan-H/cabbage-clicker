import { ColumnsLayout } from './components/ColumnsLayout';
import { ClickerGrid } from './components/ClickerGrid';
import { Cabbage } from './components/Cabbage';
import { CabbageCounter } from './components/CabbageCounter/CabbageCounter';
import { useGameStore, useGameUpdater } from './hooks';
import { ShopListings } from './components/ShopListings';
import { Background } from './components/Background';
import { FontBase } from './components/FontBase';

function App() {
  const numCabbages = useGameStore((state) => state.numCabbages);
  const cps = 0;
  const cabbageCounter = <CabbageCounter count={Math.floor(numCabbages)} cps={cps} />;

  const onCabbageClicked = useGameStore((state) => state.onCabbageClicked);
  const cabbage = <Cabbage onClick={onCabbageClicked} />;

  useGameUpdater();

  return ((
    <FontBase>
      <ColumnsLayout>
        <Background>
          <ClickerGrid heading={cabbageCounter} cabbage={cabbage} />
        </Background>
        <Background />
        <ShopListings />
      </ColumnsLayout>
    </FontBase>
  ));
}

export default App;
