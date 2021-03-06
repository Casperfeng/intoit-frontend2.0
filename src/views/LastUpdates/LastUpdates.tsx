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
import { QuestionMark } from '@styled-icons/boxicons-regular/QuestionMark';

interface RouterParams {
  id: string;
}

interface UpdateProps {
  required: string;
  code: string;
  match?: match<RouterParams>;
}

export default function LastUpdate(props: UpdateProps) {
  const id = props.match.params.id;
  const courseInfo = useSelector((state: ReduxState) => state.courseInfo);
  const feed = useSelector((state: ReduxState) => state.resource.feed);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function retrieveUpdate() {
      await dispatch(fetchFeeds(id));
      await setLoading(false);
    }
    retrieveUpdate();
    // eslint-disable-next-line
  }, []);

  return isLoading ? (
    <ContentLayout alignment={'center'}>
      <Title>Laster inn oppdateringer...</Title>
      <Animation type={'seagull'} />
    </ContentLayout>
  ) : (
      <ContentLayout alignment={'center'}>
        <h1> Siste oppdateringer i emnet {courseInfo.name} </h1>

        {feed.map((element: any, i: number) => {
          return (
            <FeedUpdate key={i}>
              <FeedSymbol>{symbolDeterminator(element.symbol)}</FeedSymbol>
              <FeedMessage>{element.message}</FeedMessage>
            </FeedUpdate>
          );
        })}
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
  const iconSize = 24;

  if (feedSymbol.toUpperCase().includes('UP')) {
    return <Like size={iconSize} />;
  } else if (feedSymbol.toUpperCase().match('DOWN')) {
    return <Dislike size={iconSize} />;
  } else if (feedSymbol.toUpperCase().match('PENCIL')) {
    return <EditOutline size={iconSize} />;
  } else if (feedSymbol.toUpperCase().match('LISTS')) {
    return <Education size={iconSize} />;
  } else if (feedSymbol.toUpperCase().match('HINT')) {
    return <LightBulb size={iconSize} />;
  } else if (feedSymbol.toUpperCase().match('COMMENT')) {
    return <CommentAdd size={iconSize} />;
  } else if (feedSymbol.toUpperCase().match('PLUS')) {
    return <Plus size={iconSize} />;
  } else {
    return <QuestionMark size={iconSize} />;
  }
}
