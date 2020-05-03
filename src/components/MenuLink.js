import React from "react";
import styled from "styled-components";
import menuIcon from "../assets/images/menu-icon.png"
import {Link} from "react-router-dom";

const StyledMenuLink = styled.div`
  .down-left-menu-link {
    display: flex;
    justify-content: center;
    & img {
      margin-bottom: 15px;
    }
  }
`;

export default class MenuLink extends React.Component{
    render() {
        return (
            <StyledMenuLink>
                <div className={this.props.className}>
                    <Link to={"/menu"}>
                        <img src={menuIcon} alt={"go to menu page"}/>
                    </Link>
                </div>
            </StyledMenuLink>
        );
    }
}