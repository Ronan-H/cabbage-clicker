import './App.css';
import ColumnsLayout from './components/ColumnsLayout';
import ClickerGrid from './components/ClickerGrid';
import Cabbage from './components/Cabbage';

function App() {
  const heading = <div>HEADING</div>;
  const cabbage = <Cabbage onClick={() => console.log('Clicked!')} />;

  return ((
    <ColumnsLayout>
      <ClickerGrid heading={heading} cabbage={cabbage} />
      <div>COLUMN 2</div>
      <div>COLUMN 3</div>
    </ColumnsLayout>
  ));
}

export default App;
