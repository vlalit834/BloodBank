import React from "react";
import Button from "react-bootstrap/Button";

function SubmitButton(props) {
  return (
    <>
      <Button>{props.type}</Button>
    </>
  );
}

export default SubmitButton;
