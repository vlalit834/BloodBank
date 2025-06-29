import React, { createContext } from "react";
import { Tabs, Tab } from "react-bootstrap";

export const TabContext = createContext();

export default function ControlledTabs({ activeKey, onSelect, tabs }) {
  return (
    <TabContext.Provider value={activeKey}>
      <Tabs
        id="controlled-tab-example"
        activeKey={activeKey}
        onSelect={onSelect}
        justify
        variant="pills"
        className="mb-3"
      >
        {tabs.map((tab) => (
          <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.title} />
        ))}
      </Tabs>
    </TabContext.Provider>
  );
}
