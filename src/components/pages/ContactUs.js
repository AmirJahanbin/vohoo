import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import HomePageLink from "../HomePageLink";

import closeIcon from "../../assets/images/close icon@2x.png";
import facebook from "../../assets/images/social icons/facebook-1@2x.png";
import instagram from "../../assets/images/social icons/instagram-1@2x.png";
import mail from "../../assets/images/social icons/mail-1@2x.png";
import telegram from "../../assets/images/social icons/telegram-1@2x.png";
import telephone from "../../assets/images/social icons/telephone@2x.png";
import twitter from "../../assets/images/social icons/twitter-1@2x.png";
import whatsapp from "../../assets/images/social icons/whatsapp-1@2x.png";
import youtube from "../../assets/images/social icons/youtube-1@2x.png";
import background from "../../assets/images/woman-praying@2x.png";
import StyledForm from "../../styled-components/StyledForm";

const StyledContactUsMiddleContainer = styled.div`
  background-color: rgb(64, 45, 96);
  background-image: url(${background});
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  opacity: 80%;
  background-size: cover;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .social-link-box {
    margin: 0 0 0 70px;
    border-left: 2px solid lightgray;
    & img {
      width: 55px;
      margin: 15px;
    }
    & a {
      display: flex;
      align-items: center;
      color: lightgray;
      font-family: "Segoe UI", sans-serif;
      font-weight: 300;
      font-size: 2rem;
    }
    & a:hover {
      font-family: "Segoe UI", sans-serif;
      font-weight: 600;
    }
  }
  
  #contact-us-form {
    width: 30%;
    margin: 100px 70px 0 0;
    align-self: flex-start;
  }
  
  .form-group {
    margin: 50px 0;
    width: 70%;
  }
  #message-field {
    margin: 200px 0 0 0;
    width: 100%;
  }
  #send-message-btn {
  width: 50%;
  margin: 20px 0;
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
  }
`;

export default class ContactUs extends React.Component {

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
            <div className={"main-container"} >
                <div className={"right-container"}>
                    <HomePageLink id={"right-home-page-logo"} />
                </div>
                <StyledContactUsMiddleContainer className={"middle-container"} id={"contact-us-container"}>
                    <div className={"social-link-box"}>
                        <div className={"social-group"}>
                            <a href={"/"} id={"social1"}>
                                <img src={telephone} alt={"telephone"}/>
                                03132612613
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"/"} id={"social2"}>
                                <img src={telegram} alt={"telegram"}/>
                                09131137002
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"/"} id={"social3"}>
                                <img src={whatsapp} alt={"whatsapp"}/>
                                whatsapp/vohoo
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"/"} id={"social4"}>
                                <img src={mail} alt={"mail"}/>
                                vohoo@gmail.com
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"/"} id={"social5"}>
                                <img src={instagram} alt={"instagram"}/>
                                @vohoo
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"/"} id={"social6"}>
                                <img src={facebook} alt={"facebook"}/>
                                www.facebook.com/me
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"/"} id={"social7"}>
                                <img src={youtube} alt={"youtube"}/>
                                www.youtube.com/vohoo
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"/"} id={"social8"}>
                                <img src={twitter} alt={"twitter"}/>
                                www.twitter.com/vohoo
                            </a>
                        </div>
                    </div>
                    <div id={"contact-us-form"}>
                        <StyledForm>
                            <div className={"form-group"}>
                                <input
                                    name={"name"}
                                    type={"text"}
                                    id={"name"}
                                    className={"form-field"}
                                    placeholder={"نام"}
                                    autoFocus={true}
                                    required={true}
                                    onKeyDown={this.handleNextInput}
                                />
                                <label htmlFor={"name"} className={"form-label"}>
                                    نام
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
                                    name={"phoneNumber"}
                                    type={"tel"}
                                    id={"phoneNumber"}
                                    className={"form-field"}
                                    placeholder={"شماره تماس"}
                                    required={true}
                                    pattern={"[0-9]{10}"}
                                    onKeyDown={this.handleNextInput}
                                />
                                <label htmlFor={"phoneNumber"} className={"form-label"}>
                                    شماره تماس
                                </label>
                            </div>
                            <div className={"form-group"} id={"message-field"}>
                                <textarea
                                    rows={"1"}
                                    cols={"30"}
                                    name={"message"}
                                    id={"message"}
                                    className={"form-field"}
                                    placeholder={"پیام"}
                                    required={true}
                                    onKeyDown={this.handleNextInput}
                                />
                                <label htmlFor={"message"} className={"form-label"}>
                                    پیام
                                </label>
                            </div>
                            <input type={"submit"} value={"ارسال"} id={"send-message-btn"}/>
                        </StyledForm>
                    </div>
                </StyledContactUsMiddleContainer>
                <div className={"left-container"}>
                    <Link to={"/"}>
                        <img src={closeIcon} alt={closeIcon} className={"close-icon"}/>
                    </Link>
                </div>
            </div>
        );
    }
}
