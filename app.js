import React from "react";
import ReactDOM from "react-dom/client";



const HomeComponent = () => {
  return (
    <div>
      {jsxHeading} Home Component
      {FunctionalComponentHeader()}11
      <FunctionalComponentHeader />
      <FunctionalComponentHeader></FunctionalComponentHeader>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HomeComponent />);
