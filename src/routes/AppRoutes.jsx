import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProductsPage from '../pages/Products/Products';
import Dashboard from '../pages/DashboardPage';


function LoginPage() {
  return <div>Please sign in to continue.</div>;
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;