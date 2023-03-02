
import * as React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import Project from './Pages/Projects';
import Header from './Pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/Project",
    element: <Project />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;
