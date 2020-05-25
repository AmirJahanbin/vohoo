import React from "react";
import axiosInstance from "../connetion/axios";

export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            old_username: "",
            is_valid_username: true,
            current_password: "",
            new_password: "",
            repeat_new_password: "",
            use_name_instead_username: false
        }
        this.timer = false;
    }

    async componentDidMount() {
        const token = await axiosInstance.getAuthKey();
        axiosInstance.axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        axiosInstance.axios.post('/user/get_user/')
            .then(userResponse => {
                // console.log(userResponse.data);
                this.setState(() => ({
                    username: userResponse.data.username,
                    old_username: userResponse.data.username
                }))
                this.props.getUserId(userResponse.data.id, userResponse.data.username);
            })
    }
    handleNextInput = (event) => {
        if (event.keyCode === 13) {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    };
    handleForgetPassword = () => {

    }
    handleOnChange = (event) => {
        this.props.setAccount(event);
        // console.log("handleOnChange called");
        let name = event.target.name;
        let val = event.target.value ? event.target.value : "";

        this.setState(() => ({[name]: val}));
        // console.log(event);
        // console.log("event.target.name: " + name);
        // console.log("event.target.value: " + val);
    };
    handleIsValidUsername = (event) => {
        this.timer = true;
        let val = event.target.value;
        this.setState(() => ({
            username: val,
            is_valid_username: true
        }));
        setTimeout(() => {
            if (this.timer) {
                axiosInstance.axios.post('/user/is_valid_username/', {username: this.state.username})
                    .then((stateResponse) => {
                        if (stateResponse.data.state === "invalid" && this.state.username !== this.state.old_username) {
                            this.timer = false;
                            console.log("handle is valid username called: ", stateResponse.data);
                            this.setState(() => ({is_valid_username: false}));

                        }
                    })
            }
        }, 3000);

    }

    render() {
        return (
            <div>
                <div className={"pro-form-group"}>
                    <input
                        type={"text"}
                        name={"username"}
                        id={"username"}
                        className={"form-field-text"}
                        placeholder={"نام کاربری"}
                        onChange={this.handleIsValidUsername}
                        onKeyDown={this.handleNextInput}
                        required={true}
                        defaultValue={this.state.username}
                    />
                    <label htmlFor={"username"} className={"form-label-text"}>
                        {this.state.is_valid_username ? "نام کاربری" : "این نام کاربری قبلا در سامانه ثبت شده‌است"}
                    </label>
                    <div className={"input-field-caption"}>
                        <label htmlFor={"use_name_instead_username"} className={"checkbox-label"}>
                            <input
                                type={"checkbox"}
                                name={"use_name_instead_username"}
                                id={"use_name_instead_username"}
                                className={"checkbox-input"}
                                onKeyDown={this.handleNextInput}
                                defaultValue={this.state.use_name_instead_username}
                            />
                            <span className={"checkmark"}> </span>
                            میخواهم به جای نام و نام خانوادگی، نام کاربری در پیامها نمایش داده شود
                        </label>
                    </div>
                </div>
                <div className={"pro-form-group"}>
                    <input
                        type={"text"}
                        name={"current_password"}
                        id={"current_password"}
                        className={"form-field-text"}
                        placeholder={"رمز عبور فعلی"}
                        onChange={this.handleOnChange}
                        onKeyDown={this.handleNextInput}
                        // required={true}
                        // defaultValue={this.state.username}
                    />
                    <label htmlFor={"current_password"} className={"form-label-text"}>
                        رمز عبور فعلی
                    </label>
                    <div className={"input-field-caption"}>
                        <button type={"button"} onClick={this.handleForgetPassword} onKeyDown={this.handleNextInput}>
                            رمز عبور خود را فراموش کرده‌ام
                        </button>
                    </div>
                </div>
                <div className={"pro-form-group"}>
                    <input
                        type={"text"}
                        name={"new_password"}
                        id={"new_password"}
                        className={"form-field-text"}
                        placeholder={"رمز عبور جدید"}
                        pattern={".{8,}"}
                        title={"رمز عبور باید حداقل ۸ کاراکتر داشته باشد"}
                        onChange={this.handleOnChange}
                        onKeyDown={this.handleNextInput}
                        // required={true}
                        // defaultValue={this.state.username}
                    />
                    <label htmlFor={"new_password"} className={"form-label-text"}>
                        رمز عبور جدید
                    </label>
                    <div className={"input-field-caption"}>
                        <span>
                            رمز عبور باید حداقل 8 کاراکتر داشته باشد
                        </span>
                    </div>
                </div>
                <div className={"pro-form-group"}>
                    <input
                        type={"text"}
                        name={"repeat_new_password"}
                        id={"repeat_new_password"}
                        className={"form-field-text"}
                        placeholder={"تکرار رمز عبور"}
                        onChange={this.handleOnChange}
                        onKeyDown={this.handleNextInput}
                        // required={true}
                        // defaultValue={this.state.username}
                    />
                    <label htmlFor={"repeat_new_password"} className={"form-label-text"}>
                        تکرار رمز عبور
                    </label>
                </div>
            </div>
        );
    }

}