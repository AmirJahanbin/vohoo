import React from "react";
import Modal from 'react-modal';
import styled from "styled-components";
import HomePageLink from "../HomePageLink";
import MenuLink from "../MenuLink";
import StyledMyWallet from "../../styled-components/StyledMyWallet";
import closeIcon from "../../assets/images/close icon hover.png";
import closeIconHover from "../../assets/images/close icon.png";
import calendarIcon from "../../assets/images/011-calendar.png";




const StyledModal = styled(Modal)`
width: 600px;
height: 370px;
margin: auto;
direction: rtl;
top: 30%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-self: center;
align-items: center;
background-color: #402D60;
font-family: MJ_thameen, sans-serif;
color: #D9D9D9;
font-size: 40px;

.modal-close-icon {
  background-image: url(${closeIconHover});
  background-repeat: no-repeat;
  //background: transparent;
  border: none;
}
.modal-close-icon:hover {
background-image: url(${closeIcon});
background-repeat: no-repeat;
}
.modal-input {
  position: relative;
  padding: 10px 0 0;
  margin: 20px 0;
  color: #D9D9D9;
}
.form-field-text {
  font-family: IRANSans, sans-serif;
  font-weight: 300;  
  //width: 300px;
  border: 0;
  border-bottom: 1px solid #D9D9D9;
  outline: 0;
  font-size: 33px;
  color: white;
  padding: 5px 0 0 0;
  background: transparent;
}
.form-field-text::placeholder {
    color: transparent;
}

.form-field-text:placeholder-shown ~ .form-label-text {
  font-size: 36px;
  cursor: text;
  top: 15px;
  color: #D9D9D9;
}
.form-label-text {
  position: absolute;
  top: -5px;
  display: block;
  transition: 0.2s;
  font-size: 2rem;
  //color: #606060;
}
.form-field-text:focus ~ .form-label-text {
  position: absolute;
  top: -5px;
  display: block;
  font-size: 2rem;
  font-weight: 400;
  //color: #606060;
}
`;
const customStyle = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
}

// Modal.setAppElement(document.getElementById("root"));

export default class MyWallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: null
        }
    }
    handlePaymentGateway = (event) => {
        this.setState(() => ({showModal: true}))
    }
    handleCloseModal = () => {
        this.setState({showModal: false})
    }
    render() {
        return (
            <div className={"main-container"} style={{backgroundColor: "#D9D9D9"}}>
                <div className={"right-container"}>
                </div>
                <div className={"middle-container"}>
                    <StyledMyWallet>
                        <div className={"wallet-amount-container"}>
                            <span>مانده اعتبار</span>
                            <div>
                                {180000}
                                <span>تومان</span>
                            </div>
                        </div>
                        <div className={"add-credit-container"}>
                            <button type={"button"} onClick={this.handlePaymentGateway}>افزایش اعتبار کیف پول من</button>
                            <StyledModal
                                isOpen={this.state.showModal}
                                onRequestClose={this.handleCloseModal}
                            >
                                <div className={"here-boy"}>
                                    Hello
                                </div>
                            </StyledModal>
                        </div>
                        <div className={"transaction-history-container"}>
                        </div>
                        <StyledModal
                            isOpen={this.state.showModal}
                            onRequestClose={this.handleCloseModal}

                        >
                            <button onClick={this.handleCloseModal} className={"modal-close-icon"}>
                            </button>
                            <div className={"modal-input"}>
                                <input
                                    type={"text"}
                                    id={"first_name"}
                                    className={"form-field-text"}
                                    placeholder={"مبلغ را وارد کنید"}
                                    onChange={this.handleOnChange}
                                    required={true}
                                    value={this.state.first_name}
                                />
                                <label htmlFor={"first_name"} className={"form-label-text"}>
                                    مبلغ را وارد کنید
                                </label>
                                <span style={{position: "absolute", left: "5px", top: "30px", fontSize: "20px"}}>
                                    تومان
                                </span>
                            </div>
                            <div>
                                <button>
                                    ارسال
                                </button>
                            </div>
                        </StyledModal>
                    </StyledMyWallet>
                </div>
                <div className={"left-container"}>
                    <div className={"left-fixed-container"}>
                        <HomePageLink className={"top-left-home-page-logo"}/>
                        <MenuLink className={"down-left-menu-link"}/>
                    </div>
                </div>
            </div>
        )
    }
}