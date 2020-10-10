import React from "react";
import { DishTypeConsumer } from '../../providers/DishTypeProvider'
import { Form, } from "semantic-ui-react";

class DishForm extends React.Component {
  state = { dName: "", user_id: this.props.user_id};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCuisine(this.state)
  }

  handleChange = (e, { name, value}) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Dish Name"
              placeholder="i.e. appetizers, mian dish"
              name="dName"
              required
              onChange={this.handleChange}
              value={this.state.dName}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    )
  }
}

const ConnectedDishForm = (props) => (
  <DishTypeConsumer >
    {
      value => (
        <DishForm
          {...props}
          addDishType={value.addDishType}
        />
      )
    }
  </DishTypeConsumer >
)

export default ConnectedDishForm;