import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { client } from 'src/config';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SpeedInsights } from '@vercel/speed-insights/react';

import { App } from './App';
import { AntdProvider } from './providers';

import 'src/assets/styles/base/_reset.scss';
import 'antd/dist/reset.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <Router>
      <AntdProvider>
        <App />
        <SpeedInsights />
      </AntdProvider>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
