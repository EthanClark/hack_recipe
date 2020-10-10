import React from 'react';
import { List, Button } from 'semantic-ui-react';
import { DishTypeConsumer } from '../../providers/DishTypeProvider';
const Dish = ({ location }) => (
  <DishTypeConsumer>
    { value => (
      <List.Item>
        <List.Content>
          <List.Header>{location.state.dName}</List.Header>
          <List.Description>
            <Button 
              color='red' 
              onClick={
                () => value.deleteDishType(location.state.cuisine_id, location.state.id)
              }
              >
              Delete
            </Button>
          </List.Description>
        </List.Content>
      </List.Item> 
    )}
  </DishTypeConsumer>
)
export default Dish;