import React from "react";

function FormType(props) {
  const typeStyle = {
    backgroundColor: "#f7f7f9",
    border: "1px solid #d3d3d3",
    borderRadius: "12px",
    padding: "12px 0",
    fontSize: "22px",
    fontWeight: 600,
    color: "#333",
    maxWidth: "400px",
    margin: "24px 0 0 0",
    textAlign: "center",
  };
  return (
    <div style={typeStyle}>
      <span>{props.type}</span>
    </div>
  );
}

export default FormType;
