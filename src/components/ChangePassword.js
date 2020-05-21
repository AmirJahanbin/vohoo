import React from "react";
import axiosInstance from "../connetion/axios";

export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            current_password: "",
            new_password: "",
            use_name_instead_username: false
        }
    }

    componentDidMount() {
        const token = axiosInstance.getAuthKey();
        axiosInstance.axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        axiosInstance.axios.post('/user/get_user/')
            .then(userResponse => {
                // console.log(userResponse.data);
                this.setState(() => ({username: userResponse.data.username}))
                this.props.getUserId(userResponse.data.id);
            })
    }

    handleForgetPassword = () => {

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
                        onChange={this.handleOnChange}
                        onKeyDown={this.handleNextInput}
                        // required={true}
                        defaultValue={this.state.username}
                    />
                    <label htmlFor={"username"} className={"form-label-text"}>
                        نام کاربری
                    </label>
                    <div className={"input-field-caption"}>
                        <label htmlFor={"use_name_instead_username"} className={"checkbox-label"}>
                            <input
                                type={"checkbox"}
                                name={"use_name_instead_username"}
                                id={"use_name_instead_username"}
                                className={"checkbox-input"}
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
                        <button type={"button"} onClick={this.handleForgetPassword}>
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