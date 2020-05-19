import React from "react";
import Modal from 'react-modal';
import TransactionHistory from "../wallet/TransactionHistory";
import styled from "styled-components";
import HomePageLink from "../HomePageLink";
import MenuLink from "../MenuLink";
import StyledMyWallet from "../../styled-components/StyledMyWallet";
import closeIcon from "../../assets/images/close icon.png";
import closeIconHover from "../../assets/images/close white icon.png";
import axiosInstance from "../../connetion/axios";
import Toastify from "../toastify";
Modal.setAppElement('#root')
const StyledModal = styled(Modal)`
width: 500px;
height: 300px;
margin: auto;
direction: rtl;
top: 30%;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-self: center;
align-items: center;
background-color: #402D60;
box-shadow: 0 0 10px 0 #402D60;
border-radius: 20px;
outline: none;
font-family: MJ_thameen, sans-serif;
color: #D9D9D9;
font-size: 40px;

.modal-close-icon {
  width: 30px;
  height: 30px;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  border: none;
}

.modal-close-icon:hover {
background-image: url(${closeIconHover});
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
  width: 320px;
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
}
.form-field-text:focus ~ .form-label-text {
  position: absolute;
  top: -5px;
  display: block;
  font-size: 2rem;
  font-weight: 400;
}
.modal-btn{
  width: 320px;
  padding: 5px 0;
  font-family: MJ_thameen, sans-serif;
  color: #D9D9D9;
  font-size: 30px;
  background-color: transparent;
  border-radius: 20px;
  border: 2px solid #795FA4;
  outline: none;
}
.modal-btn:hover {
background-color: #D9D9D9;
color: #795FA4;
border: 2px solid #795FA4;
}
`;

export default class MyWallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            addCreditAmount: null,
            tracking_code: "",
            transaction_id: ""
        }
        this.toast = new Toastify().toast;
    }

    handlePaymentGateway = (event) => {
        const token = axiosInstance.getAuthKey();
        console.log("token::::", token);
        axiosInstance.axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        let amount = this.state.addCreditAmount;
        axiosInstance.axios.post('/payment/charge/', {amount})
            .then(response => {
                this.setState(() => ({
                    tracking_code: response.data.tracking_code,
                    transaction_id: response.data.transaction_id
                }))
                this.toast.success("اکنون به درگاه بانکی وارد می‌شوید")
                setTimeout(() => {
                    window.open(`http://panel.aqayepardakht.ir/api/create/${this.state.transaction_id}/`);
                },3000)
            })
            .catch((error) => {
                this.toast.error("لطفا ابتدا وارد سایت شوید");
                this.props.history.push("/login");
            })
        this.handleCloseModal();
    }
    handleOpenModal = () => {
        this.setState(() => ({showModal: true}));
    }
    handleCloseModal = () => {
        this.setState({showModal: false})
    }
    handleOnChange = (event) => {
        let value = event.target.value;
        this.setState(() => ({addCreditAmount: value}));
    }
    render() {
        return (
            <div className={"main-container"} style={{backgroundColor: "#D9D9D9"}}>
                <div className={"right-container"}>
                    <div className={"right-fixed-container"}>
                    </div>
                </div>
                <div className={"middle-container"}>
                    <StyledMyWallet>
                        <div className={"wallet-amount-container"}>
                            <span>مانده اعتبار</span>
                            <div>
                                <span style={{fontWeight: "bold", color: "#402D60", fontSize: "85px"}}>{180000}</span>
                                <span style={{fontSize: "18px"}}>تومان</span>
                            </div>
                        </div>
                        <div className={"add-credit-container"}>
                            <button type={"button"} onClick={this.handleOpenModal}>افزایش اعتبار کیف پول من
                            </button>
                        </div>
                        <div className={"transaction-history-container"}>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
                            <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
                            <TransactionHistory/>
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
                                    pattern={"[0-9]"}
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
                                <button type={"button"} className={"modal-btn"} onClick={this.handlePaymentGateway}>
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