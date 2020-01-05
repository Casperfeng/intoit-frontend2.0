import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../../../components/ContentLayout/ContentLayout';
import Quizmaster from '../../../assets/badges/Quizmaster.png';
import Squid from '../../../assets/badges/7.png';

const TextContainer = styled.div`
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
  padding: 30px;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  margin: 10px;
  background-color: white;
  @media (max-width: 990px) {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
`;

const TitleBadge = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 556px) {
    width: 30px;
    height: 30px;
  }
`;

const TextTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  flex-wrap: nowrap;
  font-size: 36px;
  font-weight: 400;
  padding: 10px;
  margin: 0px;
  @media (max-width: 556px) {
    font-size: 20px;
  }
`;

const TextParagraph = styled.p`
  margin: 5px;
  font-size: 20px;
  @media (max-width: 556px) {
    font-size: 14px;
  }
`;

export default function WelcomeText() {
  return (
    <ContentLayout>
      <TextContainer>
        <TextTitle>
          <TitleBadge src={Quizmaster} />
          Velkommen til Intoit!
          <TitleBadge src={Squid} />
        </TextTitle>
        <TextParagraph>
          <b>Registrer deg med Facebook</b> eller logg inn som gjest for å dykke
          inn i pensum!
        </TextParagraph>
        <TextParagraph>
          <b>Quiz deg god</b>, lær av å skape egne spørsmål og bli klassens
          Einstein.
        </TextParagraph>
        <TextParagraph>
          <b>Spør om det du lurer på og diskuter med andre</b>. Intoit gjør
          læring sosialt.
        </TextParagraph>
        <TextParagraph>
          <b>
            Tjen poeng når du quizer, lager spørsmål og bidrar til
            Intoit-samfunnet.
          </b>{' '}
          På denne måten går du opp i nivåer og får mer påvirkningskraft.
        </TextParagraph>
      </TextContainer>
    </ContentLayout>
  );
}
