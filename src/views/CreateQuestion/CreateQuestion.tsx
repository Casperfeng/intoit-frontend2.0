import React, { useState } from 'react';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import Header from './components/Header';
import SubmitForm from './components/SubmitForm';
import SelectTopic from './components/SelectTopic';
import QuestionInput from './components/QuestionInput';
import FlashcardTabPanel from './components/FlashcardTabPanel';
import MultipleChoiceTabPanel from './components/MultipleChoiceTabPanel';
import AddImage from './components/AddImage';
import Optional from './components/Optional';
import { Grid, Tabs, Tab } from '@material-ui/core';

export default function CreateQuestion(props) {
  const [tab, setTab] = useState(0);

  const handleChange = (event, tabValue) => {
    setTab(tabValue);
  };

  return (
    <ContentLayout>
      <Grid container direction="column" justify="center" alignItems="stretch" spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} md={5}>
          <SelectTopic />
        </Grid>
        <Grid item xs={12} md={5}>
          <Tabs value={tab} onChange={handleChange} variant="fullWidth">
            <Tab label="Flervalg" />
            <Tab label="Flashcards" />
          </Tabs>
        </Grid>
        <Grid item xs={12} md={5}>
          <QuestionInput title="Spørsmål" />
          <AddImage title="Bilde til ditt spørsmål" />
          <MultipleChoiceTabPanel value={tab} index={0} />
          <FlashcardTabPanel value={tab} index={1} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Optional />
        </Grid>
        <Grid item xs={12} md={5}>
          <SubmitForm />
        </Grid>
      </Grid>
    </ContentLayout>
  );
}