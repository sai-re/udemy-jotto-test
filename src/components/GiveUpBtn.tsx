import React, { Component } from 'react';
import { connect } from 'react-redux';

import { givenUp } from "../redux/actions/index";

type Props = {
    givenUp: () => void,
    giveUp: boolean
};

export class GiveUpBtn extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = () => this.props.givenUp();

    //render btn if user has not given up
    showBtn = () => {
        if(this.props.giveUp) {
            return null;
        } else {
            return <button data-test="give-up-button" className="btn btn-danger mb-2" onClick={this.handleClick}>Give Up?</button>;
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