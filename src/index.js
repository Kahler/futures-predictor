import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Futures from './routes/Futures';
import { FButton } from './components/FButton';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/futures',
    element: <Futures />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <nav class="navigation">
      <FButton reference={`/`}>Graph</FButton>
      <FButton reference={`/futures`}>Futures Map</FButton>
      {/* <a href={`/`}>Your Name</a>
      <a href={`/futures`}>Your Friend</a> */}
    </nav>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
