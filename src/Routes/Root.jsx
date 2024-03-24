import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h2>Header</h2>
      <Outlet />
      <p>Footer</p>
    </div>
  );
};

export default Root;
