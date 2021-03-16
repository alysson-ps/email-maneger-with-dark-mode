import Menu from './components/menu';
import List from './components/lists';
import { InferGetServerSidePropsType } from 'next';

import axios from 'axios';

interface Isubmenu {
  id: number;
  name: string;
}

interface Imenu {
  id: number;
  name: string;
  subMenus: Isubmenu[];
}

function Inbox({ menus }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Menu content={menus} />
      <List />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get(
    'http://my-json-server.typicode.com/workinideas/vagafrontendteste/menus'
  );
  const menus: Imenu[] = response.data;
  return {
    props: { menus }, // will be passed to the page component as props
  };
};

export default Inbox;
