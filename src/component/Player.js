import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'semantic-ui-react';
import AddPlayer from './AddPlayer';

const Player = () => {
  const dispatch = useDispatch();
  const allPlayers = useSelector((state) => state.players);
  const [add, setAdd] = useState(false);

  const handleDelete = (id) => {
    dispatch({
      type: 'PLAYER_DELETE',
      payload: {
        id: id,
      },
    });
  };

  const handleClose = () => {
    setAdd(false);
  };

  return (
    <>
      <Button
        content="增加球員成績"
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
                <Table.HeaderCell content="姓名" />
                <Table.HeaderCell content="PTS" />
                <Table.HeaderCell content="操作" />
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
                      content="刪除"
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
