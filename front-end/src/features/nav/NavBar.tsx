import React from "react";
import { Menu, Container } from "semantic-ui-react";
import image from './logo.png'
export const NavBar = () => {
  return (
    <div >
    <Menu secondary fixed='top'>
   
      <Menu.Item>
        <a href="/"><img src={image} style={{width:"11.5em"}}/></a>
      </Menu.Item>

      <Menu.Item name="features">Apartments</Menu.Item>
      <Menu.Item name="sign-in">Sign-in</Menu.Item>

    </Menu>
    </div>

  );
};
