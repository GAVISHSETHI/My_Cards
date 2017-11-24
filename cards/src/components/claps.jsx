import React, { Component } from 'react';
import { Button  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Claps extends Component {
    constructor() {
        super();
        this.state = {val: 0}
    };

    plus = () => {
        this.setState({val: this.state.val + 1 });
    };

    minus = () => {
        this.setState({val: this.state.val - 1 });
    };
    render() {
        return (
            <div>

                <Button.Group>
                    <Button icon='arrow circle up' size='mini' onClick={this.plus} />
                    <Button> { this.state.val + this.props.claps + ' claps' }</Button>
                    <Button size='mini' icon='arrow circle down'  onClick={this.minus} />
                </Button.Group>
            </div>

    )
    }
}

export default Claps;
