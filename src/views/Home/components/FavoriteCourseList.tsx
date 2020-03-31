import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites } from 'redux/duck/favoritesDuck';
import CourseCard from './CourseCard';
import devices from 'shared/media';

export default function FavoriteCourseList() {
  const favorites = useSelector((state: ReduxState) => state.favoriteCourses);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {favorites.length > 0 ? (
        <Wrapper>
          <h3>Dine favorittemner</h3>
          <Content>
            {favorites.map(course => (
              <CourseCard
                key={course.id}
                id={course.id}
                name={course.name}
                code={course.code}
                modified={course.modified}
                created={course.created}
                school={course.school}
                schoolId={course.school_id}
                numExercises={course.n_exercises}
                numTopics={course.n_topics}
                numFavoritesAllTime={course.n_favorites_all_time}
                numFavoritesThisSemester={course.n_favorites_this_semester}
                favorite={course.favorite}
                isArchived={course.is_archived}
                progression={course.progression}
                description={course.description}
                useImage={false}
              />
            ))}
          </Content>
        </Wrapper>
      ) : (
        <h3>Du har ingen favoriserte emner. Finn et emne i listen nedenfor eller lag et nytt!</h3>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  gap: 32px;
  margin-top: 16px;

  @media ${devices.desktopOnly} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${devices.laptopOnly} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.tabletOnly} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.mobileOnly} {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 24px;
  }
`;
