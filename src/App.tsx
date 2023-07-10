import './App.css';
import { ColumnsLayout } from './components/ColumnsLayout';
import { ClickerGrid } from './components/ClickerGrid';
import { Cabbage } from './components/Cabbage';
import { useState } from 'react';
import { CabbageCounter } from './components/CabbageCounter/CabbageCounter';

function App() {
  const [ cabbageCount, setCabbageCount ] = useState<number>(0);

  function onCabbageClicked() {
    setCabbageCount((prev) => prev + 1);
  }

  const cabbage = <Cabbage onClick={onCabbageClicked} />;

  return ((
    <ColumnsLayout>
      <ClickerGrid heading={<CabbageCounter count={cabbageCount} />} cabbage={cabbage} />
      <div>COLUMN 2</div>
      <div>COLUMN 3</div>
    </ColumnsLayout>
  ));
}

export default App;
