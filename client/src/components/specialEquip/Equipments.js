import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import EquipmentForm from './EquipmentForm';
import { EquipmentConsumer } from '../../providers/EquipmentProvider';
import { Link } from 'react-router-dom';

class Equipments extends Component {
  componentDidMount() {
    const { recipe_id } = this.props.location.state
    this.props.getEquipments(recipe_id);
  }

  listAllEquipments = () => {
    const { recipe_id } = this.props.location.state
    if (this.props.Equipments) {
      return (
        <List divided relaxed>
          { this.props.equipments.map(c =>
            <>
              <Link to={{
                pathname: `/equipments/${c.id}`,
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
      return (<h1>No Equipments</h1>)
    }
  }

  render() {
    const { recipe_id, recipe_name, servingSize, cookTime, instructions, difficulty } = this.props.location.state
    return (
      <>
        <Header>{recipe_name} Equipment</Header>
        <IngredientForm recipe_id={recipe_id} servingSize={servingSize} cookTime={cookTime} instructions={instructions} difficulty={difficulty} />
        { this.listAllEquipments()}
      </>
    )
  }
}

const ConnectedEquipments = (props) => (
  <EquipmentConsumer>
    {
      value => (
        <Equipments
          {...props}
          {...value}
        />
      )
    }
  </EquipmentConsumer>
)

export default ConnectedEquipments; 