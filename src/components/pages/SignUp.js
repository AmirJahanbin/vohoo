import React from "react";
import {Link} from "react-router-dom";
import HomePageLink from "../HomePageLink";
import styled from "styled-components";
import SignUpForm from "../SignUpForm";
import closeIcon from "../../assets/images/close icon@2x.png";
import birdsFlying from "../../assets/images/birds-flying-silhouette@2x.png"
import StyledForm from "../../styled-components/StyledForm";

const StyledSignUpForm = styled.div`
  width: 100%;
  form {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 75px;
      //width: 100%;   
    }
  .form-group {
    width: 283px;
    margin: 2.5% 2%;
  }
  
  //#sign-up-form {
  //  display: flex;
  //  //flex-direction: column;
  //  
  //  flex-wrap: wrap;
  //  justify-content: space-between;
  //  margin: -100px 60px 0 60px;
  //}
`;
export default class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            country_code: "+98",
            phone_number: "",
            first_name: "",
            last_name: ""
        }
    }
    handleRedirectToMenu = () => {
        this.props.history.push("/menu");
    }
    render() {
        return (
            <div className={"main-container"}>
                <div className={"right-container"}>
                    <HomePageLink id={"right-home-page-logo"}/>
                </div>
                <div className={"middle-container"} id={"sign-up-form-container"}>
                    <StyledSignUpForm>
                        <SignUpForm className={"sign-up-form"} handleRedirectToMenu={this.handleRedirectToMenu}/>
                    </StyledSignUpForm>
                </div>
                <div className={"left-container"}>
                    <Link to={"/"}>
                        <img src={closeIcon} alt={closeIcon} className={"close-icon"}/>
                    </Link>
                </div>
            </div>
        );
    }
}