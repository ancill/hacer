import { useEffect, useState } from 'react';

import { AddButton } from './AddButton';
import { Category } from './ListContainer';
import ToolTip from './ToolTip';
import { mutate } from '../mutate';

export default function Modal() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    fetch('http://localhost:3001/categories')
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      });
  }, []);

  const createTask = () => {
    const result = mutate('POST', 'task', {});
  };

  return (
    <>
      <AddButton setShowModal={setShowModal} />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none transition ease-out delay-150">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Task ✍️</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col">
                  <select
                    title="Category"
                    placeholder="Category"
                    className="py-4 px-4 text-lg leading-relaxed border-slate-400 border-2 rounded-md mb-4"
                    onChange={(el) => setSelectedCategory(el.target.value)}
                  >
                    {categories?.map((el) => (
                      <option
                        key={el.id}
                        value={el.id}
                        data-tooltip-target="tooltip-right"
                        data-tooltip-placement="right"
                      >
                        {el.emoji} {el.title}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    title="Add new note"
                    placeholder="Add new note"
                    className="py-3 px-4 text-slate-500 text-lg leading-relaxed border-slate-400 border-2 rounded-md"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-black text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
