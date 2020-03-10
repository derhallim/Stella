import React, { useEffect, useContext } from "react";
import { Container, Table, Header } from "semantic-ui-react";
import IMSStore from "../../app/stores/imsStore";
import { observer } from "mobx-react-lite";
export interface IListAgenciesProps {
  agencyType: string;
  agencyTypeTitle: string;
}

const ListAgencies = (props: IListAgenciesProps) => {
  const IMSContext = useContext(IMSStore);

  useEffect(() => {
    IMSContext.loadAgencies();
  }, [IMSContext]);

  return (
    <Container>
      <Header size="large">{props.agencyTypeTitle}</Header>
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
          {IMSContext.agencies.map(a => {
            <Table.Row>
              <Table.Cell>{a.name}</Table.Cell>
              <Table.Cell>{a.telephone}</Table.Cell>
              <Table.Cell>{a.email}</Table.Cell>
              <Table.Cell>{a.isActive}</Table.Cell>
              <Table.Cell>{a.pricePerHour}</Table.Cell>
            </Table.Row>;
          })}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default observer(ListAgencies);
