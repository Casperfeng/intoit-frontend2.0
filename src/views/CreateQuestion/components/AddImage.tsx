import React, { useState } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { Add, Clear } from '@styled-icons/material';
import styled from 'styled-components/macro';

export default function AddImage({ title }) {
  const [file, setFile] = useState({
    name: null,
  });
  const [url, setUrl] = useState('');

  const handleAddImage = event => {
    setFile(event.target.files[0]);
    setUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleRemoveImage = () => {
    setFile({ name: null });
    setUrl('');
  };

  const ImagePreview = () => {
    if (file) {
      return (
        <Grid item xs={12}>
          <CustomImg src={url} alt={'Uploaded'} />
          <Typography>{file.name}</Typography>
        </Grid>
      );
    }
    return <div />;
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {file && file.name ? (
          <div>
            <ImagePreview />
            <Button fullWidth variant="outlined" component="span" color="secondary" onClick={handleRemoveImage} startIcon={<Clear size={22} />}>
              Fjern bilde
            </Button>
          </div>
        ) : (
          <div>
            <input accept="image/*" style={{ display: 'none' }} id="upload-file" type="file" onChange={handleAddImage} />
            <label htmlFor="upload-file">
              <Button fullWidth variant="outlined" component="span" color="primary" startIcon={<Add size={22} />}>
                Legg til bilde
              </Button>
            </label>
          </div>
        )}
      </Grid>
    </Grid>
  );
}

const CustomImg = styled.img`
  border-radius: 4px;
  width: 100%;
`;
