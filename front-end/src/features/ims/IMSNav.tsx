import React from "react";
import { Menu, Icon, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const IMSNav = () => {
  return (
    <Menu compact icon="labeled" vertical>
      <Menu.Item name="gamepad"  as={NavLink} to='/ims/' exact>
        <Icon name="home" />
        IMS Home
      </Menu.Item>
      <Menu.Item name="video camera" as={NavLink} to='/ims/elevators'>
        <Icon name="hand pointer outline" />
        Elevator Maintenance
      </Menu.Item>
      <Menu.Item name="video play"  as={NavLink} to='/ims/plumbing'>
        <Icon name="theme" />
        Plumping Agency
      </Menu.Item>
      <Menu.Item name="video play"  as={NavLink} to='/ims/renovation'>
        <Icon name="recycle" />
        Renovation Agency
      </Menu.Item>
      <Menu.Item name="video play"  as={NavLink} to='/ims/cleaning'>
        <Icon name="trash alternate" />
        Cleaning Agency
      </Menu.Item>
      <Menu.Item name="video play"  as={NavLink} to='/ims/electricians'>
        <Icon name="lightbulb outline" />
        Electrians
      </Menu.Item>
    </Menu>
  );
};
