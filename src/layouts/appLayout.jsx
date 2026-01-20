import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout({ appName }) {
  return (
    <>
      <Header appName={appName} />
      <Outlet />
    </>
  );
}