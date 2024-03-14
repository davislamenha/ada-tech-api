import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SearchProvider } from './context/SearchContext';
import { ProductProvider } from './context/ProductsContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ProductProvider>
  </React.StrictMode>,
);
