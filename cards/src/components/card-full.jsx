import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import CardText from './card-text-feed';


class CardFull extends Component {
    render() {
        return (
            <div className="App">
                <CardText/>
            </div>
        );
    }
}

export default CardFull;
