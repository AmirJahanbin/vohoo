import styled from "styled-components";
import cameraIcon from "../assets/images/camera.png";



const StyledMyProfile = styled.div`
  color: white;
  margin: auto;
  font-size: xx-large;
  
  
  .active-sidebar {
    display: flex;
    flex-direction: column;
  }  
  .personal-info {
    background-color: #AAAAAA;
    padding: 40px 80px; 
    display: flex;
    flex-direction: column;
  }
  .national-card-field {
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 10px;
    width: 300px;
  }  
  //second calendar(bad one)
  .JDatePicker {
    color: black;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .JDheader {
      display: flex;
      justify-content: center;
      align-items: center;
      .right {
        .JC-years {
          display: flex;
          justify-content: space-around;
          input[type="tel"]{
            position:unset;
          }
        }
        .number {
          width: unset;
        }
      }
      .left {
        display: none;
      }
    }
    .JC-months{
      .holder {
        width: 100%!important;
      }
    } 
    .days-titles {
      
    } 
    .JC-days {
    
    }
  }
    
  #verification-code-btn {
    font-family: MJ_thameen, sans-serif;
    
    background-color: #D9D9D9;
    border: 1px solid #23083D;
    border-radius: 5px;
    padding: 5px;
  }
  #verification-code-btn:focus {
    background-color: lightgray;   
  }
  
  
  .entertainments {
    background-color: #795FA4;
    padding: 40px 80px; 
    font-size: 35px;
    & .checkmark:after {
      border-color: #402D60;
    }
  }
  #entertainments-header {
    font-size: 40px;
    width: 300px;
    border-bottom: 1px solid white;
    font-weight: 300;
  }
  #favorite-habits-container {
    display: flex;    
    margin: auto;
    flex-direction: row;
    flex-wrap: wrap;    
    font-size: 33px;
    & div {
      width: 29%;
    }
  }
  
  .favorite-films-books-container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
  .form-add-btn {
    font-family: MJ_thameen, sans-serif;
    color: white;
    font-size: inherit;
    background-color: transparent;
    border: none;
  }
  .social-media {
   padding: 40px 80px;
  }
  .social-media-input {
    
    direction: ltr;
    display: flex;
    align-items: flex-end;
    margin: 0 15px;
    height: 80px;
    
    & input {
      position:absolute;
      border-bottom-color: gray;
      color: gray;
      width: 500px;
      padding-left: 70px;
    }
    & img {
      width: 55px;
      margin: 5px 15px 5px 5px;
    }
  }
  .case-history-container {
    background-color: #D9D9D9;
    padding: 20px 80px;
    margin-bottom: 100px;
    color: #606060;
    & .checkmark {
      border-color: #AAAAAA;
    }
    .case-history {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-end;
      .case-check {
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      
    }
  }
  
  #my-profile-submit-btn {
    font-family: MJ_thameen, sans-serif;
    display: flex;
    text-align: center;
    font-size: 5rem;
    justify-content: center;
    background-color: #D9D9D9;
    border: 1px solid #23083D;
    border-radius: 20px;
    width: 50%;
    margin: 100px auto;
  }
`;
export default StyledMyProfile;