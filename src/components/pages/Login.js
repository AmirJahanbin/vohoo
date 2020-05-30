import React from "react";
import {Link, withRouter} from "react-router-dom";
import axiosInstance from "../../connetion/axios";
import HomePageLink from "../HomePageLink";
import LoginForm from "../LoginForm";
import closeIcon from "../../assets/images/close icon@2x.png";
import Toastify from "../Toastify";
import 'react-toastify/dist/ReactToastify.css';
import {inspect} from 'util';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.toast = new Toastify().toast;
    }

    handleOnSubmit = async (e, userPass) => {
        e.preventDefault();
        try {
            console.log(axiosInstance);
            const response = await axiosInstance.axios.post('/auth/login/', userPass,{headers:{Authorization:null}});
            console.log(response.data);
            if (response.data.key) {

                axiosInstance.setAuthKey(response.data.key);

            }
            let {from} = this.props.location.state || { from: { pathname: "/menu" }};
            this.props.history.replace(from)
            // this.props.history.push("/menu");
        } catch (e) {
            // this.toast.error(e.message || 'Wrong user pass');
            console.log("e.respones: ", e.response);
            console.log(inspect(e, false, null, true));
            if(e.response.status >= 400 || e.response.status <= 199) {
                this.toast.error("نام کاربری یا رمز عبور نادرست است")
            }
        }
    }

    render() {
        return (
            <div className={"main-container"}>
                <Toastify/>
                <div className={"right-container"}>
                    <HomePageLink id={"right-home-page-logo"}/>
                </div>
                <div className={"middle-container"} style={{justifyContent: "center"}} id={"login-form-container"}>
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
}
export default withRouter(Login)