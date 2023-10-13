import GeneralLayout from '@/GeneralLayout';
import '../styles/globals.css'

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store/Store';


const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <GeneralLayout>
      <Component {...pageProps} />
    </GeneralLayout>
  </Provider>
);

export default App;
