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
export const Home = (props) => (
  <GridWrapper>
    <p>This is a paragraph and I am writing on the home page</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
  </GridWrapper>
)


const Form = props => {
  return (
    <div className="card-panel row">
      <form onSubmit={props.getRecipe} className="container row">
        <div className="input-field col s10">
          <i className="material-icons prefix">restaurant_menu</i>
          <input type="text" id="recipe" name="recipe" />
          <label htmlFor="recipe">DISH NAME OR INGREDIENT</label>
        </div>
        <button type="submit" className="btn btn-large green col s2">
          <i className="material-icons">search</i>
        </button>
      </form>
    </div>
  );
};

export default Form;