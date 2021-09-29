import React from 'react';
import BrowseContainer from '../containers/browse';
import useContent from '../hooks/use-content';
import selectionFilter from '../utils/selection-filter';

const Browse = () => {
  //series and films
  const { series } = useContent('series');
  const { films } = useContent('films');
  //slides
  const slides = selectionFilter({ series, films });
  //pass to browse container

  return (
    <BrowseContainer slides={slides} />

  );
};

export default Browse;
