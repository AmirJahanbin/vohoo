import React from "react";
import styled from "styled-components";
import Toastify from "./Toastify";
import axiosInstance from "../connetion/axios";
import StyledForm from "../styled-components/StyledForm";

const Input = styled.input`
  width: 100%;
  margin: 0 40%;
  background-color: #D9D9D9;
  border: 1px solid #23083D;
  border-radius: 20px;
  font-family: MJ_thameen,sans-serif;
  font-weight: bold;
  font-size: 4rem;
  
  &:hover{
    outline: none;
    border-width: 2px;
  }
`;
const toast = new Toastify().toast;
export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            repeatPassword: "",
            country_code: "+98",
            phone_number: "",
            first_name: "",
            last_name: "",
            verificationCode: "",
            verification_id: "",
            have_code: false
        }

    }

    handleOnChange = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState(() => ({[name]: val}));
    }

    handleVerificationCode = () => {
        this.setState(() => ({have_code: true}))
        const sendPhoneNumber = {
            phone_number: this.state.phone_number,
            country_code: this.state.country_code
        }
        if (this.state.phone_number.length === 10) {
            axiosInstance.axios.defaults.headers.common['Authorization'] = null;
            axiosInstance.axios.post('/information/phone_number_validation/', sendPhoneNumber)
                .then((response) => {
                    toast.info("کد اعتبار سنجی به شماره شما ارسال گردید");
                    this.setState(() => ({verification_id: response.data.id}));
                    console.log("this is code: ", response.data.id);
                })
                .catch((e) => {
                    console.log(e);
                    toast.error("این شماره قبلاً در سامانه ثبت شده‌است");
                })
        } else {
            toast.error("لطفا شماره همراه خود را بصورت صحیح وارد نمائید");
        }


        setTimeout(() => {
            this.setState({have_code: false})
        }, 10000);
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log("handle submit called");
        if (this.state.password !== this.state.repeatPassword) {
            toast.error("رمز عبور با تکرار آن برار نیست")
        } else {
            const sendCode = {
                id: this.state.verification_id,
                code: this.state.verificationCode
            }
            const sendSignUpForm = {
                username: this.state.username,
                password: this.state.password,
                country_code: this.state.country_code,
                phone_number: this.state.phone_number,
                first_name: this.state.first_name,
                last_name: this.state.last_name
            }
            const sendLoginUserPass = {
                username: this.state.username,
                password: this.state.password
            }
            axiosInstance.axios.post('/information/code_validation/', sendCode)
                .then((response) => {
                    if (response.statusText === "OK") {
                        axiosInstance.axios.post('/user/signup/', sendSignUpForm)
                            .then(() => {
                                axiosInstance.axios.post('/auth/login/', sendLoginUserPass)
                                    .then((getToken) => {
                                        localStorage.setItem('token', getToken.data.key);
                                        axiosInstance.setAuthKey(getToken.data.key);
                                        this.props.handleRedirectToMenu();
                                        toast.success(`${this.state.first_name} سلام `);
                                    })
                                    .catch((e) => {
                                    })
                            })
                            .catch((e) => {
                                toast.error("این نام کاربری قبلا در سامانه ثبت شده‌است");
                            })
                    }
                })
                .catch((e) => {
                    toast.error("کد اعتبارسنجی نادرست است")
                })
        }
    }
    handleNextInput = (event) => {
        if (event.keyCode === 13) {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    };

    render() {
        return (
            // <div className={this.props.className}>
            <StyledForm onSubmit={this.handleOnSubmit}>
                <div className={"form-group"}>
                    <input
                        name={"username"}
                        type={"text"}
                        id={"username"}
                        className={"form-field"}
                        placeholder={"نام کاربری"}
                        autoFocus={true}
                        pattern={"[A-Za-z0-9._]{1,}"}
                        title={"کاراکتر‌های مجاز:حرف و عدد لاتین نثطه و ـ"}
                        required={true}
                        onChange={this.handleOnChange}
                        onKeyDown={this.handleNextInput}
                    />
                    <label htmlFor={"username"} className={"form-label"}>
                        نام کاربری
                    </label>
                    <div className={"form-field-caption"}>
                        <span style={{fontSize: "19px", color: "#C7BADC"}}>
                            کاراکتر‌های مجاز:حرف و عدد لاتین نقطه و ـ
                        </span>
                    </div>
                </div>
                <div className={"inline-form-groups"}
                     style={{flexWrap: "unset", alignItems: "baseline", marginBottom: "-30px"}}>
                    <div className={"form-group"} style={{width: "260px"}}>
                        <input
                            name={"phone_number"}
                            type={"text"}
                            id={"phone_number"}
                            className={"form-field"}
                            placeholder={"شماره همراه"}
                            required={true}
                            pattern={"[0-9]{10}"}
                            onChange={this.handleOnChange}
                            onKeyDown={this.handleNextInput}
                        />
                        <label htmlFor={"phone_number"} className={"form-label"}>
                            شماره همراه
                        </label>
                        <div className={"form-field-caption"} style={{direction: "ltr"}}>
                        <span style={{fontSize: "19px", color: "#C7BADC"}}>
                            913 123 4567
                        </span>
                        </div>
                    </div>
                    <div className={"form-group"} style={{width: "40px"}}>
                        <input
                            name={"country_code"}
                            type={"text"}
                            id={"country_code"}
                            className={"form-field"}
                            placeholder={"98+"}
                            disabled={true}
                            // required={true}
                            // pattern={"[0-9]{11}"}
                            // onChange={this.handleOnChange}
                            onKeyDown={this.handleNextInput}
                        />
                        <label htmlFor={"country_code"} className={"form-label"}>
                            98+
                        </label>
                    </div>
                </div>
                <div className={"form-group"}>
                    <input
                        name={"first_name"}
                        type={"text"}
                        id={"first_name"}
                        className={"form-field"}
                        placeholder={"نام"}
                        title={"لطفاً صفحه‌کلید خود را در حالت فارسی قرار دهید"}
                        pattern={"[^{A-Za-z}]{1,}"}
                        required={true}
                        onKeyDown={this.handleNextInput}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor={"first_name"} className={"form-label"}>
                        نام
                    </label>
                    <div className={"form-field-caption"}>
                        <span style={{fontSize: "19px", color: "#C7BADC"}}>
                            لطفاً صفحه‌کلید خود را در حالت فارسی قرار دهید
                        </span>
                    </div>
                </div>
                <div className={"form-group"} style={{ marginBottom: "-5px"}}>
                    <input
                        name={"password"}
                        type={"password"}
                        id={"password"}
                        className={"form-field"}
                        placeholder={"رمز عبور"}
                        required={true}
                        pattern={".{8,}"}
                        title={"رمز عبور باید حداقل ۸ کاراکتر داشته باشد"}
                        onKeyDown={this.handleNextInput}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor={"password"} className={"form-label"}>
                        رمز عبور
                    </label>
                    <div className={"form-field-caption"}>
                        <span style={{fontSize: "19px", color: "#C7BADC"}}>
                            رمز عبور باید حداقل ۸ کاراکتر داشته باشد
                        </span>
                    </div>
                </div>
                <div className={"form-group"}>
                    <input
                        name={"verificationCode"}
                        type={"text"}
                        id={"verificationCode"}
                        className={"form-field"}
                        placeholder={"کد اعتبارسنجی"}
                        pattern={".{5}"}
                        title={"کد ۵ رقمی ارسال شده را وارد کنید"}
                        required={true}
                        onKeyDown={this.handleNextInput}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor={"verificationCode"} className={"form-label"}>
                        کد اعتبارسنجی
                    </label>
                    <div className={"input-field-caption"}>
                        <button
                            type={"button"}
                            onClick={this.handleVerificationCode}
                            style={{color: "#C7BADC"}}
                            disabled={this.state.have_code}
                        >
                            دریافت کد اعتبار سنجی
                        </button>
                    </div>
                </div>
                <div className={"form-group"}>
                    <input
                        name={"last_name"}
                        type={"text"}
                        id={"last_name"}
                        className={"form-field"}
                        placeholder={"نام خانوادگی"}
                        required={true}
                        title={"لطفاً صفحه‌کلید خود را در حالت فارسی قرار دهید"}
                        pattern={"[^{A-Za-z}]{1,}"}
                        onKeyDown={this.handleNextInput}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor={"last_name"} className={"form-label"}>
                        نام خانوادگی
                    </label>
                    <div className={"form-field-caption"}>
                        <span style={{fontSize: "19px", color: "#C7BADC"}}>
                            لطفاً صفحه‌کلید خود را در حالت فارسی قرار دهید
                        </span>
                    </div>
                </div>
                <div className={"form-group"}>
                    <input
                        name={"repeatPassword"}
                        type={"password"}
                        id={"repeatPassword"}
                        className={"form-field"}
                        placeholder={"تکرار رمز عبور"}
                        required={true}
                        onKeyDown={this.handleNextInput}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor={"repeatPassword"} className={"form-label"}>
                        تکرار رمز عبور
                    </label>
                </div>
                <Input type={"submit"} value={"ثبت نام"} className={"sign-up-btn"} onSubmit={this.handleOnSubmit}/>
            </StyledForm>
            // </div>
        )
    }

}