import React from "react";
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
        this.state = {

        }
    }
    render() {
        return (
            <StyledDiv>
                <div className={"payment-subject-and-type"}>
                    <div className={"deposit-type"}>
                        {("") ? <span>+</span> : <span>-</span>}
                    </div>
                    <div className={"payment-subject"}>
                        {"واریز پول"}
                    </div>
                </div>
                <div className={"payment-amount-and-date"}>
                    <div className={"payment-amount"}>
                        <span style={{fontSize: "36px", color: "#606060"}}>{100000}</span>
                        <span style={{fontSize: "18px", color: "#AAAAAA"}}>تومان</span>
                    </div>
                    <div className={"payment-date"}>
                        <span style={{fontSize: "18px", color: "#AAAAAA",paddingLeft: "40px"}}>{"99/3/3"}</span>
                    </div>
                </div>
            </StyledDiv>
        );
    }
}