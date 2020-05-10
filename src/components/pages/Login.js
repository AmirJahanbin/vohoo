import React from "react";
import {Link} from "react-router-dom";
import axiosInstance from "../../connetion/axios";
import HomePageLink from "../HomePageLink";
import styled from "styled-components";
import LoginForm from "../LoginForm";
import closeIcon from "../../assets/images/close icon@2x.png";
import Toastify from "../toastify";
import 'react-toastify/dist/ReactToastify.css';

const StyledLoginForm = styled(LoginForm)`
  .form-group {
    width: 25vw;
    margin: 35px 0;
  }
`;


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.toast = new Toastify().toast;
    }

    handleOnSubmit = async (e, userPass) => {
        e.preventDefault();
        try {
            console.log(axiosInstance);
            const response = await axiosInstance.axios.post('/auth/login/', userPass);
            console.log(response.data);
            localStorage.setItem('token', response.data.key);
            if (response.data.key) {
                axiosInstance.setAuthKey(response.data.key)
            }
            this.props.history.push("/my-profile");
        } catch (e) {
            this.toast.error(e.message || 'Wrong user pass');
            console.log(e);
        }
    }

    render() {
        return (
            <div className={"main-container"}>
                <Toastify/>
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