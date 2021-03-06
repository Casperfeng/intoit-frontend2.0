import React, { useState } from 'react';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import Header from './components/Header';
import SelectTopic from './components/SelectTopic';
import FlashcardTabPanel from './components/FlashcardTabPanel';
import MultipleChoiceTabPanel from './components/MultipleChoiceTabPanel';
import { Grid, Tabs, Tab } from '@material-ui/core';

export default function CreateQuestion(props) {
  const [tab, setTab] = useState(0);
  const [topicId, setTopicId] = useState("");

  const handleChange = (event, tabValue) => {
    setTab(tabValue);
  };


  const ChosenTab = () => {
    if (tab === 0) {
        return <MultipleChoiceTabPanel topicId={topicId} value={tab} index={0} />
    }
    return <FlashcardTabPanel value={tab} index={1} />;
  };
  
  return (
    <ContentLayout>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={10}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={10}>
          <SelectTopic setTopicId={(id: string) => setTopicId(id)} />
        </Grid>
        {topicId &&
          <>
            <Grid item xs={12} sm={10}>
              <Tabs value={tab} onChange={handleChange} variant="fullWidth" indicatorColor="primary" textColor="primary">
                <Tab label="Flervalg" />
                <Tab label="Flashcards" />
              </Tabs>
            </Grid>
            <Grid item xs={12} sm={10}>
              <ChosenTab />
            </Grid>
          </>
        }
      </Grid> 
    </ContentLayout>
  );
}
