// IframeComponent.tsx
import React from "react";

const IframeComponent = () => {
  return (
    <iframe
      src="http://localhost:5173" // React 앱의 기본 URL
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
      }}
      title="My React App"
    />
  );
};

export default IframeComponent;
