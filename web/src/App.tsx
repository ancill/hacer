import { useEffect, useState } from 'react';

import { ListContainer } from './components/ListContainer';
import Modal from './components/Modal';
import { TitleBar } from './components/TitleBar';
import useFetch from './useFetch';

function App() {
  return (
    <div className="bg-slate-500 py-2">
      <div className="p-4 max-w-md container bg-white rounded-xl overflow-hidden relative">
        <TitleBar />
        <ListContainer type="Incomplete" />
        <ListContainer type="Complete" />
        <Modal />
      </div>
    </div>
  );
}

export default App;
