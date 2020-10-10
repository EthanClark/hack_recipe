import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import RecipesForm from './RecipesForm';
import Ingredients from '../../ingredient/Ingredients';
import Equipments from '../../equipment/Equipments';
import { RecipeConsumer } from '../../providers/RecipeProvider';
import { Link } from 'react-router-dom';

class Recipes extends Component {
  componentDidMount() {
    const { dish_id } = this.props.location.state
    this.props.getRecipes(dish_id);
  }

  listAllRecipes = () => {
    const { dish_id } = this.props.location.state
    if (this.props.recipes) {
      return ( 
        <List divided relaxed>
          { this.props.recipes.map(c =>
            <>
              <Link to={{
                pathname: `/recipes/${c.id}`,
                state: { ...c, dish_id: dish_id }
              }}>
                {c.dName}
              </Link>
              <br />
            </>
          )}
        </List>
      )
    } else {
      return (<h1>No Recipes</h1>)
    }
  }

  render() {
    const { dish_name, dish_id} = this.props.location.state
    return (
      <>
        <Header>{dish_name} Recipes</Header>
        <CommentForm dish_id={dish_id} />
        { this.listAllIngredients()}
      </>
    )
  }
}

const ConnectedRecipes = (props) => (
  <RecipesConsumer>
    {
      value => (
        <Recipes
          {...props}
          {...value}
        />
      )
    }
  </RecipesConsumer>
)

export default ConnectedRecipes; 