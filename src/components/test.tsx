import React, { useState } from "react";

type MyComponentProps = {
  isActive: boolean;
  onClick: () => void;
  isClicked: boolean;
};

const MyComponent: React.FC<MyComponentProps> = ({
  isActive,
  onClick,
  isClicked,
}) => {
  const buttonStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    border: "none",
    fontSize: "15px",
    color: isClicked ? "#ffffff" : isActive ? "#1890ff" : "#242424",
    backgroundColor: isClicked ? "#1890ff" : "#ffffff",
    borderBottom: isClicked
      ? "none"
      : isActive
      ? "1.5px solid #1890ff"
      : "none",
    cursor: "pointer",
    borderRadius: "5px",
    padding: "5px 10px",
  };

  const handleClick = () => {
    onClick();
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {/* Button content */}
    </button>
  );
};

type MyButtonGroupProps = {
  activeButtonIndex: number;
  onClick: (index: number) => void;
};

const MyButtonGroup: React.FC<MyButtonGroupProps> = ({
  activeButtonIndex,
  onClick,
}) => {
  const handleClick = (index: number) => {
    onClick(index);
  };

  return (
    <div>
      <MyComponent
        isActive={activeButtonIndex === 0}
        onClick={() => handleClick(0)}
        isClicked={activeButtonIndex === 0}
      />
      <MyComponent
        isActive={activeButtonIndex === 1}
        onClick={() => handleClick(1)}
        isClicked={activeButtonIndex === 1}
      />
      <MyComponent
        isActive={activeButtonIndex === 2}
        onClick={() => handleClick(2)}
        isClicked={activeButtonIndex === 2}
      />
    </div>
  );
};

export default MyButtonGroup;
