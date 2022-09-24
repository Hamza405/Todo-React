import React from "react";

const tags = {
  borderRadius: "50%",
  height: "25px",
  width: "25px",
  border: "2px solid white",
  padding: "0.7rem",
  color: "white",
  marginLeft: "-0.5rem",
  zIndex: 100,
};

const TagName = ({ title, color }) => {
  return <span style={{ backgroundColor: color, ...tags }}>{title}</span>;
};

export default TagName;
