import React from "react";
import "../styles/components/_sign-up-form.scss";

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            phoneNumber: "",
            name: "",
            family: "",
            verificationCode: "",
            repeatVerificationCode: ""
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
            <div className={this.props.className}>
                <form id={"sign-up-form"}>
                    <div className={"form-group"}>
                        <input
                            name={"userName"}
                            type={"text"}
                            id={"userName"}
                            className={"form-field"}
                            placeholder={"نام کاربری"}
                            autoFocus={true}
                            required={true}
                            onKeyDown={this.handleNextInput}
                        />
                        <label htmlFor={"userName"} className={"form-label"}>
                            نام کاربری
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <input
                            name={"phoneNumber"}
                            type={"tel"}
                            id={"phoneNumber"}
                            className={"form-field"}
                            placeholder={"شماره همراه"}
                            required={true}
                            onKeyDown={this.handleNextInput}
                        />
                        <label htmlFor={"phoneNumber"} className={"form-label"}>
                            شماره همراه
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <input
                            name={"name"}
                            type={"text"}
                            id={"name"}
                            className={"form-field"}
                            placeholder={"نام"}
                            required={true}
                            onKeyDown={this.handleNextInput}
                        />
                        <label htmlFor={"name"} className={"form-label"}>
                            نام
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <input
                            name={"password"}
                            type={"text"}
                            id={"password"}
                            className={"form-field"}
                            placeholder={"رمز عبور"}
                            required={true}
                            onKeyDown={this.handleNextInput}
                        />
                        <label htmlFor={"password"} className={"form-label"}>
                            رمز عبور
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <input
                            name={"verificationCode"}
                            type={"text"}
                            id={"verificationCode"}
                            className={"form-field"}
                            placeholder={"کد اعتبارسنجی"}
                            required={true}
                            onKeyDown={this.handleNextInput}
                        />
                        <label htmlFor={"verificationCode"} className={"form-label"}>
                            کد اعتبارسنجی
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <input
                            name={"family"}
                            type={"text"}
                            id={"family"}
                            className={"form-field"}
                            placeholder={"نام خانوادگی"}
                            required={true}
                            onKeyDown={this.handleNextInput}
                        />
                        <label htmlFor={"family"} className={"form-label"}>
                            نام خانوادگی
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <input
                            name={"repeatVerificationCode"}
                            type={"tel"}
                            id={"repeatVerificationCode"}
                            className={"form-field"}
                            placeholder={"تکرار رمز عبور"}
                            required={true}
                        />
                        <label htmlFor={"repeatVerificationCode"} className={"form-label"}>
                            تکرار رمز عبور
                        </label>
                    </div>
                </form>
            </div>
        )
    }

}