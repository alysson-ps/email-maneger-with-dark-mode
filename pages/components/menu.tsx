import React, { useEffect, useState } from 'react';
import { ResizableBox } from 'react-resizable';

import Avatar from './Avatar';

export default function Menu() {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight);
    }
  }, []);

  return (
    <ResizableBox
      width={200}
      height={height}
      className="box"
      minConstraints={[180, height]}
      maxConstraints={[340, height]}
      axis="x"
      handle={<span className="custom-handle custom-handle-se" />}
    >
      <div className="scrollbar border-r-2 border-gray-300 fixed z-30 inset-y-0 left-0 h-full transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 -translate-x-full ease-in">
        <div className="flex items-center justify-around mt-6">
          <Avatar color="white" />
          <div className="flex items-center justify-center">
            <button className="flex bg-blue-500 shadow-sm p-1 px-8 -ml-2 rounded-md text-white dark:text-white text-lg">
              <span className="inline-flex mt-1 mr-2"></span>
              <a href="#" className="inline-flex text-gray-100">
                New Email
              </a>
            </button>
          </div>
        </div>

        <nav className="flex flex-col mt-8 px-4 text-center">
          <a
            href="#"
            className=" border-blue-400 relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-2 border-transparent pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">{/* 2 */}</span>
            <span className="ml-2 text-md tracking-wide text-blue-500">Inbox</span>
            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-orange bg-blue-50 rounded-full">
              12
            </span>
          </a>

          <a
            href="#"
            className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">{/* 3 */}</span>
            <span className="ml-2 text-md tracking-wide text-gray-600 text-base">Starred</span>
          </a>
          <a
            href="#"
            className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">{/*  */}</span>
            <span className="ml-2 text-md tracking-wide text-gray-600 text-base">Snoozed</span>
          </a>
          <a
            href="#"
            className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">{/*  */}</span>
            <span className="ml-2 text-md tracking-wide text-gray-600 text-base">Sent</span>
          </a>
          <a
            href="#"
            className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">{/*  */}</span>
            <span className="ml-2 text-md tracking-wide text-gray-600 text-base">Draft</span>
          </a>

          <a
            href="#"
            className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              {/* <svg
              width="1.8em"
              height="1.8em"
              viewBox="0 0 16 16"
              className="bi bi-exclamation border-2 border-gray-400 rounded-full text-gray-400"
              fill="currentColor"
            >
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path>
            </svg> */}
            </span>
            <span className="ml-2 text-md tracking-wide text-gray-600  text-base">Spam</span>
          </a>

          <a
            href="#"
            className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800   pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              {/* <svg
              width="1.8em"
              height="1.8em"
              viewBox="0 0 16 16"
              className="bi bi-exclamation border-2 border-gray-400 rounded-full text-gray-400"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg> */}
            </span>
            <span className="ml-2 text-md tracking-wide text-gray-600  text-base">Bin</span>
          </a>

          <hr className="mt-2" />

          <a
            href="#"
            className="  relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800  border-transparent pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              {/* <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg> */}
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Labels</span>
            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-gray-400 bg-gray-200 rounded-full">
              4
            </span>
          </a>
        </nav>
      </div>
    </ResizableBox>
  );
}
