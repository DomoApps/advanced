import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import RyuuJS from 'ryuu.js';
import { TranslatedApp } from '@domoapps/react-components';

import { store } from './reducers';
import App from 'components/app';

import './styles/index.scss';

// Block auto-reload on app when datasets change externally
RyuuJS.onDataUpdate(() => null);

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TranslatedApp appComponent={App} />
    </Provider>
  </React.StrictMode>,
);
