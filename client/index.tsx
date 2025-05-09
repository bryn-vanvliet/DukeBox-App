import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider } from '@chakra-ui/react';

import App from './components/App.tsx';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <ChakraProvider> 
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <App />
        <ReactQueryDevtools />
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
});
