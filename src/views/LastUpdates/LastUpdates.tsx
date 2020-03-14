import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match } from 'react-router-dom';
import styled from 'styled-components';
import { fetchFeeds } from 'redux/duck/resourceDuck';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Animation from '../../components/Animation/Animation';
import Title from '../../components/Title/Title';
import { FeedbackDimensions } from 'styled-icons/material';

interface RouterParams {
  id: string;
}

interface UpdateProps {
  required: string;
  match?: match<RouterParams>;
}

export default function LastUpdate(props: UpdateProps) {
  // * Andreas: Her prøvde du å hente id fra URL, men URLen inneholdte ingen id.
  const id = props.match.params.id;
  const courseInfo = useSelector((state: ReduxState) => state.courseInfo);
  const feed = useSelector((state: ReduxState) => state.resource.feed);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function retrieveUpdate() {
      console.log('efe');
      await dispatch(fetchFeeds(id));
      await setLoading(false);
      console.log(feed);
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
      <h1> Siste oppdateringer i emnet {courseInfo.name} </h1>

      {/* //* Andreas: Her prøver du å vise en objects ved å wrappe den inni i et div. Det vil ikke fungere. En normal approach her er å bruke .map() */}

      {feed.map((feed: any, i: any) => (
        <FeedUpdate key={i}>
          <FeedSymbol>{feed.symbol}</FeedSymbol>
          <FeedMessage>{feed.message}</FeedMessage>
        </FeedUpdate>
      ))}
    </ContentLayout>
  );
}

const FeedUpdate = styled.div`
  border: 1px solid grey;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

const FeedSymbol = styled.div`
  margin-right: 10px;
  padding: 5px;
`;

const FeedMessage = styled.div`
  padding: 5px;
`;
