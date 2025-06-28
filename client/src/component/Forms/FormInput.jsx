import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import SubmitButton from "../SubmitButton";
import { useNavigate, useLocation } from "react-router-dom";
import FormType from "./FormType";
import InputFiled from "./InputFiled";
import { TabContext } from "../ControlledTabs";
function FormInput() {
  const location = useLocation();
  const type = location.pathname === "/login" ? "Login" : "Register";
  const navigate = useNavigate();
  const selectedTab = useContext(TabContext);
  const handleLoginClick = () => navigate(type === "Login" ? "/" : "/login");

  const inputStyle = {
    backgroundColor: "#f1f3f4",
    border: "1px solid #d3d3d3",
    borderRadius: "6px",
    padding: "12px",
    fontSize: "16px",
    marginBottom: "10px",
  };
  const formStyle = {
    maxWidth: "400px",
    margin: "40px 0 0 0",
    padding: "24px",
    backgroundColor: "#f7f7f9",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  };
  const actionRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const loginTextStyle = {
    fontSize: "15px",
    color: "#0d6efd",
    textDecoration: "underline",
    cursor: "pointer",
  };

  const tabKey = selectedTab ? selectedTab.toLowerCase() : "";

  return (
    <>
      <FormType type={type} />
      <Form style={formStyle}>
        {type === "Login" ? (
          <>
            <InputFiled
              type="email"
              placeholder="Email"
              controlId="formEmail"
              style={inputStyle}
            />
            <InputFiled
              type="password"
              placeholder="Password"
              controlId="formPassword"
              style={inputStyle}
            />
          </>
        ) : (
          <>
            <InputFiled
              type="text"
              placeholder="Name"
              controlId="formName"
              style={inputStyle}
            />
            <InputFiled
              type="email"
              placeholder="Email"
              controlId="formEmail"
              style={inputStyle}
            />
            <InputFiled
              type="password"
              placeholder="Password"
              controlId="formPassword"
              style={inputStyle}
            />
            <InputFiled
              type="tel"
              placeholder="Phone number"
              controlId="formPhone"
              style={inputStyle}
            />
            {!["hospital", "college"].includes(tabKey) && (
              <InputFiled
                type="number"
                placeholder="Age"
                controlId="formAge"
                style={inputStyle}
              />
            )}
          </>
        )}
        <div style={actionRowStyle}>
          <SubmitButton type={type} />
          <span>
            {type === "Register"
              ? "Already Have an account? "
              : "Create a new account "}
            <span style={loginTextStyle} onClick={handleLoginClick}>
              {type === "Register" ? "Login" : "Register"}
            </span>
          </span>
        </div>
      </Form>
    </>
  );
}

export default FormInput;
