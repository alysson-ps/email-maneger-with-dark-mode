import Menu from './components/menu';
import List from './components/lists';
import { InferGetServerSidePropsType } from 'next';

import axios from 'axios';
import { useContext } from 'react';
import ThemeContext from './contexts/theme';

function Inbox({ menus }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={'flex flex-row w-screen h-screen ' + theme}>
      <Menu content={menus} />
      <List />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    'http://my-json-server.typicode.com/workinideas/vagafrontendteste/menus'
  );
  const menus: Imenu[] = res.data;
  return {
    props: { menus },
  };
};

export default Inbox;
