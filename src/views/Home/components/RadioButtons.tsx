import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import Chip from '@material-ui/core/Chip';

export default function RadioButtons() {
  return (
    <div>
      <Chip label="Alle" />
      <Chip label="NTNU" />
      <Chip label="BI" />
      <Chip label="UIO" />
      <Chip label="Andre" />
    </div>
  );
}
