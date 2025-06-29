import React, { useState } from "react";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import InfoTable from "../component/DashBoard/InfoTable";

function Patient() {
  const [tableType, setTableType] = useState("table");
  const showUserInfo = () => setTableType("table");

  return (
    <div>
      <Header userType="patient" onUserTypeClick={showUserInfo} />
      <SideBar setTableType={setTableType} tableType={tableType} />
      <div style={{ marginLeft: 350, marginTop: 152 }}>
        <InfoTable tableType={tableType} />
      </div>
    </div>
  );
}

export default Patient;
