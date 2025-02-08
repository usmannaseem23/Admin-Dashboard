"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBox, FaChartBar, FaList, FaUser, FaTimes, FaBars, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  };

  return (
    <div className="z-50">
      {/* Header when Sidebar is Closed */}
      {!sidebarOpen && (
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-600 to-blue-700 text-white w-full fixed top-0 left-0 z-10 md:hidden">
          <h1 className="text-xl font-bold">Avion Admin</h1>
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white text-2xl"
          >
            <FaBars />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transform fixed top-0 left-0 w-64 bg-gradient-to-r from-blue-800 to-blue-900 text-white h-full transition-transform duration-300 z-20`}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-700">
          <h1 className="text-xl font-bold">Bandage</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white text-2xl md:hidden"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-4">
          <Link
            href="/admin"
            className="flex items-center gap-2 hover:bg-indigo-700 p-2 rounded transition-all duration-300"
          >
            <FaChartBar /> Dashboard
          </Link>
          <Link
            href="/admin/product"
            className="flex items-center gap-2 hover:bg-indigo-700 p-2 rounded transition-all duration-300"
          >
            <FaBox /> Products
          </Link>
          <Link
            href="/admin/customers"
            className="flex items-center gap-2 hover:bg-indigo-700 p-2 rounded transition-all duration-300"
          >
            <FaUser /> Customers
          </Link>
          <Link
            href="/admin/orders"
            className="flex items-center gap-2 hover:bg-indigo-700 p-2 rounded transition-all duration-300"
          >
            <FaUser /> Orders
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 hover:bg-red-600 hover:text-white p-2 rounded text-red-500 mt-4 transition-all duration-300"
          >
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

      {/* Overlay to Close Sidebar */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-50 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default SideBar;
