import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Pages/Home';
import Technologie from './Pages/Technologie';
import MenuBurg from './Composant/Home/MenuBurg';
import BarTabMobil from './Composant/Home/BarTabMobil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Home />
  </ChakraProvider>
);



// import * as React from 'react';
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import * as ReactDOM from "react-dom/client";
// import Projects from './Pages/Projects';
// import Home from './Pages/Home';
// import BarTab from './Pages/BarTab'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <BarTab />,
//   },
//   {
//     path: "/Project",
//     element: <Projects />,
//   },
// ]);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//   <RouterProvider router={router} />
//   </React.StrictMode>
// );
