import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import HomePageLink from "../HomePageLink";
import MenuLink from "../MenuLink";

const StyledHomePage = styled.div`
  font-family: MJ_thameen, sans-serif;
  font-size: xx-large;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & button {
    font-family: MJ_thameen, sans-serif;
    font-size: xx-large;
    background-color: #D9D9D9;
    border: 1px solid #23083D;
    border-radius: 20px;
    //padding: 20px 0;
    width: 20%;
    margin: 20px;
  }
  & Link {
    width: 20%;
  }
  & select {
    text-align: right;
    width: 20%;
    padding: 10px 0;
  }
`;
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseList: ['a']
        }
    }
    render() {
        return (
            <StyledHomePage className={"home-page-container"}>
                <div className={"home-menu-link"}>
                    <HomePageLink className={"top-left-home-page-logo"}/>
                    <MenuLink className={"down-left-menu-link"}/>
                </div>

                <select id={"current_job"} name={"current_job"} className={"select-form-field"}>
                    <option value={""}>لیست دوره ها</option>
                    {this.state.courseList.map((course, index) => (
                        <option value={course} key={index}>
                            {course}
                        </option>
                    ))}
                </select>
            </StyledHomePage>
        );
    }
}