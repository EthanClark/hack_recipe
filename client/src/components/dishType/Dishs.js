import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import DishForm from './DishForm';
import { DishConsumer } from '../../providers/DishProvider';
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
          { this.props.dishs.map(c =>
            <>
              <Link to={{
                pathname: `/dishs/${d.id}`,
                state: { ...d, cuisine_id, cuisine_name, }
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
    const { cuisine_id, cuisine_name, } = this.props.location.state
    return (
      <>
        <Header>{cuisine_name} List of Your Dishes</Header>
        <DishForm cuisine_id={cuisine_id}/>
        { this.listAllDishs()}
      </>
    )
  }
}

const ConnectedDishs = (props) => (
  <DishConsumer>
    {
      value => (
        <Dishs
          {...props}
          {...value}
        />
      )
    }
  </DishConsumer>
)

export default ConnectedDishs; 