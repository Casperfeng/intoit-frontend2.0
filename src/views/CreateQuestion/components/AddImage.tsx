import React, { useState } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { Add } from '@styled-icons/material';

export default function AddImage({ title }) {
  const [file, setFile] = useState(null);

  const handleAddImage = event => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {/* TODO: Add preview of uploaded image */}
        <input accept="image/*" style={{ display: 'none' }} id="upload-file" type="file" onChange={handleAddImage} />
        <label htmlFor="upload-file">
          <Button fullWidth variant="outlined" component="span" color="primary" startIcon={<Add size={22} />}>
            Legg til bilde
          </Button>
        </label>
      </Grid>
    </Grid>
  );
}
