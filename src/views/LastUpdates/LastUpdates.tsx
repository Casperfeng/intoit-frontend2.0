import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match } from 'react-router-dom';
import styled from 'styled-components';
import { fetchFeeds } from 'redux/duck/resourceDuck';
import StyledLink from 'components/StyledLink/StyledLink';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Animation from '../../components/Animation/Animation';
import Title from '../../components/Title/Title';

interface RouterParams {
  id: string;
}

interface UpdateProps {
  required: string;
  match?: match<RouterParams>;
}

export default function LastUpdate(props: UpdateProps) {
  const id = props.match.params.id;
  const feed = useSelector((state: ReduxState) => state.resource.feed);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function retrieveUpdate() {
      await dispatch(fetchFeeds(id));
      setLoading(false);
    }
    retrieveUpdate();
  }, []);

  return isLoading ? (
    <ContentLayout alignment={'center'}>
      <Title>Laster inn oppdateringer...</Title>
      <Animation type={'seagull'} />
    </ContentLayout>
  ) : (
    <ContentLayout alignment={'center'}>
      <h1> Siste oppdateringer i emnet ({feed.name}) </h1>
      <FeedUpdate> ({feed})</FeedUpdate>
    </ContentLayout>
  );
}

const FeedUpdate = styled.div`
  border: 1px solid grey;
  margin: 15px;
  padding: 10px;
`;
