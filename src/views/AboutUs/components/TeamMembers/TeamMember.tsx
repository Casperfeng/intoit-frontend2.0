import React from 'react';
import styled from 'styled-components';

interface TeamMemberProps {
  name: string;
  linkedIn: string;
  imageIndex: number;
}

export default function TeamMember(props: TeamMemberProps) {
  const MemberContainer = styled.div`
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 10px;
  `;

  const MemberLink = styled.a`
    padding: 5px;
  `;

  const MemberImage = styled.img`
    margin: 10px auto;
    width: 260px;
    height: 260px;
    border-radius: 130px;
    object-fit: cover;
  `;

  const MemberName = styled.p`
    margin-top: 0;
    font-size: 24px;
  `;
  return (
    <MemberContainer>
      <MemberLink href={props.linkedIn} target='_blank'>
        <MemberImage
          src={require(`../../../../assets/members/${props.imageIndex}.jpg`)}
        />
      </MemberLink>
      <MemberName>{props.name}</MemberName>
    </MemberContainer>
  );
}
