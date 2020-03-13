import React from "react";
import { Menu, Icon, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const IMSNav = () => {
  return (
    <Menu compact icon="labeled" vertical>
      <Menu.Item name="home" as={NavLink} to="/ims/" exact>
        <Icon name="home" />
        IMS Home
      </Menu.Item>

      <Menu.Item name="elevators" as={NavLink} to="/ims/agencies/elevators">
        <Icon name="hand pointer outline" />
        Elevator Maintenance
      </Menu.Item>

      <Menu.Item name="plumbing" as={NavLink} to="/ims/agencies/plumbing">
        <Icon name="theme" />
        Plumbing Agency
      </Menu.Item>

      <Menu.Item name="renovation" as={NavLink} to="/ims/agencies/renovation">
        <Icon name="recycle" />
        Renovation Agency
      </Menu.Item>

      <Menu.Item name="cleaning" as={NavLink} to="/ims/agencies/cleaning">
        <Icon name="trash alternate" />
        Cleaning Agency
      </Menu.Item>

      <Menu.Item
        name="electricians"
        as={NavLink}
        to="/ims/agencies/electricians"
      >
        <Icon name="lightbulb outline" />
        Electricians
      </Menu.Item>
    </Menu>
  );
};
