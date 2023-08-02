import { Link, NavLink } from "react-router-dom";
import { SiStylelint } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import "../styles/Navbar.css";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <Box>
      <nav className="navbar">
        <Box className="container">
          <Link to="/">
            <Box className="logo">
              <SiStylelint />
              <h1 style={{ fontSize: "25px" }}>InStyle</h1>
            </Box>
            <Box className="smallscreenlogo">
              <SiStylelint />
              <h1 style={{ fontSize: "25px" }}>InStyle</h1>
            </Box>
          </Link>
          <Box className="menu-icon" onClick={handleShowNavbar}>
            <HamburgerIcon />
          </Box>
          <Box className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                {/* <NavLink to="/categories">Categories</NavLink> */}
                <Select placeholder="Categories">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </li>
              <li>
                <NavLink to="/deals">Deals</NavLink>
              </li>
              <li>
                <NavLink to="/whatsnew">What&apos;s New</NavLink>
              </li>
              <li>
                <NavLink to="/delivery">Delivery</NavLink>
              </li>
              <li>
                <InputGroup id="inputGroup" borderRadius={5} size="sm">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Search2Icon color="gray.600" />}
                  />
                  <Input
                    type="text"
                    placeholder="Search..."
                    border="1px solid #949494"
                  />
                  <InputRightAddon p={0} border="none">
                    <Button
                      size="sm"
                      borderLeftRadius={0}
                      borderRightRadius={3.3}
                      border="1px solid #949494"
                    >
                      Search
                    </Button>
                  </InputRightAddon>
                </InputGroup>
              </li>
            </ul>
            <div className="profileAndCart">
              <NavLink to="/account">
                <button className="navBtns">
                  <CgProfile />
                  Account
                </button>
              </NavLink>
              <NavLink to="/cart">
                <button className="navBtns">
                  <AiOutlineShoppingCart />
                  Cart
                </button>
              </NavLink>
            </div>
          </Box>
        </Box>
      </nav>
    </Box>
  );
};

export default Navbar;
