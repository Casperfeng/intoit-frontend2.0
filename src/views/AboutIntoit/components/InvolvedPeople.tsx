import React from 'react';
import styled from 'styled-components/macro';
import devices from 'shared/media';

function InvolvedPeople() {
  return (
    <Wrapper>
      <h3>IDEHAVERNE BAK INTOIT</h3>
      <SupporterText>
        ALEX NGUYEN, ARNE BUI, JONAS LASKEMOEN, MIKAIL ARSLAN, RASMUS STENE, PHI THIEN HOANG, NIKOLINE BERGE, PEDER KLEV, HENRIK ORRE
      </SupporterText>
      <h3>INVOLVERT UTVIKLERE</h3>
      <SupporterText>GULLEIK OLSEN, HÅKON STØRDAL</SupporterText>
      <h3>TIDLIGERE MENTOR</h3>
      <SupporterText>ARNSTEIN JOHANSEN, JEANINE LILLENG</SupporterText>
      <h3>og alle som har støttet oss gjennom tidene:</h3>
      <OtherSupporterText>
        Sara Eline Gaasø, Iselin Bjørnsgaard Erikssen, Mia Edvardsen, Brage Marvik, Audun Eltvik, Odin Eilertsen, Tuong Luan Tran, Yuen Jing Luong.
        Marie Ilona Borg, Kenny Duy Luong, Markus Karlsen Tørnkvist, Uyen Dan Nguyen, Ninni Hoang, Siri Margrethe Gulliksrud, Ola Laskemoen, Jennie
        Vu, Magnus Flem Gjerstad, Alexandra Metallinou Log, Oscar Federl, Tor Andre Haugdahl, Stefan Bao Dinh Bui, Teresa Thao Tram Nguyen, My Thao
        Nguyen, Jimmy Chau, Peter Nguyen,Peter Aaser, Fredrik Dogger Schmidt, Thong Trong Ho, Paul Minh Hoang Huynh, Walid Faryabi og 14 andre anonyme
        støtter.
      </OtherSupporterText>
    </Wrapper>
  );
}

export default InvolvedPeople;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-style: italic;
    margin-bottom: 12px;
  }
`;

const SupporterText = styled.p`
  margin-bottom: 20px;

  @media ${devices.tabletOnly} {
    text-align: center;
  }
`;
const OtherSupporterText = styled.div`
  font-size: 12px;
  font-weight: 300;
  @media ${devices.tabletOnly} {
    text-align: center;
  }
`;
