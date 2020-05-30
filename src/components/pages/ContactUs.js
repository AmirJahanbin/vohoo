import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import axiosInstance from "../../connetion/axios";
import HomePageLink from "../HomePageLink";
import Toastify from "../Toastify";

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
const toast = new Toastify().toast;
export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            social: ""
        }


    }

    componentDidMount() {
        axiosInstance.axios.get(`/website/site-information/1/`)
            .then((response) => {
                axiosInstance.axios.get(response.data.social_media)
                    .then((socialResponse) => {
                        this.setState(() => ({social: socialResponse.data}));
                    })
            })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        const sendMessage = {
            first_name: event.target.elements.first_name.value,
            last_name: event.target.elements.last_name.value,
            phone_number: event.target.elements.phone_number.value,
            message: event.target.elements.message.value
        }
        axiosInstance.axios.post('/website/contact/', sendMessage)
            .then(res => toast.success("پیام شما ارسال گردید"))
            .catch(e => toast.error("مشکلی در ارسال فرم پیش آمده است. لطفا دوباره تلاش کنید"));
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
            <div className={"main-container"} >
                <div className={"right-container"}>
                    <HomePageLink id={"right-home-page-logo"} />
                </div>
                <StyledContactUsMiddleContainer className={"middle-container"} id={"contact-us-container"}>
                    <div className={"social-link-box"}>
                        <div className={"social-group"}>
                            <a href={"#"} id={"social1"}>
                                <img src={telephone} alt={"telephone"}/>
                                {this.state.social.landline_number}
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"#"} id={"social2"}>
                                <img src={telegram} alt={"telegram"}/>
                                {this.state.social.telegram_id}
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"#"} id={"social3"}>
                                <img src={whatsapp} alt={"whatsapp"}/>
                                {this.state.social.whatsapp_number}
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"#"} id={"social4"}>
                                <img src={mail} alt={"mail"}/>
                                {this.state.social.email_address}
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"#"} id={"social5"}>
                                <img src={instagram} alt={"instagram"}/>
                                {this.state.social.instagram_id}
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"#"} id={"social6"}>
                                <img src={facebook} alt={"facebook"}/>
                                {this.state.social.facebook_link}
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"#"} id={"social7"}>
                                <img src={youtube} alt={"youtube"}/>
                                {this.state.social.youtube_link}
                            </a>
                        </div>
                        <div className={"social-group"}>
                            <a href={"#"} id={"social8"}>
                                <img src={twitter} alt={"twitter"}/>
                                {this.state.social.twitter_id}
                            </a>
                        </div>
                    </div>
                    <div id={"contact-us-form"}>
                        <StyledForm onSubmit={this.handleOnSubmit}>
                            <div className={"form-group"}>
                                <input
                                    name={"first_name"}
                                    type={"text"}
                                    id={"first_name"}
                                    className={"form-field"}
                                    placeholder={"نام"}
                                    autoFocus={true}
                                    required={true}

                                    onKeyDown={this.handleNextInput}
                                />
                                <label htmlFor={"first_name"} className={"form-label"}>
                                    نام
                                </label>
                            </div>
                            <div className={"form-group"}>
                                <input
                                    name={"last_name"}
                                    type={"text"}
                                    id={"last_name"}
                                    className={"form-field"}
                                    placeholder={"نام خانوادگی"}
                                    required={true}
                                    onKeyDown={this.handleNextInput}
                                />
                                <label htmlFor={"last_name"} className={"form-label"}>
                                    نام خانوادگی
                                </label>
                            </div>
                            <div className={"form-group"}>
                                <input
                                    name={"phone_number"}
                                    type={"tel"}
                                    id={"phone_number"}
                                    className={"form-field"}
                                    placeholder={"شماره تماس"}
                                    required={true}
                                    // pattern={"[0-9]{10}"}
                                    onKeyDown={this.handleNextInput}
                                />
                                <label htmlFor={"phone_number"} className={"form-label"}>
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
