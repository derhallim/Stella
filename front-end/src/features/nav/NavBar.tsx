import React, { useContext } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import image from "./logo.png";
import { NavLink } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";
export const NavBar = () => {
  const rootStore = useContext(RootStoreContext)
  const {isLoggedIn, user} = rootStore.userStore;

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
       <Menu.Item name="cms" as={NavLink} to="/cms" >
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
            {user ? <span>Welcome {user.displayName}</span> : <Button secondary content="Sign in" as={NavLink} to='/login' />
}  
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};
