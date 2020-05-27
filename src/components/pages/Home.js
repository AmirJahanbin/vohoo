import React from "react";
import axios from "axios";
import axiosInstance from '../../connetion/axios';
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
            courseTitles: ['']
        }
        this.sectionCourseNameList = [];
    }

    async componentDidMount() {
        axiosInstance.axios.defaults.headers.common['Authorization'] = null;
        axiosInstance.axios.get("/tree/section/")
            .then(async (response) => {
                const sectionList = response.data.results;
                const titleList = [];
                for (let i = 0 ; i < sectionList.length ; i++) {
                    let courseUrl = sectionList[i].course;
                    const courseResponse = await axiosInstance.axios.get(courseUrl);
                    titleList.push(courseResponse.data.name);
                    let temp = {};
                    temp.section = sectionList[i].url;
                    temp.courseName = courseResponse.data.name;
                    this.sectionCourseNameList.push(temp);
                }
                this.setState(() => ({courseTitles: titleList}));
            })
            .catch((error) => {
                console.log("this is what happened: " , error);
                }
            )
    }
    handleNavigateToCourseRegister = (event) => {
        console.log(event.target.value);
        const currentSection = event.target.value;
        localStorage.setItem("currentSection", currentSection);
        this.props.history.push("/course-register");
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
                {this.sectionCourseNameList.map((section, index) => (
                    <button onClick={this.handleNavigateToCourseRegister} value={section.section} key={index}>
                        {section.courseName}
                    </button>

                ))}
            </StyledHomePage>
        );
    }
}