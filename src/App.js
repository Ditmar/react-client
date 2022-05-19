import CounterComponent from './example2/Counter';
import Time from './example1/Time';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Time />
      <CounterComponent initialValue='100' limitValue='1000'/>
    </div>
  );
}

export default App;
