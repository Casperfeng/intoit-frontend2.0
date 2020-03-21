import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopics } from 'redux/duck/topicDuck';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SelectTopic() {
  const id = useParams();
  const [topic, setTopic] = useState('');
  const topics = useSelector((state: ReduxState) => state.topics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopics(id));
    // eslint-disable-next-line
  }, []);

  const handleChange = event => {
    setTopic(event.target.value);
  };

  return (
    <FormControl fullWidth required={true}>
      <InputLabel>Velg tema</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" value={topic} onChange={handleChange}>
        {topics.map(topic => (
          <MenuItem key={topic.id} value={topic.id}>
            {topic.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
