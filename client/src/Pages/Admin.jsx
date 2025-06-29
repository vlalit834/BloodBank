import React, { useState } from "react";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import InfoTable from "../component/DashBoard/InfoTable";

function Admin() {
  const [tableType, setTableType] = useState("info");

  // Function to show admin info table
  const showUserInfo = () => setTableType("info");

  return (
    <div>
      <Header userType="admin" onUserTypeClick={showUserInfo} />
      <SideBar setTableType={setTableType} tableType={tableType} />
      <div
        className="main-content"
        style={{
          marginLeft: window.innerWidth >= 992 ? 350 : 0,
          marginTop: 152,
          transition: "margin-left 0.3s",
        }}
      >
        <InfoTable tableType={tableType} />
      </div>
    </div>
  );
}

export default Admin;
