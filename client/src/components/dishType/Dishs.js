import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import DishForm from './DishForm';
import { DishTypeConsumer } from '../../providers/DishTypeProvider';
import { Link } from 'react-router-dom';

class Dishs extends Component {
  componentDidMount() {
    const { cuisine_id } = this.props.location.state
    this.props.getDishs(cuisine_id);
  }

  listAllDishs = () => {
    const { cuisine_id } = this.props.location.state
    if (this.props.dishs) {
      return (
        <List divided relaxed>
          { this.props.dishs.map(d =>
            <>
              <Link to={{
                pathname: `/dishs/${d.id}`,
                state: { ...d, cuisine_id: d.cuisine_id}
              }}>
                {d.cName}
              </Link>
              <br />
            </>
          )}
        </List>
      )
    } else {
      return (<h1>No Dishs</h1>)
    }
  }

  render() {
    const { cuisine_id, cName, } = this.props.location.state
    return (
      <>
        <Header>{cName} List of Your Dishes</Header>
        <DishForm cuisine_id={this.props.cuisine.id}/>
        { this.listAllDishs()}
      </>
    )
  }
}

const ConnectedDishs = (props) => (
  <DishTypeConsumer>
    {
      value => (
        <Dishs
          {...props}
          {...value}
        />
      )
    }
  </DishTypeConsumer>
)


export default ConnectedDishs; 