import React from "react";
import {Link} from "react-router-dom";

export default class Calendar extends React.Component {
    render() {
        return (
            <div>
                <h3>This is calendar page!</h3>
                <Link to={"/menu"}>menu</Link>
            </div>
        );
    }
}