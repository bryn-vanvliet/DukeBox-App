import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './components/App.tsx';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    
    <Auth0Provider
      domain="YOUR_DOMAIN"
      clientId="YOUR_CLIENT_ID"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}><ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
            <ReactQueryDevtools />
          </BrowserRouter>
        </QueryClientProvider>
      </ChakraProvider>
    </Auth0Provider>
    
  );
});
