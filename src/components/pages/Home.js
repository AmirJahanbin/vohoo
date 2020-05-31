import React from "react";
import axios from "axios";
import axiosInstance from '../../connetion/axios';
import styled from "styled-components";
import {Link} from "react-router-dom";
import HomePageLink from "../HomePageLink";
import MenuLink from "../MenuLink";
import mainTree from "../../assets/images/home page/main sample2.png";
import imageTitle1 from "../../assets/images/home page/Group 62853@2x.png";

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
                    temp.id = sectionList[i].id;
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
        console.log("id: ", event.target.value);
        const currentSection = event.target.value;
        localStorage.setItem("currentSection", currentSection);
        // this.props.history.push("/course-register");
    }
    render() {
        console.log("section course name list:", this.sectionCourseNameList);
        return (
            <div>
                <img src={mainTree} useMap={"#image-map"} alt={"home-main-tree"}/>
                {/*<map name={"image-map"}>*/}
                {/*    <area coords={"207,508,72"} shape={"circle"} alt={"sib"}/>*/}
                {/*</map>*/}
                    <map name={"image-map"}>
                        <area target="" alt="test" title="test" href="#" coords="207,508,72" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="359,588,67" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="398,901,64" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="618,655,61" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="773,685,60" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="1125,684,57" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="1278,655,62" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="1539,590,68" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="1688,508,65" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="1501,901,67" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="163,772,50" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="524,144,45" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="829,397,60" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="949,302,64" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="1067,399,61" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="1371,147,49" shape="circle"/>
                        <area target="" alt="test" title="test" href="#" coords="1735,775,51" shape="circle"/>
                    </map>
            </div>

        );
    }
}