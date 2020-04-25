import React from "react";
import {Link} from "react-router-dom";
import HomePageLink from "../HomePageLink";
import SignUpForm from "../SignUpForm";
import closeIcon from "../../assets/images/close icon@2x.png";

export default class SignUp extends React.Component{
    render() {
        return (
            <div className={"main-container"}>
                <HomePageLink className={"right-container"} id={"home-page-logo"}/>
                <div className={"middle-container"} id={"sign-up-form-container"}>
                    <SignUpForm/>
                </div>
                <div className={"left-container"}>
                    <Link to={"/"}>
                        <img src={closeIcon} alt={closeIcon} className={"close-icon"}/>
                    </Link>
                </div>
                {/*<Link to={"/login"}>ورود</Link>*/}
            </div>
        );
    }
}