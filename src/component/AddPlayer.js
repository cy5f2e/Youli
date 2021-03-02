import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Segment } from 'semantic-ui-react';

const AddPlayer = ({ onClose }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const handleChange = (ev, { name, value }) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddPlayer = () => {
    const { name, points } = data;

    if (name === undefined || points === undefined) {
      return;
    }

    dispatch({
      type: 'PLAYER_ADD',
      payload: {
        name: name,
        points: points,
      },
    });

    setTimeout(() => onClose(), 500)
  };

  return (
    <Segment>
      <Form size="small">
        <Form.Input
          label="姓名"
          name="name"
          onChange={handleChange}
        />
        <Form.Input
          label="得分"
          name="points"
          onChange={handleChange}
        />
        <Form.Button
          content="送出"
          color="green"
          onClick={handleAddPlayer}
        />
      </Form>
    </Segment>
  );
};

export default AddPlayer;
