import React, { useEffect, useContext } from "react";
import { Container, Table, Header } from "semantic-ui-react";
import IMSStore from "../../app/stores/imsStore";
import { observer } from "mobx-react-lite";
import imsStore from "../../app/stores/imsStore";
import IAgency from "../../app/models/IAgency";
import { RootStoreContext } from "../../app/stores/rootStore";
export interface IListAgenciesProps {
  agencyType: string;
  agencyTypeTitle: string;
}

const ListAgencies = (props: any) => {
  // let ctx = useContext(imsStore);
  // let agencies: IAgency[] = [];

  const agencyType = props.match.params["AgencyType"];
  const ctx = useContext(RootStoreContext);
  const { agencies, loadAgencies } = ctx.imsStore;

  // useEffect(() => {
  //   const agencyType = props.match.params["AgencyType"];

  //   ctx.setAgency(agencyType);
  //   async function agencyLoad(){
  //     await ctx.loadAgencies();
  //     agencies = ctx.agencies;
  //   }
  //   agencyLoad();
  // }, 
  // [agencies]);

  
  useEffect(() => {
    loadAgencies(agencyType);
  }, [agencyType]);

  let html: JSX.Element;
  if (agencies.length > 0) {
    html = ( <Container>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Agency Name</Table.HeaderCell>
              <Table.HeaderCell>Telephone</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Is Active?</Table.HeaderCell>
              <Table.HeaderCell>Hourly Rate</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {agencies.map(a => {
              return (
                <Table.Row>
                  <Table.Cell>{a.name}</Table.Cell>
                  <Table.Cell>{a.telephone}</Table.Cell>
                  <Table.Cell>{a.email}</Table.Cell>
                  <Table.Cell>{a.isActive}</Table.Cell>
                  <Table.Cell>{a.pricePerHour}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Container>
    );
  } else {
    html = ( <Container>
        <Header as='h1'>
          Sorry, we couldn't find the agency type you're looking for.
        </Header>
      </Container>
    );
  }

  return <>{html}</>;
};

export default observer(ListAgencies);
