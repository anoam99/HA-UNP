import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { defaultTheme } from './theme';
import { UserContextProvider } from './context/userContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
);
