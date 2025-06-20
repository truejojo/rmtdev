import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BookmarkProvider from './context/BookmarkProvider.tsx';
import JobIdProvider from './context/JobIdProvider.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookmarkProvider>
        <JobIdProvider>
          <App />
        </JobIdProvider>
      </BookmarkProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
