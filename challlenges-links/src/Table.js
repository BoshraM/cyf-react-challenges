import React from 'react';
import Table from 'react-bootstrap/Table';

function TableLink(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Challenges links</th>
        </tr>
      </thead>
      <tbody>
        {props.Links.map(link => <tr>
          <td><a href={link.url} target="_blank" rel="noreferrer">{link.title}</a></td> 
        </tr> )}    
      </tbody>
    </Table>
  );
}

export default TableLink;