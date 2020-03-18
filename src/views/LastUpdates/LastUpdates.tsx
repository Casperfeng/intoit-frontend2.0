import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match } from 'react-router-dom';
import styled from 'styled-components';
import { fetchFeeds } from 'redux/duck/resourceDuck';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Animation from '../../components/Animation/Animation';
import Title from '../../components/Title/Title';
import { Like } from '@styled-icons/boxicons-solid/Like';
import { Dislike } from '@styled-icons/boxicons-regular/Dislike';
import { EditOutline } from '@styled-icons/evaicons-outline/EditOutline';
import { Education } from '@styled-icons/zondicons/Education';
import { LightBulb } from '@styled-icons/heroicons-outline/LightBulb';
import { CommentAdd } from '@styled-icons/boxicons-solid/CommentAdd';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import DEFAULT_ICON from 'assets/icons/onlineTestIcon.svg';

interface RouterParams {
  id: string;
}

interface UpdateProps {
  required: string;
  code: string;
  match?: match<RouterParams>;
}

export default function LastUpdate(props: UpdateProps) {
  // * Andreas: Her prøvde du å hente id fra URL, men URLen inneholdte ingen id.
  const id = props.match.params.id;
  const courseInfo = useSelector((state: ReduxState) => state.courseInfo);
  const feed = useSelector((state: ReduxState) => state.resource.feed);
  const dispatch = useDispatch();
  const feedSymbol = symbolDeterminator(feed.symbol);
  const icon = feedSymbol.icon;

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
          <FeedSymbol>{icon}</FeedSymbol>
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

function symbolDeterminator(feedSymbol: string) {
  if (feedSymbol.toUpperCase().includes('UP')) {
    return { icon: Like };
  } else if (feedSymbol.toUpperCase().match('DOWN')) {
    return { icon: Dislike };
  } else if (feedSymbol.toUpperCase().match('PENCIL')) {
    return { icon: EditOutline };
  } else if (feedSymbol.toUpperCase().match('PLUS')) {
    return { icon: Education };
  } else if (feedSymbol.toUpperCase().match('HINT')) {
    return { icon: LightBulb };
  } else if (feedSymbol.toUpperCase().match('COMMENT')) {
    return { icon: CommentAdd };
  } else if (feedSymbol.toUpperCase().match('PLUS')) {
    return { icon: Plus };
  } else {
    return { icon: DEFAULT_ICON };
  }
}
