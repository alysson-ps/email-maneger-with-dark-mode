import { useContext } from 'react';
import MessageContext from './contexts/message';

function Home() {
  const { data, setData } = useContext(MessageContext);
  return (
    <>
      <p>{JSON.stringify(data)}</p>

      <input onChange={e => setData(e.target.value)}></input>
    </>
  );
}

export default Home;
