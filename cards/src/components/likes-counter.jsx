import React, { Component } from 'react';
import { Button  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Wrapper extends Component {
    constructor() {
        super();
        this.state = {val: 0}
    };

    update = (event) => {
        if(this.state.val === 1){
            this.reduce(event);
        }
        else if (this.state.val === 0)
        {
            this.increase(event);
        }
    };
    increase = (event) => {
        this.setState({val: this.state.val + 1});
        event.target.style.color = 'red';
    };

    reduce = (event) => {
        this.setState({val: this.state.val - 1 });
        event.target.style.color = '';
    };
    render() {
        return <Button content='Like' icon='heart'
      label={{ basic: true, pointing: 'left', content: this.state.val + this.props.likes + ' likes'}} onClick={this.update}> </Button>
    }
}

export default Wrapper;
