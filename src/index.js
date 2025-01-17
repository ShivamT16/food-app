import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantCard from './components/RestaurantCard';
import { CuisinePage } from './components/CuisinePage';
import { CuisineProvider } from './Context/CuisineContext';
import { RestaurantMenu } from './components/RestaurantMenu';
import { CartProvider } from './Context/CartContext';
import { Cart } from './components/Cart';
import { ErrorPage } from './components/Error';
import { SearchPage } from './components/SearchPage';
import { SignIn } from './components/SignIn';
import { AuthProvider } from './Context/AuthContext';
import { Login } from './components/LogIn';

const appRouter = createBrowserRouter([
  { path: "/",
    element: <App />,
    children: [
  { path: "/", element: <RestaurantCard /> },
  { path: "/cuisine/:cuisineLink", element: <CuisinePage /> },
  { path: "/restaurant/:restroId", element: <RestaurantMenu/> },
  { path: "/search", element: <SearchPage/> },
  { path: "/cart", element: <Cart /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/login", element: <Login />}
  ],
  errorElement: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthProvider> 
    <CuisineProvider>
     <CartProvider>
     <RouterProvider router={appRouter} />
     </CartProvider>
    </CuisineProvider>
   </AuthProvider>
  </React.StrictMode>
);
