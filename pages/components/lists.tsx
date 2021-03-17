import React, { useContext } from 'react';
import MessageContext from '../contexts/message';

function List() {
  const { data } = useContext(MessageContext);
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="justify-between items-center mt-6 px-2 border-b-2 border-gray-300">
        <div className="items-center space-x-2 lg:space-x-0">
          <button className="text-gray-500 focus:outline-none lg:hidden">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <div className="pl-4 flex justify-between">
            <div className="inline-flex py-3 -mt-4">
              <form method="GET">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pr-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      {/* <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg> */}
                    </button>
                  </span>
                  <input
                    type="search"
                    name="q"
                    className="py-2 text-sm text-white  rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-4/5"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-x-hidden overflow-y-auto px-6">
        {data.map((item: IMessage) => (
          <div className="w-full my-1" key={item.id}>
            <div className="mt-4 flex px-4 py-3 justify-between bg-white shadow-sm rounded-lg cursor-pointer">
              <div className="flex justify-center">
                <div className="h-12 w-12 rounded-full flex justify-center items-center bg-gray-300 object-cover">
                  <p className="text-gray-900">{item.owner}</p>
                </div>

                <div className="px-4 flex flex-col capitalize text-gray-600">
                  <span className="font-bold text-md">{item.name}</span>
                  <div className="flex flex-col capitalize text-gray-600">
                    <p>
                      <span>{item.subject}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex pr-8">
                <div className="ml-16 pl-4 flex flex-col capitalize text-gray-600">
                  <span className="mt-2 bg-blue-100 text-semibold text-blue-400 px-4 py-1 rounded text-black">
                    New
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
export default List;
