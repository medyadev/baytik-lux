import React, { useState } from "react";
import TabContent from "./TabContent";
import TabNavItem from "./TabNavItem";
import "./style.css";
import FristTab from "./FristTab";
import SecondTab from "./SecondTabs";
import ThirdTab from "./ThirdTab";

export default function Objects() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="">
      <h1 className="text-center">Объекты</h1>
      <div className="Tabs">
        <ul className="nav">
          <TabNavItem
            title="Villington"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Bestie"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Smart house"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <FristTab />
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <SecondTab />
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <ThirdTab />
          </TabContent>
        </div>
      </div>
    </div>
  );
}
