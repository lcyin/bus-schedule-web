import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";

const Header = ({ showMobmenu }) => {
  return (
    <Navbar className="my-2" color="danger" dark>
      <NavbarBrand href="/">KMB Bus Schedule</NavbarBrand>
    </Navbar>
  );
};

export default Header;
