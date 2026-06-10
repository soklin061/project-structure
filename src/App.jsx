import React from 'react';
import { ProductProvider } from './context/ProductContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ProductProvider>
      <header style={{ padding: '20px', background: '#f5f5f5', textAlign: 'center' }}>
        <h1>My Premium Store</h1>
      </header>
      <AppRoutes />
    </ProductProvider>
  );
}

export default App;