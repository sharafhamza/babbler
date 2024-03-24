import * as React from "react";
import Login from "./Pages/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Routes/Root";
import Home from "./Pages/Home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
