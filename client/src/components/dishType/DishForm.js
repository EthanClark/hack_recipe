import React from "react";
import { DishTypeConsumer } from '../../providers/DishTypeProvider'
import { Form, } from "semantic-ui-react";

class DishForm extends React.Component {
  state = { dName: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/dishs", { ...this.state, })
      .then( res => {
        this.props.add(res.data);
        this.props.toggleForm();
      })
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