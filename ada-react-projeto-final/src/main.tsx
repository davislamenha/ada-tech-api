import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SearchProvider, ProductProvider } from './context/SearchContext.tsx';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <ProductProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </ProductProvider>
  </React.StrictMode>
);
