import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Segment } from 'semantic-ui-react';
import { PLAYER_ADD } from '../actions/PlayerActions';

const AddPlayer = ({ onClose }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  function handleChange(ev, { name, value }) {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAddPlayer() {
    const { name, points } = data;

    if (name === undefined || points === undefined) {
      return;
    }

    dispatch({
      type: PLAYER_ADD,
      payload: {
        name: name,
        points: points,
      },
    });

    setTimeout(() => onClose(), 500)
  }

  return (
    <Segment>
      <Form size="small">
        <Form.Input
          label="Name"
          name="name"
          onChange={handleChange}
        />
        <Form.Input
          label="Score"
          name="points"
          onChange={handleChange}
        />
        <Form.Button
          content="Submit"
          color="green"
          onClick={handleAddPlayer}
        />
      </Form>
    </Segment>
  );
};

export default AddPlayer;
