import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'semantic-ui-react';
import { PLAYER_DELETE } from '../actions/PlayerActions';
import AddPlayer from './AddPlayer';

const Player = () => {
  const dispatch = useDispatch();
  const allPlayers = useSelector((state) => state.players);
  const [add, setAdd] = useState(false);

  function handleDelete(id) {
    dispatch({
      type: PLAYER_DELETE,
      payload: {
        id: id,
      },
    });
  }

  function handleClose() {
    setAdd(false);
  }

  return (
    <>
      <Button
        content="Add Player Score"
        primary
        onClick={() => setAdd(!add)}
      />
      <br />
      {add && <AddPlayer onClose={handleClose} />}
      {allPlayers && (
        <>
          <Table celled textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell content="ID" negative />
                <Table.HeaderCell content="Name" />
                <Table.HeaderCell content="PTS" />
                <Table.HeaderCell content="Action" />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {allPlayers.map((d) => (
                <Table.Row key={`${d.id}-${d.name}`}>
                  <Table.Cell content={d.id} />
                  <Table.Cell content={d.name} />
                  <Table.Cell content={d.points} />
                  <Table.Cell>
                    <Button
                      content="Delete"
                      color="red"
                      onClick={() => handleDelete(d.id)}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      )}
    </>
  );
};

export default Player;
