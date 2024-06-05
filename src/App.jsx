import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./Pages/MainPage";
import MainLayout from "./layouts/MainLayout";
import Resume from "./Pages/Resume";
import HireMe from "./Pages/HireMe";
import NotFound from "./Pages/NotFound";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="resume" element={<Resume />} />
      <Route path="hire" element={<HireMe />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
