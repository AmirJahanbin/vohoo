import React from "react";
import {Link} from "react-router-dom";
import HomePageLink from "../HomePageLink";
import styled from "styled-components";
import closeIcon from "../../assets/images/close icon.png";
import closeIconHover from "../../assets/images/close icon hover.png";
import background from "../../assets/images/AloneTree.png"
import axiosInstance from "../../connetion/axios";
import avatar from "../../assets/images/avatar.png"
import {toast} from "react-toastify";

const StyledMenuMiddleContainer = styled.div`
  background-color: rgba(94, 190, 15, 0.7);
  background-image: url(${background});
  background-blend-mode: color-burn;
  background-position: 0 -60px;
  background-repeat: no-repeat;
  background-size: 50%;
  
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    font-family: MJ_thameen, sans-serif;    
    
  @media screen and (max-width: 992px) {
    .middle-menu {
      min-height: 50vh;
    }
  }
  .middle-menu {
    display: flex;
    min-height: 50vh;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
    
  }
  .middle-menu-top {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 3.5vw;
    & a {
      color: #23083D;
    }
  }
  .middle-menu-bottom {
      display: flex;
      flex-direction: column;
      font-size: 60px;
      & a {
        color: white;
      }
    }
  .last-events {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    flex-basis: 460px;
    text-align: right;
    padding-right: 100px;
    margin-bottom: 60px;
    min-height: 45vh;
    max-height: 45vh;
  }
  #last-events-container {
    min-height: 45vh;
    max-height: 45vh;
    overflow-y: scroll;
    ::-webkit-scrollbar{
      width: 2px;
    }
    ::-webkit-scrollbar-thumb {
      background: lightgray;
      border-radius: 50%;
    }
    padding-right: 9px;
    
    overflow: -moz-scrollbars-none;
  }
  
  #last-events-title {
    position: sticky;
    top: 0;
    font-size: 2vw;
    font-weight: 300;
    border-bottom: 1px solid #707070;
  }
  .last-event {
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;    
    font-size: 1.5vw;
    font-weight: 200;    
    margin: 5px 0 5px 5px;  
    & input {
      margin: 0 0 0 10px;
      width: 20px;
      height: 20px;
    }
    & a {
      color: #23083D;
    }
  }
  .last-event-text:hover {
    font-weight: 400;
  }
  .last-event-close-icon:hover {
    background-image: url(${closeIconHover});
  }
  // .close-icon:hover {
  //   background-image: url(${closeIconHover});
  //   background-repeat: no-repeat;
  //   background-size: cover;
  // }
`;

const StyledMenuRightContainer = styled.div`
  @media screen and (max-width: 992px) {
    min-height: 50vh;
  }  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  min-height: 300px;
  font-size: 1.5vw;
  border-right: 1px solid #23083D;
  padding-right: 5px;
  font-family: MJ_thameen,sans-serif;
  font-weight: lighter;
  & a {
    color: #402D60;    
  }
  & a:hover {
    font-weight: 400;
  }
`;

const StyledMenuLeftContainer = styled.div`
  @media screen and (max-width: 992px) {
    min-height: 50vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  min-height: 100vh;
  font-family: MJ_thameen,sans-serif;
  font-weight: lighter;
  font-size: 1.3vw;
  
  .profile-image {
  cursor: pointer;
    background-image: url(${props => props.avatar ? props.avatar : avatar});
    background-size: ${props => props.avatar ? "cover" : "70%"};
    width: 100px;
    height: 100px;
    border: 2px solid #D9D9D9;
    border-radius: 20px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .show-logout-container {
    position: absolute;
    display: ${props => props.logoutVisibility ? "unset" : "none"};
    width: 100px;
    top: 20vh;
  }
  .show-logout-btns {
    background-color: lightgreen;
    display: block;
    width: 100%;
    border: 1px solid green;
    margin: 5px 0;
    border-radius: 20px;
  }
  
  .about-us-contact-us {
    display: flex;
    flex-direction: column;
    border-left: 1px solid #23083D;
    padding-left: 5px;
    margin-bottom: 50px;
  }
  & a {
    color: #402D60;
  }
  & a:hover {
    font-weight: 400;
  }
`;

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            image: "",
            notifications: [],
            isLoggedIn: "",
            logoutVisibility: false,
            lastEvents: [
                // "شروع مسابقه دوره شناخت",
                // "شما از فلانی پیام دارید",
                // "جلسه فردا ۱۵ دقیقه زودتر برگزار می شود",
                // "آره خلاصه اینجورس قضیه",
                // "شروع مسابقه دوره شناخت",
                // "شما از فلانی پیام دارید",
                // "جلسه فردا ۱۵ دقیقه زودتر برگزار می شود",
                // "آره خلاصه اینجورس قضیه",
                // "شروع مسابقه دوره شناخت",
                // "شما از فلانی پیام دارید",
                // "جلسه فردا ۱۵ دقیقه زودتر برگزار می شود",
                // "آره خلاصه اینجورس قضیه",
                // "شروع مسابقه دوره شناخت",
                // "شما از فلانی پیام دارید",
                // "جلسه فردا ۱۵ دقیقه زودتر برگزار می شود",
                // "آره خلاصه اینجورس قضیه",
                // "شروع مسابقه دوره شناخت",
                // "شما از فلانی پیام دارید",
                // "جلسه فردا ۱۵ دقیقه زودتر برگزار می شود",
                // "آره خلاصه اینجورس قضیه"
            ]
        }
    }

    async componentDidMount() {
        const token = axiosInstance.getAuthKey();
        axiosInstance.axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        const response = await axiosInstance.axios.post('/user/get_user/')
        const profileResponse = await axiosInstance.axios.get(`/information/profile/${response.data.id}/`);
        const {first_name, last_name, image, notifications} = profileResponse.data;
        this.setState(() => ({
            first_name,
            last_name,
            image,
            notifications,
            isLoggedIn: true
        }), () => console.log("after setState menu: ", this.state));

        axiosInstance.axios.get('/information/my_notifications')
            .then((notificationResponse) => {
                console.log("menu notify: ", notificationResponse.data);
                let lastEvents = notificationResponse.data.notifications;
                this.setState(() => ({lastEvents: lastEvents}))
            })

    }

    handleLogout = (event) => {
        axiosInstance.axios.post('/auth/logout/')
            .then(() => {
                localStorage.removeItem("token");
                this.setState({isLoggedIn: false});
                window.location.reload();
            })
    }

    render() {
        // document.body.addEventListener("click", () => this.setState({logoutVisibility: false}));
        return (
            <div className={"main-container"}>
                <div className={"right-container"}>
                    <StyledMenuRightContainer className={"right-menu"}>
                        <Link to={"/public-help"}>مدد همگانی</Link>
                        <Link to={"/calendar"}>تقویم</Link>
                        <Link to={"/gathering"}>دورهمی</Link>
                    </StyledMenuRightContainer>
                </div>
                <StyledMenuMiddleContainer className={"middle-container"}>
                    <div className={"middle-menu"}>
                        {/*<div className={"middle-menu-top"}>*/}
                        {/*    <Link to={"/my-knowledge-tree"}>درخت آگاهی من</Link>*/}
                        {/*    <Link to={"/my-courses"}>دوره‌های من</Link>*/}
                        {/*    <Link to={"/my-association"}>انجمن‌های من</Link>*/}
                        {/*</div>*/}
                        <div className={"middle-menu-bottom"}>
                            <Link to={"/my-profile"}>مشخصات من</Link>
                            <Link to={"/my-wallet"}>کیف پول من</Link>
                            <Link to={"/invoice"}>صورت مالی من</Link>
                            <Link to={"/my-activity"}>حضور من</Link>
                        </div>
                    </div>
                    <div className={"last-events"}>
                        <span id={"last-events-title"}></span>
                        <div id={"last-events-container"}>
                            {this.state.lastEvents.map((lastEvent, index) => (
                                <div className={"last-event"} key={index}>
                                    <input type={"image"} src={closeIcon} className={"last-event-close-icon"} alt={"closeIcon"}/>
                                    <Link to={"/menu"} className={"last-event-text"}>
                                        {lastEvent}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <Link to={"/"}>*/}
                    {/*        <img src={closeIcon} alt={closeIcon} className={"close-icon"}/>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </StyledMenuMiddleContainer>
                <div className={"left-container"}>
                    <StyledMenuLeftContainer
                        className={"left-menu-links"}
                        avatar={this.state.image}
                        logoutVisibility={this.state.logoutVisibility}
                    >
                        {/*<HomePageLink className={"top-left-home-page-logo"}/>*/}
                        {
                            this.state.first_name ?
                                <div style={{margin: "20px"}}>
                                    <div
                                        className={"show-logout-container"}
                                    >
                                        <button className={"show-logout-btns"} type={"button"} onClick={() => this.props.history.push("/my-profile")}>
                                            تنظیمات کاربری
                                        </button>
                                        <button className={"show-logout-btns"} type={"button"} onClick={this.handleLogout}>
                                            خروج از سایت
                                        </button>
                                    </div>
                                    <div
                                        className={"profile-image"}
                                        onClick={() => this.setState((prevState) => ({logoutVisibility: !prevState.logoutVisibility}))}
                                    >
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        {this.state.first_name} {this.state.last_name}
                                    </div>
                                </div>
                                :
                                <Link to={"/login"}>ورود به سایت</Link>
                        }
                        <div>
                            <Link to={"/"}>
                                <img src={closeIcon} alt={closeIcon} className={"close-icon"}/>
                            </Link>
                        </div>
                        <div className={"about-us-contact-us"}>
                            <Link to={"/about-us"}>داستان ما</Link>
                            <Link to={"/contact-us"}>ارتباط با ما</Link>
                        </div>
                    </StyledMenuLeftContainer>
                </div>
            </div>
        );
    }
}