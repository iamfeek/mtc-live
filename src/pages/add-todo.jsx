import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Heading, Link, Text } from 'rebass';
import Layout from '../components/Layout';
import AddTodoForm from '../components/AddTodoForm';

class AddTodoPage extends React.Component {
  render(){
    return(
      <Layout>
        <Container>
          <Heading my={3}>Add a Todo</Heading>

          <hr />
          <AddTodoForm />
        </Container>
      </Layout>
    )
  }
}

export default AddTodoPage;
