import React from "react";
import axios from "axios";
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
            courseList: ['']
        }
    }
    componentDidMount() {
        console.log(typeof this.state.courseList);
        axios.get("http://5.253.25.176:8000/api/course/")
            .then((response) => {
                console.log(response);
                const courseList = response;
                const titleList = [];
                courseList.data.map((course, index) => {
                    console.log("index now is equal to: " + index);
                    titleList[index] = course.title;
                });
                this.setState(() => ({courseList: titleList}));
            })
            .catch((error) => console.log(error)
            )
        axios.post()
    }

    render() {
        return (
            <StyledHomePage className={"home-page-container"}>
                <div className={"home-menu-link"}>
                    <HomePageLink className={"top-left-home-page-logo"}/>
                    <MenuLink className={"down-left-menu-link"}/>
                </div>
                <span>
                    :لیست دوره ها
                </span>
                {this.state.courseList.map((course, index) => (
                    <Link to={"/course-register"} value={"/menu"} key={index}>
                        {course}
                    </Link>
                ))}
            </StyledHomePage>
        );
    }
}