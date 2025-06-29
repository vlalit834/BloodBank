import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Card } from "react-bootstrap";
import SubmitButton from "../SubmitButton";
import FormType from "./FormType";
import InputFiled from "./InputFiled";
import ControlledTabs, { TabContext } from "../ControlledTabs";

export default function FormInput() {
  const { pathname, state } = useLocation();
  const type = pathname === "/login" ? "Login" : "Register";
  const navigate = useNavigate();
  const initialTab = state?.tabKey || "donar";
  const [tabKey, setTabKey] = useState(initialTab);

  const toggleAuth = () => {
    const target = type === "Login" ? "/" : "/login";
    navigate(target, { state: { tabKey } });
  };

  const tabKeyLower = tabKey.toLowerCase();
  const fields =
    type === "Login"
      ? [
          ["email", "Email"],
          ["password", "Password"],
        ]
      : [
          ["text", "Name"],
          ["email", "Email"],
          ["password", "Password"],
          ["tel", "Phone number"],
          ...(tabKeyLower !== "admin"
            ? [
                ["text", "Gender"],        // Only for donor and patient
                ["text", "Blood Group"],   // Only for donor and patient
                ["number", "Age"],
              ]
            : []),
        ];

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div>
        <TabContext.Provider value={tabKey}>
          <ControlledTabs
            activeKey={tabKey}
            onSelect={setTabKey}
            tabs={[
              { eventKey: "donar", title: "Donor" },
              { eventKey: "patient", title: "Patient" },
              { eventKey: "admin", title: "Admin" },
            ]}
          />
          <FormType type={type} className="mb-4 text-center" />
          <Card className="p-4 shadow-sm rounded" style={{ maxWidth: 400 }}>
            <Form>
              {fields.map(([fldType, placeholder], idx) => (
                <InputFiled
                  key={idx}
                  type={fldType}
                  placeholder={placeholder}
                  controlId={"form" + placeholder.replace(/\s+/g, "")}
                  className="mb-3"
                />
              ))}

              <div className="d-flex justify-content-between align-items-center mt-2">
                <SubmitButton type={type} />
                <small>
                  {type === "Register"
                    ? "  Already have an account?  "
                    : "  Create a new account  "}
                  <span
                    className="text-primary text-decoration-underline"
                    role="button"
                    onClick={toggleAuth}
                  >
                    {type === "Register" ? "Login" : "Register"}
                  </span>
                </small>
              </div>
            </Form>
          </Card>
        </TabContext.Provider>
      </div>
    </div>
  );
}
