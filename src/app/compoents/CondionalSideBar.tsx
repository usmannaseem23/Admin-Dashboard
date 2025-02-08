"use client";

import { usePathname } from "next/navigation";
import SideBar from "./Sidebar";

const ConditionalSideBar = () => {
  const pathname = usePathname();


  if (pathname === "/login") {
    return null;
  }
  if (pathname === "/") {
    return null;
  }

  return <SideBar />;
};

export default ConditionalSideBar;
