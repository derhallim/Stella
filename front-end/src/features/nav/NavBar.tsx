import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import image from "./logo.png";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <Menu borderless inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" exact>
            <img src={image} style={{ width: "4.5em" }} />
          </Menu.Item>
          <Menu.Item name="apartments" as={NavLink} to="/apartments">
            All Apartments
          </Menu.Item>
          <Menu.Item name="cms" as={NavLink} to="/cms">
            CMS
          </Menu.Item>
          <Menu.Item name="ims" as={NavLink} to="/ims">
            IMS
          </Menu.Item>
          <Menu.Item name="aboutus" as={NavLink} to="/aboutus">
            About Us
          </Menu.Item>

          {/* <Menu.Item name="create-apartment" as={NavLink} to='/createapartment'>Create Apartment</Menu.Item> */}

          <Menu.Item name="sign-in" position="right">
            <Button primary content="Chat" />
            <Button secondary content="Sign in" />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};
