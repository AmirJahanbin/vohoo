import React from "react";
import {Link} from "react-router-dom";
import HomePageLink from "../HomePageLink";
import closeIcon from "../../assets/images/close icon@2x.png";
import LoginForm from "../LoginForm";

export default class Login extends React.Component {
    render() {
        return (
            <div className={"main-container"}>
                <HomePageLink className={"right-container"} id={"home-page-logo"}/>
                <div className={"middle-container"} id={"login-form-container"}>
                    <LoginForm className={"form"} id={"login-form"}/>
                </div>
                <div className={"left-container"}>
                    <div className={"login-R-items"}>
                        <Link to={"/sign-up"}>
                            عضویت در سایت
                        </Link>
                    </div>
                    <Link to={"/"}>
                        <img src={closeIcon} alt={closeIcon} className={"close-icon"}/>
                    </Link>
                    <div className={"login-R-items"}>
                        <Link to={"/forget-password-page"}>
                            فراموش کرده‌ام
                        </Link>
                    </div>
                </div>
            </div>
        );
    }


};