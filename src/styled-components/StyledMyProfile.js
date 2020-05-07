import styled from "styled-components";
import cameraIcon from "../assets/images/camera.png";
import nationalCard from "../assets/images/national-card.png";

const StyledMyProfile = styled.div`
  color: white;
  width: 80%;
  margin: auto;
  font-size: xx-large;
  .right-fixed-container {
    position: fixed;
    right: 0;
  }
  .edit-profile-btn {
  background-color: transparent;
    width: 70%;
    font-family: MJ_thameen,sans-serif;
    border: none;
    padding: 20px 0;
    border-left: 1px solid #402D60;
    font-weight: lighter;
    font-size: larger;
    margin: auto;
  }
  .edit-profile-btn:hover{
    border-left: 2px solid #402D60;
  }
  
  .active-sidebar {
    display: flex;
    flex-direction: column;
  }
  .left-fixed-container {
    position: fixed;
    left: 0;
    width: 10vw;
  }
  .home-menu-link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
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
    margin-right: 50px;
    margin-top: 50px;
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
    margin-right: 50px;
    margin-top: 50px;
    color: black;
  }
  
  
  .personal-info {
    background-color: #AAAAAA;
    padding: 40px 50px; 
    display: flex;
    flex-direction: column;
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
    padding: 40px 50px; 
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
   padding: 40px 50px;
  }
  .social-media-input {
    direction: ltr;
    display: flex;
    align-items: center;
    margin: 15px;
    & input {
      border-bottom-color: gray;
      color: gray;
    }
    & img {
      width: 55px;
      height: 55px;
      margin-right: 15px;
    }
  }
  .case-history {
    background-color: #D9D9D9;
    padding: 40px 50px;
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
`;
export default StyledMyProfile;