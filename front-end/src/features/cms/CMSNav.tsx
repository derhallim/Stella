import React from "react";
import {  Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const CMSNav = () => {
  return (
    <Menu compact icon="labeled" vertical>
      <Menu.Item name="home" as={NavLink} to="/cms/" exact>
        <Icon name="home" />
        CMS Home
      </Menu.Item>
      <Menu.Item name="create-apartment" as={NavLink} to="/cms/create-apartment">
        <Icon name="add" />
        Add Apartment
      </Menu.Item>
      <Menu.Item name="view-all-apartments" as={NavLink} to="/cms/view-all-apartments">
        <Icon name="list ul" />
        View All Apartments
      </Menu.Item>
    </Menu>
  );
};

export default CMSNav;
