import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/images/HomePageLink@2x.png";

const HomePageLink = (props) => (
    <div className={props.className} >
        <Link to={"/"}>
            <img alt={"Home Page"} src={logo} id={props.id}/>
        </Link>
    </div>

);
export default HomePageLink;