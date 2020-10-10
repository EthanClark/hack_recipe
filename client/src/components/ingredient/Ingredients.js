import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import IngredientForm from './IngredientForm';
import { IngredientConsumer } from '../../providers/IngredientProvider';
import { Link } from 'react-router-dom';

class Ingredients extends Component {
  componentDidMount() {
    const { recipe_id } = this.props.location.state
    this.props.getIngredients(recipe_id);
  }

  listAllIngredients = () => {
    const { recipe_id } = this.props.location.state
    if (this.props.ingredients) {
      return (
        <List divided relaxed>
          { this.props.ingredents.map(c =>
            <>
              <Link to={{
                pathname: `/ingredents/${c.id}`,
                state: { ...c, recipe_id: recipe_id }
              }}>
                {c.rName, servingSize, cookTime, instructions, difficulty}
              </Link>
              <br />
            </>
          )}
        </List>
      )
    } else {
      return (<h1>No Ingredients</h1>)
    }
  }

  render() {
    const { recipe_id, recipe_name, servingSize, cookTime, instructions, difficulty } = this.props.location.state
    return (
      <>
        <Header>{recipe_name} Ingredents</Header>
        <IngredientForm recipe_id={recipe_id} servingSize={servingSize} cookTime={cookTime} instructions={instructions} difficulty={difficulty} />
        { this.listAllIngredients()}
      </>
    )
  }
}

const ConnectedIngredents = (props) => (
  <IngredientConsumer>
    {
      value => (
        <Ingredients
          {...props}
          {...value}
        />
      )
    }
  </IngredientConsumer>
)

export default ConnectedIngredents; 