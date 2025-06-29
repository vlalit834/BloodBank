import React, { useState } from "react";
import { Nav, Offcanvas, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDroplet,
  faTint,
  faHistory,
  faList,
  faBoxesStacked,
  faUserInjured,
  faBars,
  faDroplet, // for blood drop
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function SideBar({ setTableType, tableType }) {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  let links;
  if (path === "/donor") {
    links = [
      {
        label: "Donate Blood",
        icon: faHandHoldingDroplet,
        onClick: () => {
          setTableType && setTableType("info");
          setShow(false);
        },
      },
      {
        label: "Donation History",
        icon: faHistory,
        onClick: () => {
          setTableType && setTableType("history");
          setShow(false);
        },
      },
    ];
  } else if (path === "/patient") {
    links = [
      {
        label: "Request Blood",
        icon: faDroplet,
        onClick: () => {
          setTableType && setTableType("info");
          setShow(false);
        },
      },
      {
        label: "Request History",
        icon: faHistory,
        onClick: () => {
          setTableType && setTableType("history");
          setShow(false);
        },
      },
    ];
  } else if (path === "/admin") {
    links = (
      <>
        <Nav.Link
          as="button"
          onClick={() => {
            setTableType && setTableType("donor");
            setShow(false);
          }}
          className={`sidebar-link d-flex align-items-center py-3 px-4 ${
            tableType === "donor" ? "active" : ""
          }`}
          style={{ background: tableType === "donor" ? "#e3eafc" : undefined }}
        >
          <FontAwesomeIcon icon={faHandHoldingDroplet} className="me-2" />
          Donor
        </Nav.Link>
        <Nav.Link
          as="button"
          onClick={() => {
            setTableType && setTableType("patient");
            setShow(false);
          }}
          className={`sidebar-link d-flex align-items-center py-3 px-4 ${
            tableType === "patient" ? "active" : ""
          }`}
          style={{
            background: tableType === "patient" ? "#e3eafc" : undefined,
          }}
        >
          <FontAwesomeIcon icon={faUserInjured} className="me-2" />
          Patient
        </Nav.Link>
        <Nav.Link
          as="button"
          onClick={() => {
            setTableType && setTableType("donations");
            setShow(false);
          }}
          className={`sidebar-link d-flex align-items-center py-3 px-4 ${
            tableType === "donations" ? "active" : ""
          }`}
          style={{
            background: tableType === "donations" ? "#e3eafc" : undefined,
          }}
        >
          <FontAwesomeIcon icon={faTint} className="me-2" />
          Donations
        </Nav.Link>
        <Nav.Link
          as="button"
          onClick={() => {
            setTableType && setTableType("blood-requests");
            setShow(false);
          }}
          className={`sidebar-link d-flex align-items-center py-3 px-4 ${
            tableType === "blood-requests" ? "active" : ""
          }`}
          style={{
            background: tableType === "blood-requests" ? "#e3eafc" : undefined,
          }}
        >
          <FontAwesomeIcon icon={faList} className="me-2" />
          Blood Requests
        </Nav.Link>
        <Nav.Link
          as="button"
          onClick={() => {
            setTableType && setTableType("requests-history");
            setShow(false);
          }}
          className={`sidebar-link d-flex align-items-center py-3 px-4 ${
            tableType === "requests-history" ? "active" : ""
          }`}
          style={{
            background:
              tableType === "requests-history" ? "#e3eafc" : undefined,
          }}
        >
          <FontAwesomeIcon icon={faHistory} className="me-2" />
          Requests History
        </Nav.Link>
        <Nav.Link
          as="button"
          onClick={() => {
            setTableType && setTableType("blood-stock");
            setShow(false);
          }}
          className={`sidebar-link d-flex align-items-center py-3 px-4 ${
            tableType === "blood-stock" ? "active" : ""
          }`}
          style={{
            background: tableType === "blood-stock" ? "#e3eafc" : undefined,
          }}
        >
          <FontAwesomeIcon icon={faBoxesStacked} className="me-2" />
          Blood Stock
        </Nav.Link>
      </>
    );
  } else {
    links = (
      <>
        <Nav.Link
          href="/"
          className="sidebar-link d-flex align-items-center py-3 px-4"
        >
          <FontAwesomeIcon icon={faHandHoldingDroplet} className="me-2" />
          Home
        </Nav.Link>
      </>
    );
  }

  return (
    <>
      <style>
        {`
          .sidebar-link:hover, .sidebar-link:focus {
            background-color: #e3eafc !important;
            color: #1a237e !important;
            border-radius: 8px;
            transition: background 0.2s;
          }
          @media (max-width: 991.98px) {
            .custom-sidebar {
              display: none !important;
            }
          }
        `}
      </style>
      {/* Hamburger for mobile */}
      <Button
        variant="light"
        className="d-lg-none position-fixed"
        style={{ top: 160, left: 10, zIndex: 2000 }}
        onClick={() => setShow(true)}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </Button>

      {/* Offcanvas for mobile */}
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        className="d-lg-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column w-100">
            {Array.isArray(links)
              ? links.map((item, idx) => (
                  <Nav.Link
                    as="button"
                    key={item.label}
                    onClick={item.onClick}
                    className={`sidebar-link d-flex align-items-center py-3 px-4 ${
                      tableType === item.label.toLowerCase().replace(" ", "")
                        ? "active"
                        : ""
                    }`}
                    style={{
                      background:
                        tableType === item.label.toLowerCase().replace(" ", "")
                          ? "#e3eafc"
                          : undefined,
                    }}
                  >
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                    {item.label}
                  </Nav.Link>
                ))
              : links}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Sidebar for large screens */}
      <div
        style={{
          width: "350px",
          height: "calc(100vh - 150px)",
          background: "#f8f9fa",
          boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
          position: "fixed",
          top: 152,
          left: 0,
          zIndex: 1040,
        }}
        className="d-none d-lg-flex flex-column align-items-start custom-sidebar"
      >
        <Nav className="flex-column w-100">
          {Array.isArray(links)
            ? links.map((item, idx) => (
                <Nav.Link
                  as="button"
                  key={item.label}
                  onClick={item.onClick}
                  className={`sidebar-link d-flex align-items-center py-3 px-4 ${
                    tableType === item.label.toLowerCase().replace(" ", "")
                      ? "active"
                      : ""
                  }`}
                  style={{
                    background:
                      tableType === item.label.toLowerCase().replace(" ", "")
                        ? "#e3eafc"
                        : undefined,
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} className="me-2" />
                  {item.label}
                </Nav.Link>
              ))
            : links}
        </Nav>
      </div>
    </>
  );
}

export default SideBar;
