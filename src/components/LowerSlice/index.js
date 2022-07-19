import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews";
import { useState } from "react";
import "./styles.css";

const tabs = {
  0: <Description />,
  1: <AdditionalInfo />,
  2: <Reviews />,
};

const LowerSlice = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabToRender = tabs[activeTab];

  return (
    <div className="ContainerLowerSlice">
      <div className="LowerSlice">
        <h3 className="Header" onClick={() => setActiveTab(0)}>
          Description
        </h3>
        <h3 className="Header" onClick={() => setActiveTab(1)}>
          Additional Info
        </h3>
        <h3 className="Header" onClick={() => setActiveTab(2)}>
          Reviews
        </h3>
      </div>
      <div className="tab-text">{tabToRender}</div>
    </div>
  );
};

export { LowerSlice };
