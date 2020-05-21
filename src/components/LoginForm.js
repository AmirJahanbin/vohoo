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

    handleOnSubmit = (e) => {
        const userPass = this.state;
        this.props.handleSubmit(e, userPass);
    }
    // handleSubmit = async (event) => {
    //     event.preventDefault();
    //
    //     //TODO send username and password to server
    //     try {
    //         const response = await axios.post('http://5.253.25.176:8000/api/auth/login/', this.state);
    //         // const { history } = this.props;
    //         // history.push("/my-profile");
    //         console.log(response);
    //         console.log(response.data);
    //         return (<Redirect to="/my-profile"/>);
    //     } catch (e) {
    //         console.log(e);
    //     }
    //
    // };

    render() {
        return (
            <div className={this.props.className} id={this.props.id} >
                <StyledForm onSubmit={this.handleOnSubmit}>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                        <div className={"form-group"} style={{width: "300px", margin: "35px"}}>
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
                        <div className={"form-group"} style={{width: "300px", margin: "35px"}}>
                            <input
                                name={"password"}
                                type={"password"}
                                id={"password"}
                                className={"form-field"}
                                onChange={this.handleOnChange}
                                placeholder={"رمز عبور"}
                                required={true}
                            />
                            <label htmlFor={"password"} className={"form-label"} >
                                رمز عبور
                            </label>
                        </div>
                        <input type={"submit"} value={"ورود"} id={"login-btn"} style={{width: "300px", margin: "35px"}}/>
                    </div>
                </StyledForm>
            </div>
        );
    }
}