import Profile from "@/components/profile/Profile";
import Header from "@/layout/Header";
import SideBar from "@/layout/SideBar";
// import { getUserData } from "@/store/features/user/userActions";
import React, { useState } from "react";

import { Outlet } from "react-router-dom";

function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {console.log("renderd")}
      <div
        className={`grid ${
          toggle
            ? "grid-cols-[50px_calc(100%-50px)] h-[50px]"
            : "grid-cols-[15%_85%] h-[99vh]"
        }  `}
      >
        <SideBar toggle={toggle} setToggle={setToggle} />
        <div>
          <Header />
          <div className="mt-[10%]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
