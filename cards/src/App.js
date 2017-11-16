import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import CardFull from './components/card-full';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Grid centered columns={3}>
              <Grid.Column>
          <CardFull/>
              </Grid.Column>
          </Grid>
          </div>
    );
  }
}

export default App;
