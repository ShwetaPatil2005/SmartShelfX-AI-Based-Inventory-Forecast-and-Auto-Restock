import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {logoutUser} from '../../Services/LoginService';
import {useNavigate} from 'react-router-dom';
import '../../DisplayView.css';

const AdminMenu = () => {
  let navigate=useNavigate();
  const handleLogout = () => {
  logoutUser().then(() => {
          localStorage.clear();
          sessionStorage.clear();
          navigate('/');
     })
  };

  return (
    <div>
      <div className="admin-header">
        <h2>Inventory Management System</h2>
        <h4>Admin Dashboard</h4>
      </div>
       <Navbar expand="lg" className="admin-navbar">
         <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <NavDropdown title="SKU" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/sku-list">SKU List</NavDropdown.Item>
              <NavDropdown.Item href="/sku-entry">SKU Addition</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Product" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/product-entry">Product Addition</NavDropdown.Item>
              <NavDropdown.Item href="/product-list">Product List</NavDropdown.Item>
              <DropdownButton as={ButtonGroup} key='end' id='dropdown-button-drop-end' drop='end' variant="light" title='Product Analysis'>
                <Dropdown.Item href="/product-pie">All Products Analysis</Dropdown.Item>
                 <Dropdown.Item href="">Single Product Demand Analysis</Dropdown.Item>
              </DropdownButton>
             </NavDropdown>
            <NavDropdown title="Transaction Report" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/trans-repo/OUT">Out Transaction Report</NavDropdown.Item>
              <NavDropdown.Item href="/trans-repo/IN">In Transaction Report</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="">Show User Details</Nav.Link>
            <Nav.Link onClick={handleLogout} className="logout-btn">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
      );

};

export default AdminMenu;
