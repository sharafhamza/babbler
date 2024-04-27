import * as React from "react";
import Login from "./Pages/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";
import Root from "./Routes/Root";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<SignUp />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
