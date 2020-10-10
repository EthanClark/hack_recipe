import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import CuisineForm from './CuisineForm';
import { CuisineConsumer } from '../../providers/CuisineProvider';
import { Link } from 'react-router-dom';

class Cuisines extends Component {
  componentDidMount() {
    this.props.getCuisines();
  }

  listAllCuisines = () => {
    if (this.props.cuisines) {
      return (
        <List divided relaxed>
          { this.props.cuisines.map(c =>
            <>
              <Link to={{
                pathname: `/cuisines/${c.id}`,
                state: { ...c, }
              }}>
                {c.cName}
              </Link>
              <br />
            </>
          )}
        </List>
      )
    } else {
      return (<h1>No Cuisines</h1>)
    }
  }

  render() {
    return (
      <>
        <Header>Cuisine</Header>
        <CuisineForm/>
        { this.listAllCuisines()}
      </>
    )
  }
}

const ConnectedCuisines = (props) => (
  <CuisineConsumer>
    {
      value => (
        <Cuisines
          {...props}
          {...value}
        />
      )
    }
  </CuisineConsumer>
)

export default ConnectedCuisines; 