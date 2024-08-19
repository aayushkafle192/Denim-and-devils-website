import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and QueryClientProvider
import Signup from '../src/public/signup'
import Home from './public/home';
import Login from './public/login';
import Aboutus from './public/aboutus';
import Contactus from './public/contactus';
import Service from './public/service';
import Product from './public/product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './admin/dashborad/dashborad';
import ProductForm from './admin/product/productform';
import ProductIndex from './admin/product/productindex';
import OrderForm from './admin/order/orderform';
import OrderIndex from './admin/order/orderindex';

// Create a QueryClient instance
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}> {/* Wrap your app with QueryClientProvider */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/services" element={<Service />} />
          <Route path="/product" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="productform" element={<ProductForm />} />
            <Route path="productindex" element={<ProductIndex />} />
            <Route path="orderform" element={<OrderForm />} />
            <Route path="orderindex" element={<OrderIndex />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
