import React from "react";
import UserChatComponent from "./UserChatComponent";
import { Outlet } from "react-router-dom";

function RouteWithUserComponent() {
  return (
    <>
      <Outlet />
      <UserChatComponent />
    </>
  );
}

export default RouteWithUserComponent;
