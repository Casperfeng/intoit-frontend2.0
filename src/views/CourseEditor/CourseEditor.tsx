import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Title from '../../components/Title/Title';
import PrimaryButton from 'components/Button/Button';
import { Typography, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { createCourse } from 'redux/duck/coursesDuck';
import { fetchSchools } from 'redux/duck/schoolDuck';

import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@material-ui/core';

interface Props {
  required: string;
  code: string;
}

export default function CourseEditor(props: Props) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const { register, handleSubmit, watch, errors, control } = useForm();

  useEffect(() => {
    dispatch(fetchSchools());
    // eslint-disable-next-line
  }, []);

  const schools = useSelector((state: ReduxState) => state.schools);

  const onSubmit = data => {
    console.log('data :', data);
    dispatch(createCourse(data));
  };

  return (
    <ContentLayout width="40%">
      <Title margin="0 0 16px">NYTT EMNE</Title>
      <p>Lag et nytt spørsmål og tjen +125XP</p>

      <InfoLabel variant="body2" color="textSecondary">
        Info
      </InfoLabel>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl style={{ minWidth: 300 }} error={Boolean(errors.name)}>
          <TextField
            name="name"
            error={!!errors.name}
            placeholder="Navn på emnet"
            variant="outlined"
            inputRef={register({ required: 'Navn er pålagt' })}
          />
          <FormHelperText>{errors.name && errors.name.message}</FormHelperText>
        </FormControl>

        <FormControl style={{ minWidth: 300 }} error={Boolean(errors.code)}>
          <TextField
            placeholder="Emnekode"
            name="code"
            error={!!errors.code}
            variant="outlined"
            inputRef={register({ required: 'Kode er pålagt' })}
          />
          <FormHelperText>{errors.code && errors.code.message}</FormHelperText>
        </FormControl>

        <SchoolFormControl style={{ minWidth: 300 }} error={Boolean(errors.school_id)}>
          <InputLabel id="school-selector">VELG SKOLE</InputLabel>
          <Controller
            as={
              <Select>
                <MenuItem value="">Ingen</MenuItem>
                {schools.map(school => (
                  <MenuItem key={school.id} value={school.id}>
                    {school.name}
                  </MenuItem>
                ))}
              </Select>
            }
            name="school_id"
            rules={{ required: 'this is required' }}
            control={control}
            defaultValue=""
          />
          <FormHelperText>{errors.school_id && errors.school_id.message}</FormHelperText>
        </SchoolFormControl>

        <FormControl style={{ minWidth: 300 }} error={Boolean(errors.description)}>
          <TextField
            multiline
            rows="4"
            name="description"
            error={!!errors.description}
            placeholder={'Beskrivelse av emnet'}
            variant="outlined"
            inputRef={register({ required: 'Beskrivelse er pålagt' })}
          />
          <FormHelperText>{errors.description && errors.description.message}</FormHelperText>
        </FormControl>

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

const SchoolFormControl = styled(FormControl)`
  margin-bottom: 20px;
`;

const ActionButtons = styled.div`
  display: flex;
  margin: 8px 0 32px;
`;

const InfoLabel = styled(Typography)`
  margin: 10px 0;
`;
