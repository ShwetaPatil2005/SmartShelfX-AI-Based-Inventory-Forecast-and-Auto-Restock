import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logoutUser } from "../../Services/LoginService";
import { useNavigate } from "react-router-dom";
import "../../DisplayView.css";
import managerImage from "../../assets/ManagerDashboard.png";

const ManagerMenu = () => {

  let navigate = useNavigate();

  const handleLogout = () => {
    logoutUser().then(() => {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/");
    });
  };

  return (

    <div className="admin-background">

      {/* HEADER */}

      <div className="admin-header">
        <h2>SmartShelfX – Inventory Management System</h2>
        <h4>Manager Dashboard</h4>
      </div>


      {/* NAVBAR */}

      <Navbar expand="lg" className="admin-navbar">

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <NavDropdown title="SKU">
              <NavDropdown.Item href="/sku-list">
                SKU List
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Product">

              <NavDropdown.Item href="/product-list">
                Product List
              </NavDropdown.Item>

              <NavDropdown.Item href="/product-pie">
                Product Analysis
              </NavDropdown.Item>

            </NavDropdown>


            <NavDropdown title="Transaction Report">

              <NavDropdown.Item href="/trans-repo/OUT">
                Out Transaction Report
              </NavDropdown.Item>

              <NavDropdown.Item href="/trans-repo/IN">
                In Transaction Report
              </NavDropdown.Item>

            </NavDropdown>


            <Nav.Link>
              Show User Details
            </Nav.Link>

          </Nav>


          <Nav>
            <Nav.Link onClick={handleLogout} className="logout-btn">
              Logout
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Navbar>


      {/* DASHBOARD CONTENT */}

      <div className="admin-dashboard-card">

        {/* LEFT SIDE */}

        <div className="admin-left">

          <h3>Welcome Manager 👋</h3>

          <p className="admin-description">
            SmartShelfX allows managers to monitor product inventory,
            track product demand and analyze stock status efficiently
            using a smart inventory management system.
          </p>

        </div>


        {/* RIGHT SIDE IMAGE */}

        <div className="admin-right">

          <img
            src={managerImage}
            alt="Manager Dashboard"
          />

        </div>

      </div>

    </div>

  );

};

export default ManagerMenu;