import { AppProps } from 'next/app';
import '../styles/globals.css';

import { MessageProvider } from './contexts/message';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MessageProvider>
      <Component {...pageProps} />
    </MessageProvider>
  );
}

export default MyApp;
