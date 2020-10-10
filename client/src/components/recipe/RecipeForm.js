import React from "react";
import { RecipeConsumer } from '../../providers/RecipeProvider'
import { Form, } from "semantic-ui-react";

class RecipeForm extends React.Component {
  state = { rName: "", image: "", servingSize: "", cookTime: "",
   instructions: "", difficulty: "",};

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/recipes", { ...this.state, })
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
              label="Recipe Name"
              placeholder="i.e. Sticky Toffee Pudding"
              name="rName"
              required
              onChange={this.handleChange}
              value={this.state.rName}
            />
             <Form.Input
              label="Recipe Picture, *Not Required*"
              placeholder="i.e. [image url]"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
            />
             <Form.Input
              label="Serving Size of Recipe"
              placeholder="i.e. 0-100"
              name="servingSize"
              required
              onChange={this.handleChange}
              value={this.state.servingSize}
            />
              <Form.Input
              label="Cook Time"
              placeholder="i.e. 120 minutes, 2.5 hours"
              name="cookTime"
              required
              onChange={this.handleChange}
              value={this.state.cookTime}
            />
              <Form.Input
              label="Instructions"
              placeholder="i.e. Step 1:, Step 2:, Step 67"
              name="instructions"
              required
              onChange={this.handleChange}
              value={this.state.instructions}
            />
              <Form.Input
              label="Difficulty of the Recipe"
              placeholder="i.e. beginner, intermediate, home chef"
              name="difficulty"
              required
              onChange={this.handleChange}
              value={this.state.difficulty}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    )
  }
}

const ConnectedRecipeForm = (props) => (
  <RecipeConsumer>
    {
      value => (
        <RecipeForm
          {...props}
          addRecipe={value.addRecipe}
        />
      )
    }
  </RecipeConsumer>
)

export default ConnectedRecipeForm;