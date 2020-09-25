import React, { Component } from 'react';
import { connect } from 'react-redux';

import { givenUp } from "../redux/actions/index";

export class GiveUpBtn extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = () => this.props.givenUp();

    showBtn = () => {
        if(this.props.giveUp) {
            return null
        } else {
            return <button className="btn btn-danger mb-2" onClick={this.handleClick}>Give Up?</button>;
        };
    };

    render() {
        return (
            <div data-test="component-give-up" className="GiveUp">
                {this.showBtn()}
            </div>
        );
    };
};

export default connect(null, { givenUp })(GiveUpBtn);