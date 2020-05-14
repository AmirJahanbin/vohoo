import React from "react";
import {Link} from "react-router-dom";
import axiosInstance from "../../connetion/axios";
import HomePageLink from "../HomePageLink";
import LoginForm from "../LoginForm";
import closeIcon from "../../assets/images/close icon@2x.png";
import Toastify from "../toastify";
import 'react-toastify/dist/ReactToastify.css';

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
            if (response.data.key) {
                localStorage.setItem('token', response.data.key);
                axiosInstance.setAuthKey(response.data.key)
            }
            this.props.history.push("/my-profile");
        } catch (e) {
            this.toast.error(e.message || 'Wrong user pass');
            console.log("here is what happened " + e);
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
                    <LoginForm handleSubmit={this.handleOnSubmit}/>
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