import React from "react";
import StyledForm from "../styled-components/StyledForm";


export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    };

    handleOnChange = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState(() => ({[name]: val}));
    };
    handleNextInput = (event) => {
        if (event.keyCode === 13) {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    };
    handleSubmit = (event) => {
        const userPassJson = JSON.stringify(this.state);
        console.log(userPassJson);

        //TODO send username and password to server
        event.preventDefault();
    };


    render() {
        return (
            <div className={this.props.className} id={this.props.id}>
                <StyledForm onSubmit={this.handleSubmit} >
                    <div className={"form-group"}>
                        <input
                            name={"username"}
                            type={"text"}
                            id={"username"}
                            className={"form-field"}
                            onChange={this.handleOnChange}
                            placeholder={"نام کاربری"}
                            autoFocus={true}
                            required={true}
                            onKeyDown={this.handleNextInput}
                        />
                        <label htmlFor={"username"} className={"form-label"}>
                            نام کاربری
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <input
                            name={"password"}
                            type={"text"}
                            id={"password"}
                            className={"form-field"}
                            onChange={this.handleOnChange}
                            placeholder={"رمز عبور"}
                            required={true}
                        />
                        <label htmlFor={"password"} className={"form-label"}>
                            رمز عبور
                        </label>
                    </div>
                    <input type={"submit"} value={"ورود"} id={"login-btn"}/>
                </StyledForm>
            </div>
        );
    }
}