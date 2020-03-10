import React from "react";
import { Menu, Icon, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export interface IMSNavProps{
  navOnClick: (agencyType: string) => void; 
}

export const IMSNav = (props: IMSNavProps) => {
  return (
    <Menu compact icon="labeled" vertical>
      <Menu.Item name="home"  as={NavLink} to='/ims/' exact onClick={()  => props.navOnClick('')}>
        <Icon name="home" />
        IMS Home
      </Menu.Item>
      <Menu.Item name="elevators" as={NavLink} to='/ims/elevators' onClick={()  => props.navOnClick('Elevators')}>
        <Icon name="hand pointer outline" />
        Elevator Maintenance
      </Menu.Item>
      <Menu.Item name="plumbing"  as={NavLink} to='/ims/plumbing' onClick={()  => props.navOnClick('Plumbing')}>
        <Icon name="theme" />
        Plumbing Agency
      </Menu.Item>
      <Menu.Item name="renovation"  as={NavLink} to='/ims/renovation' onClick={()  => props.navOnClick('Renovation')}>
        <Icon name="recycle" />
        Renovation Agency
      </Menu.Item>
      <Menu.Item name="cleaning"  as={NavLink} to='/ims/cleaning' onClick={()  => props.navOnClick('Cleaning')}>
        <Icon name="trash alternate" />
        Cleaning Agency
      </Menu.Item>
      <Menu.Item name="electricians"  as={NavLink} to='/ims/electricians' onClick={()  => props.navOnClick('Electricians')}>
        <Icon name="lightbulb outline" />
        Electricians
      </Menu.Item>
    </Menu>
  );
};
