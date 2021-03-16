import React, { useEffect, useState } from 'react';
import { ResizableBox } from 'react-resizable';
import { ProSidebar, Menu as SideMenu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import Avatar from './Avatar';

interface Isubmenu {
  id: number;
  name: string;
}

interface Imenu {
  id: number;
  name: string;
  subMenus: Isubmenu[];
}

export default function Menu(props: { content: Imenu[] }) {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight);
    }
  }, []);

  return (
    <ResizableBox
      width={295}
      height={height}
      className="box"
      minConstraints={[295, height]}
      maxConstraints={[450, height]}
      axis="x"
      handle={<span className="custom-handle custom-handle-se" />}
    >
      <div
        className="scrollbar border-r-2 border-gray-300 fixed z-30 inset-y-0 left-0 h-full transition duration-300 transform overflow-y-hidden lg:translate-x-0 lg:static lg:inset-0 -translate-x-full ease-in"
        style={{ backgroundColor: '#1d1d1d' }}
      >
        <div className="flex items-center justify-around my-6">
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
        {/* #1d1d1d */}
        <ProSidebar width={'100%'} className="h-full">
          <SideMenu>
            {props.content.map((item: Imenu) => (
              <SubMenu title={item.name}>
                {item.subMenus.map((subItem: Isubmenu) => (
                  <MenuItem>{subItem.name}</MenuItem>
                ))}
              </SubMenu>
            ))}
          </SideMenu>
        </ProSidebar>
      </div>
    </ResizableBox>
  );
}
