import React from "react";
import {Link} from "react-router-dom";
import HomePageLink from "../HomePageLink";
import styled from "styled-components";
import LoginForm from "../LoginForm";
import closeIcon from "../../assets/images/close icon@2x.png";

const StyledLoginForm = styled(LoginForm)`
  .form-group {
    width: 25vw;
    margin: 35px 0;
  }
`;


export default class Login extends React.Component {
    render() {
        return (
            <div className={"main-container"}>
                <HomePageLink className={"right-container"} id={"right-home-page-logo"}/>
                <div className={"middle-container"} id={"login-form-container"}>
                    <StyledLoginForm />
                </div>
                <div className={"left-container"}>
                    <div className={"login-L-items"}>
                        <Link to={"/sign-up"}>
                            عضویت در سایت
                        </Link>
                    </div>
                    <Link to={"/"}>
                        <img src={closeIcon} alt={closeIcon} className={"close-icon"}/>
                    </Link>
                    <div className={"login-L-items"}>
                        <Link to={"/forget-password-page"}>
                            فراموش کرده‌ام
                        </Link>
                    </div>
                </div>
            </div>
        );
    }


};