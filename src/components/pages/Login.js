import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
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
    constructor(props) {
        super(props);
    }
    handleOnSubmit = async (e, userPass) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://5.253.25.176:8000/api/auth/login/', userPass);
            this.props.history.push("/my-profile");
            console.log(response);
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <div className={"main-container"}>
                <div className={"right-container"}>
                    <HomePageLink id={"right-home-page-logo"}/>
                </div>
                <div className={"middle-container"} id={"login-form-container"}>
                    <StyledLoginForm handleSubmit={this.handleOnSubmit}/>
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