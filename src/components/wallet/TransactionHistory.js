import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
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
                        {100000}
                        <span>تومان</span>
                    </div>
                    <div className={"payment-date"}>
                        {"99/3/3"}
                    </div>
                </div>
            </StyledDiv>
        );
    }
}