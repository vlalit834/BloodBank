import React, { useState } from "react";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import InfoTable from "../component/DashBoard/InfoTable";

function Donor() {
  const [tableType, setTableType] = useState("table"); // default is table

  return (
    <div>
      <Header userType="donor" onUserTypeClick={() => setTableType("table")} />
      <SideBar setTableType={setTableType} tableType={tableType} />
      <div style={{ marginLeft: 350, marginTop: 152 }}>
        <InfoTable tableType={tableType} />
      </div>
    </div>
  );
}

export default Donor;
