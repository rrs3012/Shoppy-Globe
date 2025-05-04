import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppStore from './utlies/appStore';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy imports
const App = lazy(() => import("./Components/App"))
const Body = lazy(() => import("./Components/Body"))
const ProductList = lazy(() => import("./Components/ProductList"))
const ProductDetails = lazy(() => import("./Components/ProductDetails"))
const Cart = lazy(() => import("./Components/Cart"))
const Checkout = lazy(() => import("./Components/Checkout"))
const NotFound = lazy (() => import ("./Components/NotFound"))
// Reusable fallback
const Loader = <div className="text-3xl animate-pulse text-center p-10">Loading...</div>;

const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={Loader}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={Loader}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: '/products',
        element: (
          <Suspense fallback={Loader}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: '/product/:id',
        element: (
          <Suspense fallback={Loader}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: '/cartItems',
        element: (
          <Suspense fallback={Loader}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: '/checkout',
        element: (
          <Suspense fallback={Loader}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={Loader}>
        <NotFound />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={AppStore}>
      <RouterProvider router={Router} />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        transition={Slide}
      />
    </Provider>
  </StrictMode>
);