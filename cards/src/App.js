import React, { Component } from 'react';
import logo from './logo.svg';
import { Card, Icon, Image } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<Card>*/}
              {/*<Image src='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg' />*/}
              {/*<Card.Content>*/}
                  {/*<Card.Header>Daniel</Card.Header>*/}
                  {/*<Card.Meta>Joined in 2016</Card.Meta>*/}
                  {/*<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>*/}
              {/*</Card.Content>*/}
              {/*<Card.Content extra>*/}
                  {/*<a>*/}
                      {/*<Icon name='user' />*/}
                      {/*10 Friends*/}
                  {/*</a>*/}
              {/*</Card.Content>*/}
          {/*</Card>*/}



          <Card>
              <Image src='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg' />
              <Card.Content>
                  <Card.Header>
                      Matthew
                  </Card.Header>
                  <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
                  </Card.Meta>
                  <Card.Description>
                      Matthew is a musician living in Nashville.
                  </Card.Description>
              </Card.Content>
              <Card.Content extra>
                  <a>
                      <Icon name='user' />
                      22 Friends
                  </a>
              </Card.Content>
          </Card>

          </div>
    );
  }
}

export default App;
