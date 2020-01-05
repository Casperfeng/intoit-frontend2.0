import React from 'react';
import styled from 'styled-components';
import Animation from '../../../components/Animation/Animation';

export default function AboutIntoitText() {
  const TextContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
  `;

  const TextColumn = styled.div`
    width: 300px;
    font-size: 18px;
    text-align: justify;
    padding: 20px;
  `;
  return (
    <TextContainer>
      <TextColumn>
        Har du falt av forelesningene for lenge siden? Er du lei av tunge
        fagbøker? Kjenner du panikken spre seg når du tenker på eksamen? Lag
        faget ditt på Intoit, og spre ordet til de du kjenner. Slik kan du
        utfordre deg selv, få tilbakemeldinger og bli en del av et fellesskap.
        <br />
        <br />
        Gjennom å løse quizzer på nettsiden vår, kan du enkelt skaffe deg
        oversikt over fagene dine. Når du lager spørsmål selv, får du et enda
        større læringsutbytte, og bidrar til å gjøre det enklere for andre å
        lære.
      </TextColumn>
      <TextColumn>
        Med Intoit kan du quizze, lage egne spørsmål, diskutere spørsmålene dine
        i kommentarfeltet, og få tips til hvordan du kan forbedre dem. Du kan
        også hjelpe til å forbedre andres spørsmål. Intoit er en levende
        plattform der stoffet hele tiden blir forbedret og oppdatert. Slik gjør
        vi læring spennende, motiverende og sosialt.
        <br />
        <br />
        Akkurat nå har vi fag til NTNU og BI, men vi har som mål å inneholde
        godt og relevant innhold for alle skoler i Norge.
      </TextColumn>
      <TextColumn id={'urchin-container'}>
        For at dette skal skje, er vi avhengige av nettopp deg. Vi ønsker at
        brukerne våre skal legge inn sine egne fag, og bygge disse opp sammen.
        <Animation type={'urchin'} />
      </TextColumn>
    </TextContainer>
  );
}
