import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; // Add this import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDroplet,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header({ userType, onUserTypeClick }) {
  const navigate = useNavigate(); // Add this line

  return (
    <Navbar
      fixed="top"
      expand="lg"
      bg="light"
      className="shadow-sm"
      style={{ height: 150, backgroundColor: "red" }}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faHandHoldingDroplet}
            size="4x"
            className="text-danger me-3"
          />
          <span className="fs-2 fw-bold text-primary">Blood Bank</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-end align-items-center"
        >
          {userType && (
            <>
              <Navbar.Text
                className="me-3 fw-bold text-uppercase text-primary d-flex align-items-center"
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={onUserTypeClick}
                title={`Show ${userType} info`}
              >
                <FontAwesomeIcon icon={faUser} className="me-2" />
                {userType}
              </Navbar.Text>
              <Button
                variant="outline-danger"
                onClick={() => navigate("/")} // Add this handler
              >
                <FontAwesomeIcon icon={faRightFromBracket} className="me-2" />
                Logout
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
