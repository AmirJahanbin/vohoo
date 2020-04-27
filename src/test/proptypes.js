import React from "react";
import propTypes from "prop-types";

export default class TestPropTypes extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    hello {this.props.name}
                </h1>
            </div>
        )
    }
}
TestPropTypes.propTypes = {
    name: propTypes.string.isRequired
};