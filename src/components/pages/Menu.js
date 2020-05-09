import React from "react";
import {Link} from "react-router-dom";
import HomePageLink from "../HomePageLink";
import styled from "styled-components";
import closeIcon from "../../assets/images/close icon.png";
import closeIconHover from "../../assets/images/close icon hover.png";
import background from "../../assets/images/birds3-@2x.png"

const StyledMenuMiddleContainer = styled.div`
  background-color: rgba(64, 45, 96, 0.5);
  background-image: url(${background});
  background-blend-mode: color-burn;
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
      font-size: 2vw;
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
    margin-bottom: 100px;
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
  min-height: 100vh;
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
            lastEvents: [
                "شروع مسابقه دوره شناخت",
                "شما از فلانی پیام دارید",
                "جلسه فردا ۱۵ دقیقه زودتر برگزار می شود",
                "آره خلاصه اینجورس قضیه",
                "شروع مسابقه دوره شناخت",
                "شما از فلانی پیام دارید",
                "جلسه فردا ۱۵ دقیقه زودتر برگزار می شود",
                "آره خلاصه اینجورس قضیه",
                "شروع مسابقه دوره شناخت",
                "شما از فلانی پیام دارید",
                "جلسه فردا ۱۵ دقیقه زودتر برگزار می شود",
                "آره خلاصه اینجورس قضیه",
                "شروع مسابقه دوره شناخت",
                "شما از فلانی پیام دارید",
                "جلسه فردا ۱۵ دقیقه زودتر برگزار می شود",
                "آره خلاصه اینجورس قضیه",
                "شروع مسابقه دوره شناخت",
                "شما از فلانی پیام دارید",
                "جلسه فردا ۱۵ دقیقه زودتر برگزار می شود",
                "آره خلاصه اینجورس قضیه"
            ]
        }
    }

    render() {
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
                        <div className={"middle-menu-top"}>
                            <Link to={"/my-knowledge-tree"}>درخت آگاهی من</Link>
                            <Link to={"/my-courses"}>دوره‌های من</Link>
                            <Link to={"/my-association"}>انجمن‌های من</Link>
                        </div>
                        <div className={"middle-menu-bottom"}>
                            <Link to={"/my-profile"}>مشخصات من</Link>
                            <Link to={"/invoice"}>صورت مالی من</Link>
                            <Link to={"/my-activity"}>حضور من</Link>
                        </div>
                    </div>
                    <div className={"last-events"}>
                        <span id={"last-events-title"}>آخرین اتفاق‌‌ها</span>
                        <div id={"last-events-container"}>
                            {this.state.lastEvents.map((lastEvent, index) => (
                                <div className={"last-event"} key={index}>
                                    <input type={"image"} src={closeIcon} className={"last-event-close-icon"} alt={"closeIcon"}/>
                                    <Link to={""} className={"last-event-text"}>
                                        {lastEvent}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Link to={"/"}>
                            <img src={closeIcon} alt={closeIcon} className={"close-icon"}/>
                        </Link>
                    </div>
                </StyledMenuMiddleContainer>
                <div className={"left-container"}>
                    <StyledMenuLeftContainer className={"left-menu-links"}>
                        <HomePageLink className={"top-left-home-page-logo"}/>
                        <Link to={"/sign-up"}>عضویت در سایت</Link>
                        <div className={"about-us-contact-us"}>
                            <Link to={"/about-us"}>داستان ما</Link>
                            <Link to={"/contact-us"}>ارتباط با ما</Link>
                        </div>
                    </StyledMenuLeftContainer>
                </div>


                {/*<Link to={"/"}>Go home</Link>*/}
                {/*<Link to={""}>درخت آگاهی من</Link>*/}
                {/*<Link to={"/my-courses"}>دوره های من</Link>*/}
                {/*<Link to={""}>ارتباطات من</Link>*/}

                {/*<Link to={"/my-profile"}>مشخصات من</Link>*/}
                {/*<Link to={"/invoice"}>صورت مالی من</Link>*/}
                {/*<Link to={"/my-activity"}>حضور من</Link>*/}
                {/*<Link to={"/sign-up"}>عضویت در سایت</Link>*/}
                {/*<Link to={""}>داستان ما</Link>*/}
                {/*<Link to={"/about-us"}>ارتباط با ما</Link>*/}
                {/*<h3>This is Menu page!</h3>*/}
            </div>
        );
    }
}