import { AddNewItem } from './components/AddNewItem';
import { ListContainer } from './components/ListContainer';
import { TitleBar } from './components/TitleBar';
function App() {
  return (
    <div className="bg-slate-500">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <TitleBar />
        <ListContainer />
        <AddNewItem />
      </div>
    </div>
  );
}

export default App;
