import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match } from 'react-router-dom';
import styled from 'styled-components/macro';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Animation from '../../components/Animation/Animation';
import Title from '../../components/Title/Title';
import PrimaryButton from 'components/Button/Button';
import { Grid, Typography, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';

interface Props {
  required: string;
  code: string;
}

// TODO: Add react-hooks-form
// https://medium.com/codefully-io/react-forms-validation-with-formik-and-material-ui-1adf0c1cae5c
// https://codesandbox.io/s/0fib6
// https://github.com/mui-org/material-ui/issues/18269
// https://github.com/NewOldMax/react-material-ui-form-validator

export default function CourseEditor(props: Props) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const { register, handleSubmit, watch, errors } = useForm();

  // useEffect(() => {
  //     async function retrieveUpdate() {
  //         await dispatch(fetchFeeds(id));
  //         await setLoading(false);
  //     }
  //     retrieveUpdate();
  //     // eslint-disable-next-line
  // }, []);

  const handleExplanationChange = event => {
    // setExplanationValue(event.target.value);
  };

  const onSubmit = () => {
    console.log('submitting');
  };

  return (
    <ContentLayout width="40%">
      <Title margin="0 0 16px">NYTT EMNE</Title>
      <p>Lag et nytt spørsmål og tjen +125XP</p>
      <InfoLabel variant="body2" color="textSecondary">
        Info
      </InfoLabel>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="example" defaultValue="test" ref={register} />

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input name="exampleRequired" ref={register({ required: true })} /> */}
        {/* errors will return when field validation fails  */}

        {/* <input type="submit" /> */}
        <TextField
          name="name"
          error={!!errors.name}
          placeholder="Navn på emnet"
          variant="outlined"
          inputRef={register({ required: true })}
          onChange={handleExplanationChange}
        />
        {/* {errors.nameRequired && <span>This field is required</span>} */}
        {/* <TextField value={''} placeholder="Emnekode" variant="outlined" onChange={handleExplanationChange} />
        <TextField multiline rows="4" value="" placeholder={'Beskrivelse av emnet'} variant="outlined" onChange={handleExplanationChange} /> */}
        <ActionButtons>
          <PrimaryButton size="large" type="submit" margin="0 16px 0 0">
            LAGRE
          </PrimaryButton>
          <PrimaryButton size="large">AVBRYT</PrimaryButton>
        </ActionButtons>
      </form>
    </ContentLayout>
  );
}

const ActionButtons = styled.div`
  display: flex;
  margin: 8px 0 32px;
`;

const InfoLabel = styled(Typography)`
  margin: 10px 0;
`;
