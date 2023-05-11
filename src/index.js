//React
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

//Components
import App from './App';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

//CSS
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <Step1 /> },
  { path: '/step2', element: <Step2 /> },
  { path: '/step3', element: <Step3 /> },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
