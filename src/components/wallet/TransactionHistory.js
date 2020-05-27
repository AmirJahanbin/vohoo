import React from "react";
import moment from "moment-jalaali";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  font-family: SegoeUI,sans-serif;
  font-weight: lighter;
  .payment-subject-and-type {
    align-items: baseline;
    display: flex;
    flex-direction: row-reverse;
    color: #606060;
    font-size: 36px;
    
    & .deposit-type {
      > span {
        margin-left: 23px;
      }
    }
    & .payment-subject {
      //font-size: 36px;
      
      direction: rtl;
      text-align: right;
    }
  }
  .payment-amount-and-date {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & .payment-amount {
      display: flex;
      flex-direction: row-reverse;
      align-items: baseline;
    }
  }
`;

export default class transactionHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        console.log("render history called, props: ", this.props.transaction);
        return (
            <div>
                <StyledDiv>
                    <div className={"payment-subject-and-type"}>
                        <div className={"deposit-type"}>
                            {
                                // ("") ? <span>+</span> : <span>-</span>
                                this.props.transaction && this.props.transaction.sign
                            }
                        </div>
                        <div className={"payment-subject"}>
                            {
                                this.props.transaction.title
                            }
                        </div>
                    </div>
                    <div className={"payment-amount-and-date"}>
                        <div className={"payment-amount"}>
                            <span style={{fontSize: "36px", color: "#606060"}}>
                                {
                                    this.props.transaction.amount
                                }
                            </span>
                            <span style={{fontSize: "18px", color: "#AAAAAA"}}>تومان</span>
                        </div>
                        <div className={"payment-date"}>
                            <span style={{fontSize: "18px", color: "#AAAAAA", paddingLeft: "40px"}}>
                                {
                                    // this.props.transaction.date.format("jYYYY/M/D")
                                    moment(this.props.transaction.date, "YYYY/M/D").format("jYYYY/jM/jD")
                                }
                            </span>
                        </div>
                    </div>
                </StyledDiv>
                <hr style={{border: "0.5px solid #AAAAAA", width: "92%"}}/>
            </div>
        );
    }
}