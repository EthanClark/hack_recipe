import React from 'react';
import { List, Button } from 'semantic-ui-react';
import { CuisineConsumer } from '../../providers/CuisineProvider';
const Cuisine = ({ location }) => (
  <CuisineConsumer>
    { value => (
      <List.Item>
        <List.Content>
          <List.Header>{location.state.cName}</List.Header>
          <List.Description>
            <Button 
              color='red' 
              onClick={
                () => value.deleteCuisine(location.state.id)
              }
              >
              Delete
            </Button>
            <Button 
              color='red' 
              onClick={
                () => value.updateCuisine(location.state.id)
              }
              >
              Edit
            </Button>
          </List.Description>
        </List.Content>
      </List.Item> 
    )}
  </CuisineConsumer>
)
export default Cuisine;