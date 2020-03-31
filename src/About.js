import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const About = () => (
  <GridWrapper>
    <h2>About Page</h2>
    <p>We are web developers based in the south.</p>
    <p>
      This site exists as an opportunity to combine two of our favorite things:
      coding and food.
    </p>
    <p>
      Next time you're in the mood for a new diet related recipe, I hope you think of this!
    </p>
    <p>Stay tuned for new features!</p>
  </GridWrapper>
)