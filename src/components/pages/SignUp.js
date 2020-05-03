import React from "react";
import {Link} from "react-router-dom";
import HomePageLink from "../HomePageLink";
import styled from "styled-components";
import SignUpForm from "../SignUpForm";
import closeIcon from "../../assets/images/close icon@2x.png";
import birdsFlying from "../../assets/images/birds-flying-silhouette@2x.png"

const StyledSignUpForm = styled(SignUpForm)`
  background-color: rgb(64, 45, 96);
  background-image: url(${birdsFlying});
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  opacity: 80%;
  background-size: cover;
  
  .form-group {
  width: 18vw;
  margin: 2.5% 2%;
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
                <div className={"right-container"}>
                    <HomePageLink id={"right-home-page-logo"}/>
                </div>
                <StyledSignUpForm className={"middle-container"}/>
                <div className={"left-container"}>
                    <Link to={"/"}>
                        <img src={closeIcon} alt={closeIcon} className={"close-icon"}/>
                    </Link>
                </div>
            </div>
        );
    }
}