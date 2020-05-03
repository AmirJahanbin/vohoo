import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/HomePageLink@2x.png";

const StyledHomePageLogo = styled.div`
  //width: 80%;
  
  #right-home-page-logo{
  width: 80%;
  padding: 20px 3px 20px 10px;
  border-right: 1px solid #402D60;
  }
  #right-home-page-logo:hover {
    border-right: 2px solid #402D60;
  }
  .top-left-home-page-logo {
    & img {
    width: 80%;
    display: flex;
    margin: auto;
    }
  }
`;
const HomePageLink = (props) => (
        <StyledHomePageLogo>
            <div className={props.className}>
                <Link to={"/"}>
                    <img alt={"Home Page"} src={logo} id={props.id}/>
                </Link>
            </div>
        </StyledHomePageLogo>
);
const defaultProps = {

};
export default HomePageLink;