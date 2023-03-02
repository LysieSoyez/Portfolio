// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import * as React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import Projects from './Pages/Projects';
import Home from './Pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Project",
    element: <Projects />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
