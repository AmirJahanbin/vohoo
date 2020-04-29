import React from "react";
import {Link} from "react-router-dom";
import HomePageLink from "../HomePageLink";
import styled from "styled-components";
import SignUpForm from "../SignUpForm";
import closeIcon from "../../assets/images/close icon@2x.png";

const StyledSignUpForm = styled(SignUpForm)`
  .form-group {
  width: 270px;
  margin: 40px 60px;
  }
  #sign-up-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: -100px 60px 0 60px;
  }
`;
export default class SignUp extends React.Component{
    render() {
        return (
            <div className={"main-container"}>
                <HomePageLink className={"right-container "} id={"right-home-page-logo"}/>

                <div className={"middle-container"} id={"sign-up-form-container"}>
                    <StyledSignUpForm />
                </div>
                <div className={"left-container"}>
                    <Link to={"/"}>
                        <img src={closeIcon} alt={closeIcon} className={"close-icon"}/>
                    </Link>
                </div>
                {/*<Link to={"/login"}>ورود</Link>*/}
            </div>
        );
    }
}