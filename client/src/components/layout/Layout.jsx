import { Outlet } from "react-router-dom"; // ← أضف Outlet
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
    </>
  );
}
