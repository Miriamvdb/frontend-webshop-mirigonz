import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews";
import { useState } from "react";
import "./styles.css";

const tabs = {
  0: <Reviews />,
  1: <AdditionalInfo />,
  2: <Description />,
};

const LowerSlice = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabToRender = tabs[activeTab];

  return (
    <div className="ContainerLowerSlice">
      <div className="LowerSlice">
        <h3 className="Header" onClick={() => setActiveTab(0)}>
          Reviews
        </h3>
        <h3 className="Header" onClick={() => setActiveTab(1)}>
          Additional Info
        </h3>
        <h3 className="Header" onClick={() => setActiveTab(2)}>
          Description
        </h3>
      </div>
      <div className="tab-text">{tabToRender}</div>
    </div>
  );
};

export { LowerSlice };
