import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";

function InfoTable({ tableType }) {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const isAdmin = path === "/admin";
  const isDonor = path === "/donor";
  const isPatient = path === "/patient";

  // State for units input and blood group (for patient)
  const [units, setUnits] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  // Heading logic
  let heading = "Admin Info";
  if (isAdmin && tableType === "donor") heading = "Donor List";
  else if (isAdmin && tableType === "patient") heading = "Patient List";
  else if (isAdmin && tableType === "donations") heading = "Donations";
  else if (isAdmin && tableType === "blood-requests")
    heading = "Blood Requests";
  else if (isAdmin && tableType === "requests-history")
    heading = "Requests History";
  else if (isAdmin && tableType === "blood-stock") heading = "Blood Stock";
  // Donor headings
  if (isDonor && tableType === "info") heading = "Donate";
  else if (isDonor && tableType === "history") heading = "Past Donations";
  else if (isDonor) heading = "Donor Info";
  // Patient headings
  if (isPatient && tableType === "info") heading = "Request Blood";
  else if (isPatient && tableType === "history") heading = "Request History";
  else if (isPatient) heading = "Patient Info";

  // Handler for donate button
  const handleDonate = (e) => {
    e.preventDefault();
    if (!units || isNaN(units) || Number(units) <= 0) {
      alert("Please enter a valid number of units.");
      return;
    }
    alert(`You have donated ${units} unit(s) of blood!`);
    setUnits("");
  };

  // Handler for patient request blood
  const handleRequestBlood = (e) => {
    e.preventDefault();
    if (!units || isNaN(units) || Number(units) <= 0) {
      alert("Please enter a valid number of units.");
      return;
    }
    if (!bloodGroup) {
      alert("Please select a blood group.");
      return;
    }
    alert(`Requested ${units} unit(s) of ${bloodGroup} blood!`);
    setUnits("");
    setBloodGroup("");
  };

  // Show donate form for donor/info
  if (isDonor && tableType === "info") {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(26,35,126,0.10)",
            padding: "32px 24px",
            maxWidth: 400,
            width: "100%",
          }}
        >
          <h3
            className="mb-4 text-center"
            style={{
              color: "#1a237e",
              background: "#e3eafc",
              padding: "12px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(26,35,126,0.08)",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            {heading}
          </h3>
          <Form className="d-flex flex-column gap-3" onSubmit={handleDonate}>
            <Form.Group>
              <Form.Label style={{ fontWeight: 500, color: "#1a237e" }}>
                Number of Units to Donate
              </Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                placeholder="Enter units"
                required
                style={{
                  borderRadius: "8px",
                  border: "1.5px solid #bdbdbd",
                  fontSize: "1.1rem",
                  padding: "10px 14px",
                  boxShadow: "0 1px 2px rgba(26,35,126,0.03)",
                  marginTop: "6px",
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "10px 0",
                background: "#1a237e",
                border: "none",
                marginTop: "12px",
                boxShadow: "0 2px 8px rgba(26,35,126,0.08)",
                transition: "background 0.2s",
              }}
            >
              Donate
            </Button>
          </Form>
        </div>
      </div>
    );
  }

  // Show request blood form for patient/info
  if (isPatient && tableType === "info") {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(26,35,126,0.10)",
            padding: "32px 24px",
            maxWidth: 400,
            width: "100%",
          }}
        >
          <h3
            className="mb-4 text-center"
            style={{
              color: "#1a237e",
              background: "#e3eafc",
              padding: "12px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(26,35,126,0.08)",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            {heading}
          </h3>
          <Form
            className="d-flex flex-column gap-3"
            onSubmit={handleRequestBlood}
          >
            <Form.Group>
              <Form.Label style={{ fontWeight: 500, color: "#1a237e" }}>
                Number of Units
              </Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                placeholder="Enter units"
                required
                style={{
                  borderRadius: "8px",
                  border: "1.5px solid #bdbdbd",
                  fontSize: "1.1rem",
                  padding: "10px 14px",
                  boxShadow: "0 1px 2px rgba(26,35,126,0.03)",
                  marginTop: "6px",
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label style={{ fontWeight: 500, color: "#1a237e" }}>
                Blood Group
              </Form.Label>
              <Form.Select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required
                style={{
                  borderRadius: "8px",
                  border: "1.5px solid #bdbdbd",
                  fontSize: "1.1rem",
                  padding: "10px 14px",
                  boxShadow: "0 1px 2px rgba(26,35,126,0.03)",
                  marginTop: "6px",
                }}
              >
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "10px 0",
                background: "#1a237e",
                border: "none",
                marginTop: "12px",
                boxShadow: "0 2px 8px rgba(26,35,126,0.08)",
                transition: "background 0.2s",
              }}
            >
              Request
            </Button>
          </Form>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h3
        className="mb-4 text-center"
        style={{
          color: "#1a237e",
          background: "#e3eafc",
          padding: "16px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(26,35,126,0.08)",
        }}
      >
        {heading}
      </h3>
      <Table
        striped
        bordered
        hover
        responsive
        className="shadow-sm"
        style={{
          background: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead style={{ background: "#e3eafc" }}>
          <tr>
            {isAdmin && tableType === "donor" ? (
              <>
                <th style={{ color: "#1a237e" }}>Name</th>
                <th style={{ color: "#1976d2" }}>Age</th>
                <th style={{ color: "#c62828" }}>Blood Group</th>
                <th style={{ color: "#388e3c" }}>Gender</th>
                <th style={{ color: "#388e3c" }}>Mobile</th>
                <th style={{ color: "#6d4c41" }}>Edit</th>
              </>
            ) : isAdmin && tableType === "patient" ? (
              <>
                <th style={{ color: "#1a237e" }}>Name</th>
                <th style={{ color: "#1976d2" }}>Age</th>
                <th style={{ color: "#c62828" }}>Blood Group</th>
                <th style={{ color: "#388e3c" }}>Gender</th>
                <th style={{ color: "#388e3c" }}>Mobile</th>
                <th style={{ color: "#6d4c41" }}>Edit</th>
              </>
            ) : isAdmin && tableType === "donations" ? (
              <>
                <th style={{ color: "#1a237e" }}>Donor</th>
                <th style={{ color: "#c62828" }}>Donor Blood Group</th>
                <th style={{ color: "#388e3c" }}>Recipient</th>
                <th style={{ color: "#1976d2" }}>Recipient Blood Group</th>
              </>
            ) : isAdmin && tableType === "blood-requests" ? (
              <>
                <th style={{ color: "#388e3c" }}>Recipient</th>
                <th style={{ color: "#1976d2" }}>Recipient Blood Group</th>
                <th style={{ color: "#6d4c41" }}>Edit</th>
              </>
            ) : isAdmin && tableType === "requests-history" ? (
              <>
                <th style={{ color: "#388e3c" }}>Recipient</th>
                <th style={{ color: "#1976d2" }}>Recipient Blood Group</th>
                <th style={{ color: "#c62828" }}>Number of Unit</th>
              </>
            ) : isAdmin && tableType === "blood-stock" ? (
              <>
                <th style={{ color: "#c62828" }}>Blood Group</th>
                <th style={{ color: "#1976d2" }}>Number of Unit</th>
              </>
            ) : isDonor && tableType === "history" ? (
              <>
                <th style={{ color: "#1a237e" }}>Date</th>
                <th style={{ color: "#c62828" }}>Unit of blood</th>
              </>
            ) : isDonor ? (
              <>
                <th style={{ color: "#1a237e" }}>Name</th>
                <th style={{ color: "#388e3c" }}>Gender</th>
                <th style={{ color: "#1976d2" }}>Age</th>
                <th style={{ color: "#c62828" }}>Mobile</th>
              </>
            ) : isPatient && tableType === "history" ? (
              <>
                <th style={{ color: "#1a237e" }}>Date</th>
                <th style={{ color: "#c62828" }}>Unit of blood</th>
                <th style={{ color: "#1976d2" }}>Status</th>
              </>
            ) : isPatient ? (
              <>
                <th style={{ color: "#1a237e" }}>Name</th>
                <th style={{ color: "#388e3c" }}>Gender</th>
                <th style={{ color: "#1976d2" }}>Age</th>
                <th style={{ color: "#c62828" }}>Mobile</th>
                <th style={{ color: "#6d4c41" }}>Blood Group</th>
              </>
            ) : (
              <>
                <th style={{ color: "#1a237e" }}>Name</th>
                <th style={{ color: "#388e3c" }}>Request Approved</th>
                <th style={{ color: "#d32f2f" }}>Request Rejected</th>
                <th style={{ color: "#fbc02d" }}>Request Pending</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {isAdmin && tableType === "donor" ? (
            <tr>
              <td style={{ fontWeight: "bold" }}>John Doe</td>
              <td>28</td>
              <td>O+</td>
              <td>Male</td>
              <td>9876543210</td>
              <td>
                <Button variant="warning" size="sm" className="me-2">
                  Edit
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ) : isAdmin && tableType === "patient" ? (
            <tr>
              <td style={{ fontWeight: "bold" }}>Jane Smith</td>
              <td>32</td>
              <td>A-</td>
              <td>Female</td>
              <td>9876501234</td>
              <td>
                <Button variant="warning" size="sm" className="me-2">
                  Edit
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ) : isAdmin && tableType === "donations" ? (
            <tr>
              <td style={{ fontWeight: "bold" }}>John Doe</td>
              <td style={{ color: "#c62828", fontWeight: "bold" }}>O+</td>
              <td style={{ fontWeight: "bold" }}>Jane Smith</td>
              <td style={{ color: "#1976d2", fontWeight: "bold" }}>A-</td>
            </tr>
          ) : isAdmin && tableType === "blood-requests" ? (
            <tr>
              <td style={{ fontWeight: "bold" }}>Jane Smith</td>
              <td style={{ color: "#1976d2", fontWeight: "bold" }}>A-</td>
              <td>
                <Button variant="success" size="sm" className="me-2">
                  Approve
                </Button>
                <Button variant="danger" size="sm">
                  Reject
                </Button>
              </td>
            </tr>
          ) : isAdmin && tableType === "requests-history" ? (
            <tr>
              <td style={{ fontWeight: "bold" }}>Jane Smith</td>
              <td style={{ color: "#1976d2", fontWeight: "bold" }}>A-</td>
              <td style={{ color: "#c62828", fontWeight: "bold" }}>2</td>
            </tr>
          ) : isAdmin && tableType === "blood-stock" ? (
            <tr>
              <td style={{ color: "#c62828", fontWeight: "bold" }}>O+</td>
              <td style={{ color: "#1976d2", fontWeight: "bold" }}>10</td>
            </tr>
          ) : isDonor && tableType === "history" ? (
            <>
              <tr>
                <td>2024-06-01</td>
                <td>2</td>
              </tr>
              <tr>
                <td>2024-05-15</td>
                <td>1</td>
              </tr>
            </>
          ) : isDonor ? (
            <tr>
              <td style={{ fontWeight: "bold" }}>John Doe</td>
              <td>Male</td>
              <td>28</td>
              <td>9876543210</td>
            </tr>
          ) : isPatient && tableType === "history" ? (
            <>
              <tr>
                <td>2024-06-10</td>
                <td>1</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>2024-05-20</td>
                <td>2</td>
                <td>Pending</td>
              </tr>
            </>
          ) : isPatient ? (
            <tr>
              <td style={{ fontWeight: "bold" }}>Alice Patient</td>
              <td>Female</td>
              <td>30</td>
              <td>9876500000</td>
              <td>O+</td>
            </tr>
          ) : (
            <tr>
              <td style={{ fontWeight: "bold" }}>Admin 1</td>
              <td style={{ color: "#388e3c", fontWeight: "bold" }}>12</td>
              <td style={{ color: "#d32f2f", fontWeight: "bold" }}>3</td>
              <td style={{ color: "#fbc02d", fontWeight: "bold" }}>2</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default InfoTable;
