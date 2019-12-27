import React from 'react';
import Title from '../../components/Title/Title';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import AboutIntoitText from './components/AboutIntoitText';

export default function AboutIntoit() {
  return (
    <ContentLayout alignment={'center'}>
      <Title text={'Den beste måten å teste seg i pensum'} />
      <AboutIntoitText />
    </ContentLayout>
  );
}
