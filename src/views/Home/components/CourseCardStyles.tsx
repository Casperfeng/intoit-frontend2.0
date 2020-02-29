import { Card } from '@material-ui/core';
import styled from 'styled-components/macro';
import colors from 'shared/colors';
import devices from 'shared/media';

export const CourseIllustration = styled.img`
  max-width: 70%;
  max-height: 125px;
  object-fit: contain;
  margin: auto;

  @media ${devices.mobileOnly} {
    display: none;
  }
`;

const CourseCardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 270px;
  border: 0;
  padding: 16px;
  ${(props: { color: string }) => `
    border: 2px solid ${props.color};
  `}

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.025) translateY(-2px);
  }

  @media ${devices.mobileOnly} {
    min-height: 50px;
  }
`;

export const CourseName = styled.p`
  font-weight: 500;
  font-size: 20px;
  text-decoration: capitalize;
  margin-bottom: 7px;
`;

export const SchoolCode = styled.p`
  font-size: 12px;
  text-decoration: uppercase;
`;

export const StyledAccessTime = styled.div`
  color: ${colors.grey};
  display: flex;
  align-items: center;

  p {
    margin-left: 5px;
    margin-top: 3px;
  }
`;

export const StyledFavorite = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 2px;
    margin-top: 2px;
    font-weight: 500;
  }

  ${(props: { color: string }) => `
    color: ${props.color};
  `}
`;

export const CourseStatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export default CourseCardWrapper;
