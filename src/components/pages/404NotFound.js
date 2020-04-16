import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2 style={{color: "red"}}>404 NOT FOUND!</h2>
            <Link to={"/"}>Go Home</Link>
        </div>
    );
};
export default NotFound;