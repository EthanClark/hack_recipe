import React, { Component } from 'react';
import { CuisineConsumer } from '../../providers/CuisineProvider'
import { Form, } from "semantic-ui-react";

class CuisineForm extends Component {
  state = { cName: "", user_id: this.props.user_id};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCuisine(this.state)
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value});
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Cuisine Name"
              placeholder="i.e. Mexican"
              name="cName"
              required
              onChange={this.handleChange}
              value={this.state.cName}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    )
  }
}

const ConnectedCuisineForm = (props) => (
  <CuisineConsumer >
    {
      value => (
        <CuisineForm
          {...props}
          addCuisine={value.addCuisine}
        />
      )
    }
  </CuisineConsumer >
)

export default ConnectedCuisineForm;