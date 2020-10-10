import React from 'react';
import { List, Button } from 'semantic-ui-react';
import { IngredientConsumer } from '../../providers/IngredientProvider';
const Ingredient = ({ location }) => (
  <IngredientConsumer>
    { value => (
      <List.Item>
        <List.Content>
          <List.Header>{location.state.iName}</List.Header>
          <List.Header>{location.state.amount}</List.Header>
          <List.Description>{location.state.measurement}</List.Description>
          <List.Description>
            <Button 
              color='red' 
              onClick={
                () => value.deleteIngredient(location.state.recipe_id, location.state.id)
              }
              >
              Delete
            </Button>
          </List.Description>
        </List.Content>
      </List.Item> 
    )}
  </IngredientConsumer>
)
export default Ingredient;