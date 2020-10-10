import React from "react";
import { IngredientConsumer } from '../../providers/IngredientProvider'
import { Form, } from "semantic-ui-react"

class IngredientForm extends React.Component {
  state = { iName: "", amount: "", measurement: ""};

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/ingredients", { ...this.state, })
      .then( res => {
        this.props.add(res.data);
        this.props.toggleForm();
      })
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Ingredient Name"
              placeholder="i.e. applesauce"
              name="iName"
              required
              onChange={this.handleChange}
              value={this.state.iName}
            />
             <Form.Input
              label="Ingredient Amount"
              placeholder="i.e. 1.5, 1/2, 2"
              name="amount"
              required
              onChange={this.handleChange}
              value={this.state.amount}
            />
             <Form.Input
              label="Amount Measurement"
              placeholder="i.e. cups, tbsp, boxes"
              name="measurement"
              required
              onChange={this.handleChange}
              value={this.state.measurement}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    )
  }
}

const ConnectedIngredientForm = (props) => (
  <IngredientConsumer >
    {
      value => (
        <IngredientForm
          {...props}
          addIngredient={value.addIngredient}
        />
      )
    }
  </IngredientConsumer >
)

export default ConnectedIngredientForm;