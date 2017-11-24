
import React, { Component } from 'react';
import { Grid , Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import CardFull from './components/card-full';
import MenuBar from './components/menu';
import StatisticFeeds from './components/stats';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid columns='three' >

                    <Grid.Column>
                       <MenuBar/>
                    </Grid.Column>

                    <Grid.Column>
                        <CardFull/>
                    </Grid.Column>

                    <Grid.Column>
                    <StatisticFeeds/>
                    </Grid.Column>


                </Grid>
            </div>
        );
    }
}

export default App;
