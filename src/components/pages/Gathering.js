import React from "react";
import {Link} from "react-router-dom";

export default class Gathering extends React.Component {
    render() {
        return (
            <div>
                <h3>This is gathering page!</h3>
                <Link to={"/menu"}>menu</Link>
            </div>
        );
    }
}