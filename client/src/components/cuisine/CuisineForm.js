import React, { Component } from 'react';
import { CuisineConsumer } from '../../providers/CuisineProvider'
import { Form, } from "semantic-ui-react";

class CuisineForm extends Component {
  state = { cName: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/Cuisines", {...this.state, })
      .then( res => {
        this.props.add(res.data);
        this.props.toggleForm();
      })
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