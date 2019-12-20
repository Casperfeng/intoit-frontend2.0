import React from 'react';
import styled from 'styled-components';
import TeamMember from './TeamMember';

const TeamMembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TeamTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

const TeamMembersContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function TeamMembers() {
  const teamMembersInfo = [
    { name: 'Casper Feng', linkedIn: 'casperfeng' },
    { name: 'Andreas Rikheim', linkedIn: 'andreas-rikheim' },
    { name: 'Håkon Størdal', linkedIn: 'håkons' },
    { name: 'Gulleik Olsen', linkedIn: 'gulleik-olsen' }
  ];

  const teamMembers = teamMembersInfo.map((teamMember, index) => (
    <TeamMember
      name={teamMember.name}
      linkedIn={`https://www.linkedin.com/in/${teamMember.linkedIn}/`}
      imageIndex={index}
      key={index + '3249083290842'}
    />
  ));
  return (
    <TeamMembersContainer>
      <TeamTitle>Teamet bak</TeamTitle>
      <TeamMembersContent>{teamMembers}</TeamMembersContent>
    </TeamMembersContainer>
  );
}
