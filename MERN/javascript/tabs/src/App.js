import './App.css';
import Tabs from './components/Tabs';

const items = [
  { label: "Tab 1", content: "Tab 1 content is showing here." },
  { label: "Tab 2", content: "Tab 2 content is showing here." },
  { label: "Tab 3", content: "Tab 3 content is showing here." }];

function App() {
  return (
    <div className="App">
      <Tabs items={items} />
    </div>
  );
}

export default App;
