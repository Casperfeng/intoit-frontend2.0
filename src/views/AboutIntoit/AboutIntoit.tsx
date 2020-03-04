import React from 'react';
import Title from '../../components/Title/Title';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import styled from 'styled-components/macro';
import devices from 'shared/media';
import YouTube from 'react-youtube';
import { introText, bodyText } from './components/AboutIntoitText';
import CurrentTeamMembers from './components/CurrentTeamMembers';
import InvolvedPeople from './components/InvolvedPeople';

export default function AboutIntoit() {
  return (
    <ContentLayout maxWidth="1024px">
      <Wrapper>
        <Title>Den beste måten å teste seg i pensum </Title>
        <p>{introText}</p>
        <YoutubeContainer>
          <YouTube className="youtube-video" videoId="eXl8k6ZJm1A" />
        </YoutubeContainer>
        <p>{bodyText}</p>
        <DivideLine />
        <BottomContainer>
          <CurrentTeam>
            <h2>VIDEREUTVIKLES AV</h2>
            <CurrentTeamMembers />
          </CurrentTeam>
          <DivideLine hideOnDesktop />

          <ThanksNote>
            <h2>EN STOR TAKK TIL...</h2>
            <InvolvedPeople />
          </ThanksNote>
        </BottomContainer>
      </Wrapper>
    </ContentLayout>
  );
}

const Wrapper = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  place-content: center;
  text-align: start;

  p {
    margin-bottom: 20px;
  }

  @media ${devices.tabletOnly} {
    h2,
    h3 {
      text-align: center;
    }
  }
`;

const DivideLine = styled.hr`
  margin: 36px auto;
  width: 40%;

  ${(props: { hideOnDesktop: boolean }) => props.hideOnDesktop && `@media ${devices.laptop} { display:none; }`}
`;

const CurrentTeam = styled.div`
  flex: 1;
  @media ${devices.tablet} {
    margin-right: 32px;
  }
`;

const ThanksNote = styled.div`
  flex: 1;
  @media ${devices.tablet} {
    margin-right: 32px;
  }
`;

const YoutubeContainer = styled.div`
  margin: 4px 0 24px;
  align-self: center;

  @media ${devices.laptopOnly} {
    iframe {
      width: 640px !important;
      height: 360px;
    }
  }

  @media ${devices.tabletOnly} {
    iframe {
      width: 480px !important;
      height: 270px;
    }
  }

  @media ${devices.mobileOnly} {
    iframe {
      width: 320px !important;
      height: 180px;
    }
  }
`;

const BottomContainer = styled.div`
  display: flex;
  width: 100%;

  @media ${devices.laptopOnly} {
    flex-direction: column;
  }
`;
