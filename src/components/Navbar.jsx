import { useContext } from "react";
import { Container, Navbar as BNavbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { total } = useContext(AppContext);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <BNavbar bg="secondary" fixed="top">
      <Container>
        <Nav>
          <NavLink to="/" className={setActiveClass}>
            Home
          </NavLink>
          <NavLink to="/pizza" className={setActiveClass}>
            Pizzas
          </NavLink>
        </Nav>
        <Nav className="align-items-center">
          <span className="text-white">${total}</span>
          <NavLink to="/cart" className={setActiveClass}>
            Cart
          </NavLink>
        </Nav>
      </Container>
    </BNavbar>
  );
};

export default Navbar;
