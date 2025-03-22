import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FavouritesPage from './pages/FavouritesPage';
import FavouriteDetailPage from './pages/FavouriteDetailPage';
import SignUpPage from './pages/SignUpPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'favourites', element: <FavouritesPage /> },
      { path: 'favourites/:id', element: <FavouriteDetailPage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: '*', element: <NotFoundPage /> }, // Wildcard route for 404
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);