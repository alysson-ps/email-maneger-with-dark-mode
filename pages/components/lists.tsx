import React from 'react';

function List() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className=" justify-between items-center mt-6 px-2 border-b-2 border-gray-300">
        <div className="items-center space-x-2 lg:space-x-0">
          <button className="text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden">
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
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
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

      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="px-10 py-2 mt-1">
          <span className="text-gray-500 font-semibold">Today</span>
        </div>

        <div className="container mx-6 w-full -mb-2 ">
          <div
            className="mt-4 flex px-4 py-4 justify-between bg-white
                dark:bg-gray-600 shadow-sm rounded-lg cursor-pointer"
          >
            <div className="flex justify-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />

              <div className="px-4 flex flex-col capitalize text-gray-600">
                <span className="font-bold text-md">brian</span>
                <span className="mt-1 text-gray-400 text-sm font-semibold">23 THREADS</span>
              </div>
            </div>

            <div className="flex pr-8">
              <div
                className="ml-16 pl-4 flex flex-col capitalize text-gray-600
                        dark:text-gray-400"
              >
                <span className="mt-2 bg-blue-100 text-semibold text-blue-400 px-4 py-1 rounded text-black dark:text-gray-200">
                  New
                </span>
              </div>

              <div className="ml-4 pt-2 flex flex-col capitalize text-gray-600">
                <div></div>
              </div>

              <div
                className="ml-16 pt-3 flex flex-col capitalize text-gray-600
                        dark:text-gray-400"
              >
                <p>
                  <span className="font-bold">New Chili piper license - </span>
                  Hey Schott, have you lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-6 w-full -mb-2 ">
          <div
            className="mt-4 flex px-4 py-4 justify-between bg-white
                dark:bg-gray-600 shadow-sm rounded-lg cursor-pointer"
          >
            <div className="flex justify-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />

              <div className="px-4 flex flex-col capitalize text-gray-600">
                <span className="font-bold text-md">Tom cook</span>
                <span className="mt-1 text-gray-400 text-sm font-semibold">1 THREAD</span>
              </div>
            </div>

            <div className="flex pr-8">
              <div
                className="ml-16 pl-4 flex flex-col capitalize text-gray-600
                        dark:text-gray-400"
              >
                <span className="mt-2 bg-blue-100 text-semibold text-blue-400 px-4 py-1 rounded text-black dark:text-gray-200">
                  New
                </span>
              </div>

              <div
                className="ml-4 pt-2 flex flex-col capitalize text-gray-600
                        "
              >
                <div></div>
              </div>

              <div
                className="ml-16 pt-3 flex flex-col capitalize text-gray-600
                        dark:text-gray-400"
              >
                <p>
                  <span className="font-bold">New Chili piper license - </span>
                  Hey Schott, have you lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 py-2 mt-6">
          <span className="text-gray-500 font-semibold">Yesterday</span>
        </div>

        <div className="container mx-6 w-full -mb-2 ">
          <div
            className="mt-1 flex px-4 py-4 justify-between bg-white
                dark:bg-gray-600 shadow-sm rounded-lg cursor-pointer"
          >
            <div className="flex justify-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://i.pravatar.cc/30?2"
                alt=""
              />

              <div className="px-4 flex flex-col capitalize text-gray-600">
                <span className="font-bold text-md">Nickolas</span>
                <span className="mt-1 text-gray-400 text-sm font-semibold">3 THREADS</span>
              </div>
            </div>

            <div className="flex pr-8">
              <div
                className="ml-16 pl-4 flex flex-col capitalize text-gray-600
                        dark:text-gray-400"
              >
                <span className="mt-2 bg-blue-100 text-semibold text-blue-400 px-4 py-1 rounded text-black dark:text-gray-200">
                  New
                </span>
              </div>

              <div
                className="ml-4 pt-2 flex flex-col capitalize text-gray-600
                        "
              >
                <div></div>
              </div>

              <div
                className="ml-16 pt-3 flex flex-col capitalize text-gray-600
                        dark:text-gray-400"
              >
                <p>
                  <span className="font-bold">New Chili piper license - </span>
                  Hey Schott, have you lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-6 w-full -mb-2 ">
          <div
            className="mt-4 flex px-4 py-4 justify-between bg-white
                dark:bg-gray-600 shadow-sm rounded-lg cursor-pointer"
          >
            <div className="flex justify-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://i.pravatar.cc/30?3"
                alt=""
              />

              <div className="px-4 flex flex-col capitalize text-gray-600">
                <span className="font-bold text-md">Nickolas</span>
                <span className="mt-1 text-gray-400 text-sm font-semibold">3 THREADS</span>
              </div>
            </div>

            <div className="flex pr-8">
              <div
                className="ml-16 pl-4 flex flex-col capitalize text-gray-600
                        dark:text-gray-400"
              >
                <span className="mt-2 bg-blue-100 text-semibold text-blue-400 px-4 py-1 rounded dark:text-gray-200">
                  New
                </span>
              </div>

              <div
                className="ml-4 pt-2 flex flex-col capitalize text-gray-600
                        "
              >
                <div></div>
              </div>

              <div
                className="ml-16 pt-3 flex flex-col capitalize text-gray-600
                        dark:text-gray-400"
              >
                <p>
                  <span className="font-bold">New Chili piper license - </span>
                  Hey Schott, have you lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 py-2 mt-6">
          <span className="text-gray-500 font-semibold">27 MAR</span>
        </div>

        <div className="container mx-6 w-full -mb-2 ">
          <div
            className="mt-4 flex px-4 py-4 justify-between bg-white
                dark:bg-gray-600 shadow-sm rounded-lg cursor-pointer"
          >
            <div className="flex justify-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://i.pravatar.cc/30?4"
                alt=""
              />

              <div className="px-4 flex flex-col capitalize text-gray-600">
                <span className="font-bold text-md">Kenny</span>
                <span className="mt-1 text-gray-400 text-sm font-semibold">2 THREADS</span>
              </div>
            </div>

            <div className="flex pr-8">
              <div
                className="ml-16 pl-4 flex flex-col capitalize text-gray-600
                        dark:text-gray-400"
              >
                <span className="mt-2 bg-blue-100 text-semibold text-blue-400 px-4 py-1 rounded text-black dark:text-gray-200">
                  New
                </span>
              </div>

              <div
                className="ml-4 pt-2 flex flex-col capitalize text-gray-600
                        "
              >
                <div></div>
              </div>

              <div
                className="ml-16 pt-3 flex flex-col capitalize text-gray-600
                        dark:text-gray-400"
              >
                <p>
                  <span className="font-bold">New Chili piper license - </span>
                  Hey Schott, have you lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default List;
