import styled from "styled-components";
import cameraIcon from "../assets/images/camera.png";
import nationalCard from "../assets/images/national-card.png";

const StyledMyProfile = styled.div`
  color: white;
  margin: auto;
  font-size: xx-large;
  
  
  .active-sidebar {
    display: flex;
    flex-direction: column;
  }
  .form-label-file {
    position: relative;
  }
  .form-field-file {
    position: absolute;
    visibility: hidden;
  }
  #image-profile-label{  
    background-image: url(${cameraIcon});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border: 1px solid #D9D9D9;
    border-radius: 20px;
  }
  #image-profile-label:hover {
    background-color: rgba(64, 45, 96, 0.5);
  }
  #image-profile {
    width: 150px;
    height: auto;
  }
  #national-card-label{
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${nationalCard});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 258px;
    height: 156px;    
    border: 1px solid #D9D9D9;
    border-radius: 20px;
    color: black;
  }
  
  
  .personal-info {
    background-color: #AAAAAA;
    padding: 40px 80px; 
    display: flex;
    flex-direction: column;
  }
  
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
    & div {
      width: 29%;
    }
  }
  
  .favorite-films-books-container {
    display: flex;
    flex-direction: row;
    align-items: baseline;
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
  .case-history {
    background-color: #D9D9D9;
    padding: 40px 80px;
    color: #606060;
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
  .checkbox-input {
    
  }
`;
export default StyledMyProfile;