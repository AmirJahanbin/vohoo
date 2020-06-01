import React from "react";
import axios from "axios";
import axiosInstance from '../../connetion/axios';
import styled from "styled-components";
import {Link} from "react-router-dom";
import MenuLink from "../MenuLink";
import mainTree from "../../assets/images/home page/mait tree.jpg";
import menuIcon from "../../assets/images/home page/Component 202 – 11.png";
import healthIcon from "../../assets/images/home page/health.png";
import cofeeIcon from "../../assets/images/home page/iconfinder_coffee_cup_drink_hot_tea_392514.png";
import eyeIcon from "../../assets/images/home page/iconfinder_eye_preview_see_seen_view_392505.png";
import musicIcon from "../../assets/images/home page/iconfinder_icon-music_2867929.png";
import weespoSchool from "../../assets/images/home page/weespo school.png";
import aaIcon from "../../assets/images/home page/aa.png";
import flagIcon from "../../assets/images/home page/flag.png";


import football from "../../assets/ywrw_2008_0.mp3";

const StyledHomePage = styled.div`
  background-color: #0E4736;
  width: 100vw;
  max-height: 100vh;
  @-moz-document url-prefix() {
      {
        max-width: 99.3vw;
      }
  }
    
  #main-tree {
    max-width: 100vw;
    max-height: -webkit-fill-available;
    @-moz-document url-prefix() {
      {
        max-width: 99vw;
        height: inherit;
      }
    }
    margin: auto;
    display: block;
  }
  .home-taskbar-container {
    background-color: #D58411;
    height: 7.41vh;
    width: 100%;    
    & a {
      display: flex;
      align-items: center;
    }
  }
  .main-tree-container {
    height: 92.59vh;
    @-moz-document url-prefix() {
    {
      height: 91.2vh;
    }
    }
  }
  .home-taskbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //max-width: 1300px;
    height: 100%;
    margin: auto;
    > div {
      flex-basis: 33%;
    }
  }
  .left-taskbar {
    display: flex;
    //margin-left: 40px;
    align-items: flex-end;
    justify-content: space-between;
    width: 60%;
    img {
      margin-right: 20px;
      height: 3px;
    }
  }
  .right-taskbar {
    margin-right: 40px;
    display: flex;
    justify-content: flex-end;
    img {
      margin-left: 50px;
    }
  }
  #weespo-school {
    width: 290px;
    height: 60px;
    margin: auto;
    display: block;
  }
`;

const StyledHomeTaskbar = styled.div`
  width: ${props => props.width};
`;
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseTitles: [''],
            isPlaying: true,
            width: window.innerWidth,
        }
        this.sectionCourseNameList = [];
    }

    async componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
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
    updateWidth = () => {
        this.setState(() => ({width: window.innerWidth}), () => console.log("resized: ", this.state.width));
    }
    handleNavigateToCourseRegister = (event) => {
        console.log("id: ", event.target.value);
        const currentSection = event.target.value;
        localStorage.setItem("currentSection", currentSection);
        // this.props.history.push("/course-register");
    }
    handlePlayPause = () => {

        this.setState((pre) => ({isPlaying: !pre.isPlaying}), () => {
            console.log("music");
            const aud = document.getElementById("music-home-page");
            console.log(aud);
            this.state.isPlaying ? aud.play() : aud.pause();
        })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(document.getElementById("main-tree").width);
    // }

    render() {
        return (
            <StyledHomePage>

                {/*<map name={"image-map"}>*/}
                {/*    <area alt="test" title="test" coords="207,508,72" shape="circle" style={{backgroundColor: "red"}}/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="359,588,67" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="398,901,64" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="618,655,61" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="773,685,60" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="1125,684,57" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="1278,655,62" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="1539,590,68" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="1688,508,65" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="1501,901,67" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="163,772,50" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="524,144,45" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="829,397,60" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="949,302,64" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="1067,399,61" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="1371,147,49" shape="circle"/>*/}
                {/*    <area target="" alt="test" title="test" href="#" coords="1735,775,51" shape="circle"/>*/}
                {/*</map>*/}
                <div className={"main-tree-container"} >
                    <img src={mainTree} useMap={"#image-map"} alt={"home-main-tree"} id={"main-tree"}/>
                </div>
                <div className={"home-taskbar-container"}>
                    <StyledHomeTaskbar className={"home-taskbar"} width={`${this.state.width - 80}px`}>
                        <div style={{marginLeft: "40px"}}>
                            <div className={"left-taskbar"}>
                                <Link to={"/menu"}>
                                    <img src={menuIcon} alt={"go to menu page"} title={"منو"} style={{width: "90px"}}/>
                                </Link>
                                <Link to={"#"}>
                                    <img src={flagIcon} alt={"دوره‌های آموزشی من"} title={"دوره‌های آموزشی من"}/>
                                </Link>
                                <Link to={"#"}>
                                    <img src={healthIcon} alt={"health"} title={"سلامت جسمی"}/>
                                </Link>
                                <Link to={"#"}>
                                    <img src={cofeeIcon} alt={"study"} title={"مطالعه و ارتباط"} style={{marginRight: "unset", height: "32px"}}/>
                                </Link>
                            </div>
                        </div>
                        <div className={"middle-taskbar"}>
                            <img src={weespoSchool} alt={"مدرسه بالندگی ویسپو"} id={"weespo-school"}/>
                        </div>
                        <div className={"right-taskbar"}>
                            <Link to={"#"}>
                                <img src={aaIcon} alt={"حامی"} title={"حامی"}/>
                            </Link>
                            {/*<Link to={"#"}>*/}
                            <audio src={football} id={"music-home-page"} >
                            </audio>
                            <img src={musicIcon} alt={"آهنگ سایت"} title={"موزیک"}  onClick={this.handlePlayPause}/>
                            {/*</Link>*/}
                            <Link to={"#"}>
                                <img src={eyeIcon} alt={"دوره‌های آموزشی"} title={"دوره‌های آموزشی"}/>
                            </Link>
                        </div>
                    </StyledHomeTaskbar>
                </div>
            </StyledHomePage>

        );
    }
}