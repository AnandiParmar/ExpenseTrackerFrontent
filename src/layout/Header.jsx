import Profile from "@/components/profile/Profile";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate("/login-registration");
  }
  return (
    <header className="bg-purple-900 h-[60px] flex justify-between items-center gap-4">
      <h4 className="text-white  pl-2 ">Expense Tracker</h4>
      <div className="flex gap-2 pr-3">
        <button
          className="text-white pr-2 font-bold hover:underline "
          onClick={handleLogout}
        >
          Logout
        </button>
        <Profile />
      </div>
    </header>
  );
};

export default Header;
