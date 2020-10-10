import React from 'react';
import { List, Button } from 'semantic-ui-react';
import { RecipeConsumer } from '../../providers/RecipeProvider';
const Recipe = ({ location }) => (
  <RecipeConsumer>
    { value => (
      <List.Item>
        <List.Content>
          <List.Header>{location.state.author}</List.Header>
          <List.Header>{location.state.subject}</List.Header>
          <List.Description>{location.state.body}</List.Description>
          <List.Description>
            <Button 
              color='red' 
              onClick={
                () => value.deleteRecipe(location.state.dishType_id, location.state.id)
              }
              >
              Delete
            </Button>
          </List.Description>
        </List.Content>
      </List.Item> 
    )}
  </RecipeConsumer>
)
export default Recipe;