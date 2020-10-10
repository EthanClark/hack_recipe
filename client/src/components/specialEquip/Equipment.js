import React from 'react';
import { List, Button } from 'semantic-ui-react';
import { SpecialEquipmentConsumer } from '../../providers/SpecialEquipmentProvider';
const Equipment = ({ location }) => (
  <SpecialEquipmentConsumer>
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
                () => value.deleteSpecialEquipment(location.state.recipe_id, location.state.id)
              }
              >
              Delete
            </Button>
          </List.Description>
        </List.Content>
      </List.Item> 
    )}
  </SpecialEquipmentConsumer>
)
export default Equipment;