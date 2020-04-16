import React from "react";
import {Link} from "react-router-dom";

export default class SignUp extends React.Component{
    render() {
        return (
            <div>
                <h3>This is sign up page!</h3>
                <Link to={"/login"}>ورود</Link>
            </div>
        );
    }
}