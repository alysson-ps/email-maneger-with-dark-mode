import React, { useRef, useState } from 'react';
import Popper from 'popper.js';

const Dropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef(null);
  const popoverDropdownRef = useRef(null);
  const openDropdownPopover = () => {
    // @ts-ignore: Unreachable code error
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div>
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative align-middle w-full">
            <button
              className="h-12 w-12 rounded-full object-cover"
              style={{ transition: 'all .15s ease' }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
              }}
            >
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                'text-base z-50 float-left py-2 list-none bg-white  text-left rounded shadow-lg mt-1 dark:bg-gray-800'
              }
              style={{ minWidth: '12rem' }}
            >
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900'
                }
                onClick={e => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900'
                }
                onClick={e => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900'
                }
                onClick={e => e.preventDefault()}
              >
                Something else here
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900'
                }
                onClick={e => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
