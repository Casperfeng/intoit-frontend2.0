import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Title from '../../components/Title/Title';
import PrimaryButton, { SecondaryButton, DeleteButton } from 'components/Button/Button';
import { Typography, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { createCourse } from 'redux/duck/coursesDuck';
import { fetchSchools } from 'redux/duck/schoolDuck';
import { match } from 'react-router-dom';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@material-ui/core';
import { fetchCourse } from 'redux/duck/courseDetailedDuck';
import { editCourse } from 'redux/duck/coursesDuck';
import { goBack } from 'connected-react-router';
import { archiveCourse } from 'redux/duck/courseDetailedDuck';

interface Props {
  required: string;
  code: string;
  match?: match<{ id: string }>;
}

export default function CourseEditor(props: Props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, control } = useForm();
  const id = props.match.params.id;
  const isEdit = !!id;

  useEffect(() => {
    dispatch(fetchSchools());

    if (isEdit) {
      dispatch(fetchCourse(id));
    }
    // eslint-disable-next-line
  }, []);

  // Get data from server in editmode
  const courseInfo = useSelector((state: ReduxState) => state.courseInfo);
  const schools = useSelector((state: ReduxState) => state.schools);

  const onSubmit = data => {
    isEdit ? dispatch(editCourse(id, data)) : dispatch(createCourse(data));
  };

  const onDeleteCourseClick = () => {
    dispatch(archiveCourse(id));
  };

  const onCancel = () => {
    dispatch(goBack());
  };

  return (
    <ContentLayout width="40%">
      <Title margin="0 0 16px">{isEdit ? `REDIGER ${courseInfo.name}` : 'NYTT EMNE'}</Title>
      <p>Lag et nytt spørsmål og tjen +125XP</p>

      <InfoLabel variant="body2" color="textSecondary">
        Info
      </InfoLabel>

      <EditorForm onSubmit={handleSubmit(onSubmit)}>
        <FormControl style={{ minWidth: 300 }} error={Boolean(errors.name)}>
          <TextField
            name="name"
            error={!!errors.name}
            placeholder="Navn på emnet"
            variant="outlined"
            inputRef={register({ required: 'Navn er pålagt' })}
            defaultValue={isEdit ? courseInfo.name : ''}
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
            defaultValue={isEdit ? courseInfo.code : ''}
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
            defaultValue={isEdit ? courseInfo.school_id : ''}
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
            defaultValue={isEdit ? courseInfo.description : ''}
          />
          <FormHelperText>{errors.description && errors.description.message}</FormHelperText>
        </FormControl>

        <ActionButtons>
          <PrimaryButton size="large" type="submit" margin="0 16px 0 0">
            LAGRE
          </PrimaryButton>
          <SecondaryButton size="large" onClick={onCancel}>
            AVBRYT
          </SecondaryButton>
        </ActionButtons>
        {isEdit && (
          <DeleteButton size="large" onClick={onDeleteCourseClick}>
            ARKIVER FAG
          </DeleteButton>
        )}
      </EditorForm>
    </ContentLayout>
  );
}

const EditorForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const SchoolFormControl = styled(FormControl)`
  margin: 20px 0;
`;

const ActionButtons = styled.div`
  display: flex;
  margin: 16px 0;
`;

const InfoLabel = styled(Typography)`
  margin: 10px 0;
`;
