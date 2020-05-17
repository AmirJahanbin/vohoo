import styled from "styled-components";

const StyledMyWallet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: 95%;
  margin: 40px auto;
  font-family: MJ_thameen, sans-serif;
  .wallet-amount-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    & span {
      font-size: 36px;
      color: #AAAAAA;
    }
    > div {
      display: flex;
      flex-direction: row-reverse;
      align-items: baseline;
    }
  }
  .add-credit-container {
    width: 100%;
    > button {
      width: inherit;
      background-color: #C7BADC;
      border: 1px solid #402D60;
      color: #23083D;
      font-weight: bold;
      font-size: 60px;
      border-radius: 10px;
      outline: none;
    }
  }
  .transaction-history-container {
    width: inherit;
  }
`;
export default StyledMyWallet;
