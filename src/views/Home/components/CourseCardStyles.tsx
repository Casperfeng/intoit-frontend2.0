import { Card, CardActionArea, CardActions } from '@material-ui/core';
import styled from 'styled-components/macro';
import colors from 'shared/colors';
import devices from 'shared/media';

export const CourseIllustration = styled.img`
  max-height: 90px;
  object-fit: contain;
  margin-bottom: 16px;
  @media ${devices.mobileOnly} {
    display: none;
  }
`;

const CourseCardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0;
  ${(props: { color: string; minheight: string }) => `
    border: 2px solid ${props.color};
    min-height: ${props.minheight}
  `}

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.025) translateY(-2px);
  }

  @media ${devices.mobileOnly} {
    min-height: 50px;
  }
`;

export const StyledCardActionArea = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  padding: 16px;
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

export const CourseStatus = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export default CourseCardWrapper;
