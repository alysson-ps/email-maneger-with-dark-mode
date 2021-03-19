import React, { useContext } from 'react';
import MessageContext from '../contexts/message';
import ThemeContext from '../contexts/theme';

function List() {
  const { data } = useContext(MessageContext);
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="flex justify-between items-center px-2 border-b-2 border-gray-300 dark:bg-gray-700 dark:border-gray-800 ">
        <div className="flex flex-1 justify-between items-center my-3 px-6">
          <form method="GET">
            <div className="text-gray-600 focus-within:text-gray-400">
              <input
                type="search"
                name="q"
                className="py-2 text-sm text-white  rounded-md pl-2 focus:outline-none focus:bg-white focus:text-gray-900 w-4/5"
                placeholder="Search..."
              />
            </div>
          </form>
          <label htmlFor="toogleA" className="flex items-center cursor-pointer">
            <div className="mx-3 text-gray-700 font-medium dark:text-gray-100">Light</div>
            <div className="relative">
              <input
                id="toogleA"
                type="checkbox"
                defaultChecked={false}
                className="hidden"
                onChange={({ target }) => {
                  target.checked ? setTheme('dark') : setTheme('light');
                }}
              />

              <div className="toggle__line w-12 h-6 bg-gray-400 rounded-full shadow-inner"></div>

              <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
            </div>

            <div className="ml-3 text-gray-700 font-medium dark:text-gray-100 ">Dark</div>
          </label>
        </div>
      </header>

      <main className="flex-1 overflow-x-hidden overflow-y-auto px-6 dark:bg-gray-600">
        {data.length > 0 ? (
          data.map((item: IMessage) => (
            <div className="w-full my-1" key={item.id}>
              <div className="mt-4 flex px-4 py-3 justify-between items-center bg-white shadow-sm rounded-lg cursor-pointer dark:bg-gray-700">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full flex justify-center items-center bg-blue-100 object-cover">
                    <p className="text-blue-400 font-bold">{item.owner}</p>
                  </div>

                  <div className="px-4 flex flex-col item capitalize text-gray-600 dark:text-gray-100">
                    <span className="font-bold text-md">{item.name}</span>
                    <div className="flex flex-col capitalize text-gray-600 dark:text-gray-100">
                      <p>
                        <span>{item.subject}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex px-8">
                  <div className="flex h-full flex-col justify-start items-end text-gray-600 dark:text-gray-100">
                    <p>10:00</p>
                    <div className="flex -space-x-2 overflow-hidden">
                      {item.users.map(user => (
                        <div className="h-8 w-8 rounded-full shadow-sm flex justify-center items-center bg-blue-100 object-cover">
                          <p className="text-blue-400 text-sm">{user}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ml-16 pl-4 flex flex-col justify-center capitalize text-gray-600 dark:text-gray-100">
                    <span className="bg-blue-100 text-blue-400 px-4 py-1 rounded #f3f4f6">New</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Imbox vazio
              </h2>
              <p className="mt-2 text-center text-lg text-gray-600">
                Selecione outro imbox no menu ao lado
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
export default List;
