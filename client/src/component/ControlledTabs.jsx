import React, { createContext } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const TabContext = createContext();

function ControlledTabs({ activeKey, onSelect }) {
  const getTabStyle = (tabKey) => ({
    backgroundColor: activeKey === tabKey ? "#0d6efd" : "transparent",
    color: activeKey === tabKey ? "#fff" : "#0d6efd",
    border: activeKey === tabKey ? "1px solid #0d6efd" : "1px solid #dee2e6",
    borderRadius: "8px",
    padding: "12px 0",
    width: "100%",
    textAlign: "center",
    transition: "all 0.2s",
    cursor: "pointer",
    minHeight: "40px",
    display: "block",
  });

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={activeKey}
      onSelect={onSelect}
      className="mb-3"
      justify
    >
      <Tab
        eventKey="donar"
        title={<div style={getTabStyle("donar")}>Donar</div>}
      />
      <Tab
        eventKey="admin"
        title={<div style={getTabStyle("admin")}>Admin</div>}
      />
      <Tab
        eventKey="hospital"
        title={<div style={getTabStyle("hospital")}>Hospital</div>}
      />
      <Tab
        eventKey="college"
        title={<div style={getTabStyle("college")}>College</div>}
      />
    </Tabs>
  );
}

export default ControlledTabs;
