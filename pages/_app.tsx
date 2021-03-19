import { AppProps } from 'next/app';
import '../styles/globals.css';

import { MessageProvider } from './contexts/message';
import { ThemeProvider } from './contexts/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MessageProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </MessageProvider>
  );
}

export default MyApp;
