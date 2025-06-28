import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { TabContext } from "./component/ControlledTabs";
import ControlledTabs from "./component/ControlledTabs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";

function App() {
  const location = useLocation();
  const showTabs = location.pathname === "/" || location.pathname === "/login";
  const [tabKey, setTabKey] = useState("donar");

  return (
    <TabContext.Provider value={tabKey}>
      {showTabs && <ControlledTabs activeKey={tabKey} onSelect={setTabKey} />}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />}>
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Route>
      </Routes>
    </TabContext.Provider>
  );
}

export default App;
