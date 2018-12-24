import React, { Component } from 'react';
import './App.css';
import MenuAttached from './MenuFlow';

import {
    Search,
    Container,
} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
        <Container>
        <MenuAttached/>
        </Container>
    );
  }
}

export default App;
