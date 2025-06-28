import React from "react";
import Form from "react-bootstrap/Form";

function InputFiled({ type, placeholder, controlId, style }) {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Control type={type} placeholder={placeholder} style={style} />
    </Form.Group>
  );
}

export default InputFiled;
