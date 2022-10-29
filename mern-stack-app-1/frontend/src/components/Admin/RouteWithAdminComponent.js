import React from "react";
import AdminChatComponent from "./AdminChatComponent";
import { Outlet } from "react-router-dom";

function RouteWithAdminComponent() {
  return (
    <>
      <Outlet />
      <AdminChatComponent />
    </>
  );
}

export default RouteWithAdminComponent;
