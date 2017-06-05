import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

const TestParticipationsInfoBlock = ({ participations }) => {
  let layout = [];
  if (Object.keys(participations).length == 0) {
    layout = <h4>No Participations yet.</h4>;
  } else {
    const rows = Object.keys(participations).map((participationKey, i) => {
      const participation = participations[participationKey];
      return <tr key={participation.id}>
        <td>{i}</td>
        <td>{participation.fullName}</td>
        <td>{participation.group}</td>
        <td>{participation.email}</td>
        <td>{participation.passed ? "Yes" : "No"}</td>
        <td>{participation.result || "-"}</td>
        <td><a className={"shmya" + (participation.passed ? " passed" : "")} href={participation.link || "#"}>{".." + participation.link.substr(participation.link.length - 6) }</a></td>
      </tr>;
    });
    layout = <Table striped>
      <thead>
        <tr key="tableHeader">
          <th>#</th>
          <th>Name</th>
          <th>Group</th>
          <th>E-Mail</th>
          <th>Passed</th>
          <th>Result</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>;
  }
  return <Row className="participations-info">
    <Col xs={12}>
      <h3>Participations</h3>
      {layout}
    </Col>
  </Row>
}

export default TestParticipationsInfoBlock;