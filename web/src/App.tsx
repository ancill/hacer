import { ListContainer } from './components/ListContainer';
import Modal from './components/Modal';
import { TitleBar } from './components/TitleBar';

function App() {
  return (
    <div className="bg-slate-500 py-2">
      <div className="p-4 max-w-md container bg-white rounded-xl overflow-hidden relative">
        <TitleBar />
        <ListContainer />
        <Modal />
      </div>
    </div>
  );
}

export default App;
