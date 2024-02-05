"use strict";

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout';
import Landing from './pages/Landing';
import About from './pages/About';
import Blog from './pages/Blog';
import Docs from './pages/Docs';
import Projects from './pages/Projects';
import NotFound from './pages/Not-Found';
import './styles.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Landing />, errorElement: <NotFound /> },
      {
        path: 'about',
        element: <About />
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: 'docs',
        element: <Docs />
      }
    ],
  },
]);


// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
