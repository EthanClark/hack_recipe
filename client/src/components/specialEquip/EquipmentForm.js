import React from "react";
import { SpecialEquipmentConsumer } from '../../providers/SpecialEquipmentProvider'
import { Form, } from "semantic-ui-react";

class EquipmentForm extends React.Component {
  state = { eName: "", eQuantity: "", aEquip: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/equipments", { ...this.state, })
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
              label="Special Equipment Required, or N/A"
              placeholder="i.e. potatoe ricer, canning tools"
              name="eName"
              required
              onChange={this.handleChange}
              value={this.state.iName}
            />
             <Form.Input
              label="Number of Equipment needed"
              placeholder="i.e. 1, 2, 7"
              name="eQuantity:"
              onChange={this.handleChange}
              value={this.state.eQuantity}
            />
             <Form.Input
              label="Alternative Equipment you can use:"
              placeholder="i.e. bottom of a heavy pan, forks, a glass cup"
              name="aEquip"
              onChange={this.handleChange}
              value={this.state.aEquip}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    )
  }
}

const ConnectedEquipmentForm = (props) => (
  <SpecialEquipmentConsumer>
    {
      value => (
        <EquipmentForm
          {...props}
          addSpecialEquipment={value.addSpecialEquipment}
        />
      )
    }
  </SpecialEquipmentConsumer>
)

export default ConnectedEquipmentForm;