import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import StoreContextProvider from './Context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>
);
