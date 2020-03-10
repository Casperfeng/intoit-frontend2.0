import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import colors from 'shared/colors';
import TeamMembers from './TeamMembers';
import _shuffle from 'lodash/shuffle';
import devices from 'shared/media';

function CurrentTeamMembers() {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [shulffledTeamMembers, setShulffledTeamMembers] = useState();

  useEffect(() => {
    setShulffledTeamMembers(_shuffle(TeamMembers));
  }, []);

  const _onMouseOverMember = (index: number) => {
    setCurrentMemberIndex(index);
  };

  if (!shulffledTeamMembers) {
    return <></>;
  }

  return (
    <Wrapper>
      <Members>
        {shulffledTeamMembers.map((member, i) => {
          return (
            <MemberImage
              hover={currentMemberIndex === i ? true : false}
              key={i}
              src={require(`assets/members/${member.imgSrc}.jpg`)}
              onMouseOver={() => _onMouseOverMember(i)}
            />
          );
        })}
      </Members>

      <MemberText>
        <strong>{shulffledTeamMembers[currentMemberIndex].name}</strong> {shulffledTeamMembers[currentMemberIndex].text}
      </MemberText>
    </Wrapper>
  );
}

export default CurrentTeamMembers;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Members = styled.div`
  display: flex;

  @media ${devices.tabletOnly} {
    display: flex;
    justify-content: center;
  }
`;

const MemberImage = styled.img`
  margin-right: 32px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  box-sizing: border-box;

  @media ${devices.tabletOnly} {
    margin-right: 16px;
    width: 40px;
    height: 40px;
  }

  ${(props: { hover: boolean }) => props.hover && `border: 2px solid ${colors.default}`}
`;

const MemberText = styled.p`
  margin-top: 16px;
  @media ${devices.tabletOnly} {
    text-align: center;
  }
`;
