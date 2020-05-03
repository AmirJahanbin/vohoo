//general dependencies
import React from "react";
import moment from 'moment-with-locales-es6';
import {Link} from "react-router-dom";
// import moment from "moment-jalaali";
import styled from "styled-components";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import mapboxgl from 'mapbox-gl';

//custom dependencies
import HomePageLink from "../HomePageLink";
import MenuLink from "../MenuLink";
import schemeBackground from "../../assets/images/course register/scheme_background@2x.png";
import bbb from "../../assets/images/HomePageLink@2x.png";
import instructor from "../../assets/images/course register/Rectangle 143636@2x.png";
import hotOffer from "../../assets/images/course register/Group 62810.png";
import courseInfoIcon from "../../assets/images/course register/Group 62655.png";
import shareIcon from "../../assets/images/course register/Path 36406.png";


const StyledCourseRegister = styled.div`
  background: url(${schemeBackground});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: top;
  font-family: MJ_thameen, sans-serif;
  
  .course-title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    //height: 700px;
    & .course-title-header {
      
      width: 100%;
      text-align: center;
      line-height: 3;
      color: white;
      font-size: 4rem;
      background-color: rgba(64, 45, 96, 0.5);
      margin: 0;
      //margin: 20% auto;
    }

  }
  .right-fixed-container {
    position: fixed;
    right: 0;
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
  
  .course-intro-summery {
    background-color: #23083D;
    min-height: 345px;
    & .course-intro-summery-header {
      width: 100%;
      text-align: center;
      line-height: 2;
      color: white;
      font-size: 4rem;
      //margin: 26% auto;
    }
    & p {
      width: 350px;
      color: #aaaaaa;
      font-size: x-large;
      border: 1px solid #aaaaaa;
      border-radius: 10px;
      text-align: right;
      padding: 10px;
      margin: auto;
    }
  }
  .course-general-content{
    background-color: #606060;
    & .styled-slider {
      width: 50%;
      margin: auto;
      --content-background-color: unset;
      --control-bullet-color: lightgray;
      --control-bullet-active-color: lightgray;
      --organic-arrow-color: lightgray;
      & .awssld__bullets {
        bottom: 10px;
      }
      & .awssld__bullets button {
        width: 10px;
        height: 10px;
        margin: 5px 10px;
      }
    }
  }
  .course-instructor {
    text-align: right;
    font-size: 2rem;
    min-height: 400px;
    & .ci-header {
      margin: 3% 22%;
    }
    & .ci-container {
      width: 80%;
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      & .ci-left {
        display: flex;
        flex-direction: column;
        justify-content: right;
      }
      & .ci-right {
        display: flex;
        flex-direction: row-reverse;
        //margin-left: 300px;
        & img {
          width: 200px;
          height: auto;
        }
        & div {
          margin: 0 10px 20px 10px;
          align-self: flex-end;
        }
      }
    }
  }
  .course-comments {
    background-color: #aaaaaa;
    & .styled-slider {
      width: 50%;
      margin: auto;
      --content-background-color: unset;
      --control-bullet-color: lightgray;
      --control-bullet-active-color: lightgray;
      --organic-arrow-color: lightgray;
      & .awssld__bullets {
        bottom: 10px;
      }
      & .awssld__bullets button {
        width: 10px;
        height: 10px;
        margin: 5px 10px;
      }
    }
  }
  .schedule {
    margin-top: 4%;
    font-family: MJ_thameen, sans-serif;
    font-size: 3rem;
    
    & .schedule-header {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
    }
    & .schedule-hour {
      color: #aaaaaa;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 20%;
      background-color: #402D60;
      & div {
        padding-top: 80px;
        & span {
          display: block;
          font-size: 1.6rem;
        }
      }
    }
    & .calendar-course-period {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      margin-bottom: 4%;
    }
    .course-period {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: right;
      margin-right: 20%;      
    }
    .schedule-calendar {
      display: flex;
      flex-direction: row-reverse;
      width: 50%;
      margin-left: 4%;
      & span {
        text-align: left;
        font-size: initial;
        line-height: 1.3;
        font-weight: lighter;
      }
    }
    & .rbc-calendar {
      font-size: initial;
      background-color: white;
      border-radius: 10px 10px 0 0;
      width: 300px;
      height: 300px;
      position: relative;
      top: -43%;
    }
    & .rbc-toolbar {
      flex-direction: column;
    }
  }
  .course-location {
    background-color: #402D60;
    font-size: x-large;
    color: #aaaaaa;
    font-family: MJ_thameen, sans-serif;
    & .course-location-city {
      width: 60%;
      margin: auto;
      padding: 30px 0;
      
    }
    & #course-location-map {
      width: 40%;
      border: 1px solid gray;
      border-radius: 10px;
    }
    & .mapboxgl-canvas {
      height: 245px;
    }
    & .course-map-address {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      padding: 30px 0;
    }
    & .course-location-address {
      text-align: right;
      padding-right: 5px;
      line-height: 1.3;
      width: 15%;
    }
  }
  
  .registration {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: large;
    margin-bottom: 100px;
    & .reg-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: stretch;  
    }
    & .reg-right {
      text-align: right;
    }
    & .reg-left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    & .pay-date {
      background-color: white;
      border: 1px solid #402d60;
      border-radius: 6px;
      width: 30%;
      font-size: large;
      font-family: MJ_thameen, sans-serif;
      margin: 20px;
    }
    & .input-radio {
      
    }
    & #submit-registration {
      width: 70vw;
      background-color: #D9D9D9;
      border: 2px solid #23083D;
      border-radius: 10px;
      font-family: MJ_thameen,sans-serif;
      font-weight: bold;
      font-size: 4rem;
      margin: auto;
    }
    & #submit-registration:hover {
      outline: none;
      border: 3px solid #23083D;
      cursor: pointer;
    }
  }
`;

const localizer = momentLocalizer(moment);
export default class CourseRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            events: [
                {
                    start: moment().toDate(),
                    end: moment()
                        .add(1, "days")
                        .toDate(),
                    title: "Some title"
                }
            ]
        }
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYW1pcmphaGFuYmluIiwiYSI6ImNrOXExaDd4dzBmeWYzbm1tMjhoY2VwYmcifQ.Dm8fAIEqPNxQIC8pLwra0A';
        let map = new mapboxgl.Map({
            container: 'course-location-map',
            style: 'mapbox://styles/mapbox/streets-v11'
        });
    }

    render() {
        return (
            <StyledCourseRegister>
                {/*<div className={"right-fixed-container"}>*/}
                {/*    <div className={"active-sidebar"}>*/}
                {/*        <nav className={"nav-sections"}>*/}
                {/*            <ul className={"menu"}>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#course-title"}>*/}
                {/*                        circle*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#course-intro-summery"}>*/}
                {/*                        معرفی دوره*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#course-general-content"}>*/}
                {/*                        circle*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#course-instructor"}>*/}
                {/*                        circle*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#course-comments"}>*/}
                {/*                        circle*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#schedule"}>*/}
                {/*                        تاریخ*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#course-location"}>*/}
                {/*                        آدرس*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#registration"}>*/}
                {/*                        ثبت‌نام*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </nav>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={"left-fixed-container"}>
                    <div className={"home-menu-link"}>
                        <HomePageLink className={"top-left-home-page-logo"}/>
                        <MenuLink className={"down-left-menu-link"}/>
                    </div>
                </div>
                <div style={{width: "100px", height: "17vw"}}>

                </div>
                <div className={"course-title"} id={"course-title"}>
                    <h1 className={"course-title-header"}>
                        طرحواره درمانی مقدماتی
                    </h1>
                </div>
                <div style={{width: "100px", height: "17vw"}}>

                </div>
                <div className={"course-intro"}>
                    <div className={"course-intro-summery"} id={"course-intro-summery"}>
                        <h1 className={"course-intro-summery-header"}>
                            طرحواره درمانی مقدماتی
                        </h1>
                        <p>
                            باور‌های عمیق و مقاومی هستند که در دوران کودکی تا جوانی‌ درباره خودمان دیگران و جهان اطراف در ذهن ما شکل گرفته‌اند.
                        </p>
                    </div>
                    <div className={"course-general-content"} id={"course-general-content"}>
                        <AwesomeSlider className={"styled-slider"}>
                            {/*<div>*/}
                            {/*    <iframe width={"500px"} height={"300px"} src="https://www.youtube.com/embed/OQt238sa84E"*/}
                            {/*            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
                            {/*            allowFullScreen>*/}
                            {/*    </iframe>*/}
                            {/*</div>*/}
                            <div>
                                <img src={bbb} alt={"bbb"}/>
                            </div>
                            <div>
                                <img src={bbb} alt={"bbb"}/>
                            </div>
                            <div>
                                <img src={bbb} alt={"bbb"}/>
                            </div>
                            <div>
                                <img src={bbb} alt={"bbb"}/>
                            </div>
                            <div>
                                <img src={bbb} alt={"bbb"}/>
                            </div>
                        </AwesomeSlider>
                    </div>
                    <div className={"course-instructor"} id={"course-instructor"}>
                        <h2 className={"ci-header"}>مدرس</h2>
                        <div className={"ci-container"}>
                            <div className={"ci-left"}>
                                <span>آشنایی با ذهن</span>
                                <span>روش های درمانی</span>
                                <span>روش های درمانی</span>
                                <span>روش های درمانی</span>
                                <span>روش های درمانی</span>
                                <span>روش های درمانی</span>
                            </div>
                            <div className={"ci-right"}>
                                <img src={instructor} alt={"instructor-image"}/>
                                <div>
                                    <h2>آرش لطفی</h2>
                                    <h3>فوق لیسانس روانشناسی بالینی</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"course-comments"} id={"course-comments"}>
                        <AwesomeSlider className={"styled-slider"}>
                            {/*<div>*/}
                            {/*    <iframe width={"500px"} height={"300px"} src="https://www.youtube.com/embed/OQt238sa84E"*/}
                            {/*            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
                            {/*            allowFullScreen>*/}
                            {/*    </iframe>*/}
                            {/*</div>*/}
                            <div>
                                <img src={bbb} alt={"bbb"}/>
                            </div>
                            <div>
                                <img src={bbb} alt={"bbb"}/>
                            </div>
                            <div>
                                <img src={bbb} alt={"bbb"}/>
                            </div>
                            <div>
                                <img src={bbb} alt={"bbb"}/>
                            </div>
                            <div>
                                <img src={bbb} alt={"bbb"}/>
                            </div>
                        </AwesomeSlider>
                    </div>
                </div>
                <div className={"schedule"} id={"schedule"}>
                    <div className={"schedule-header"}>
                        <span style={{color: "#aaaaaa"}}>شروع دوره</span>
                        {<span style={{direction: "rtl"}}>{20} فروردین </span>}
                    </div>
                    <div className={"schedule-hour"}>
                        <span style={{fontSize: "4rem"}}>ساعت برگزاری</span>
                        {<span style={{color: "#C7BADC", fontSize: "5rem"}}>پنجشنبه ۱۵:۳۰ - ۱۹:۳۰</span>}
                        {<span style={{color: "#C7BADC", fontSize: "5rem"}}>پنجشنبه ۱۵:۳۰ - ۱۹:۳۰</span>}
                        <div>
                            <span>حداقل ۱۵ دقیقه زودتر در محل حاضر شوید</span>
                            <span>امکان حضور بعد از ساعت اعلام شده نیست</span>
                        </div>
                    </div>
                    <div className={"calendar-course-period"}>
                        <div className={"course-period"}>
                            <div>
                                <span style={{display: "block", color: "#aaaaaa"}}>مدت دوره</span>
                                <span style={{display: "block", color: "#402D60", direction: "rtl", fontSize: "5rem"}}>{47} ساعت </span>
                            </div>
                            {<span style={{color: "#aaaaaa", fontSize: "2.5rem"}}>این دوره هم‌اکنون در شهر دیگری برگزار نمی‌شود</span>}
                        </div>
                        <div className={"schedule-calendar"}>
                            <span style={{width: "35%", paddingLeft: "5px"}}>
                                به دلیل پیوستگی  و اهمیت مطالب در صورتی که در روزهای با نوار قرمز غیبت داشته باشید، امکان ادامه در این دوره را ندارید و باید با دوره بعدی ادامه دهید
                            </span>
                            <Calendar
                                localizer={localizer}
                                defaultDate={new Date()}
                                defaultView="month"
                                events={this.state.events}
                            />
                        </div>

                    </div>
                </div>
                <div className={"course-location"} id={"course-location"}>
                    <div className={"course-location-city"}>
                        <div>
                            <span style={{color: "#aaaaaa", fontWeight: "lighter"}}>
                                شهر برگزاری:
                            </span>
                            <span style={{color: "#C7BADC", fontSize: "xxx-large", marginRight: "10px"}}>{"اصفهان"}</span>
                        </div>
                        <div>
                            <span style={{color: "#aaaaaa", fontWeight: "lighter"}}>
                                نحوه برگزاری:
                            </span>
                            <span style={{color: "#C7BADC", fontSize: "xxx-large", marginRight: "10px"}}>{"حضوری و آنلاین"}</span>
                        </div>
                    </div>
                    <div className={"course-map-address"}>
                        <div id={"course-location-map"}>
                        </div>
                        <div className={"course-location-address"}>
                            {"باغ غدیر.  خیابان علامه امینی شرقی. خیابان فردوس.خیابان اول  فردوس ،  پلاک 269. ساختمان ونوس( سمت راست خیابان ،چهارمین ساختمان) طبقه 5\n" +
                            "\n" +
                            "32616435"}
                        </div>
                    </div>
                </div>
                <div className={"registration"} id={"registration"}>
                    <div className={"reg-container"}>
                        <div className={"reg-left"}>
                            <div>
                                <span style={{display: "block", textAlign: "right"}}>ظرفیت باقیمانده</span>
                                <span style={{display: "block", textAlign: "right",direction: "rtl",wordSpacing: "30px"}}>{"۱۶"}نفر </span>
                            </div>
                            <div>
                                <div style={{display: "flex", flexDirection: "row-reverse", alignItems: "center"}}>
                                    <span style={{margin: "10px"}}>پیشنهاد ویژه</span>
                                    <img src={hotOffer} alt={"hot-offer"}/>
                                </div>
                                <div style={{display: "flex", flexDirection: "row-reverse", alignItems: "center"}}>
                                    <span style={{margin: "10px"}}>اشتراک گذاری</span>
                                    <img src={shareIcon} alt={"share"}/>
                                </div>
                                <div style={{display: "flex", flexDirection: "row-reverse", alignItems: "center"}}>
                                    <span style={{margin: "10px"}}>اطلاعات دوره</span>
                                    <img src={courseInfoIcon} alt={"course-info"}/>
                                </div>
                            </div>
                        </div>
                        <div className={"reg-right"} style={{direction: "rtl"}}>
                            <h1>مبلغ دوره</h1>
                            <div>
                                <span style={{fontSize: "5rem"}}>{"۶۳۰۰۰۰"}</span>
                                <span>تومان</span>
                            </div>
                            <span>نحوه پرداخت خود را انتخاب کنید</span>
                            <div>
                                <button className={"pay-date"}>
                                    تاریخ پرداخت
                                </button>
                                <div className={"select-cash"}>
                                    <div className={"input-radio"} style={{display: "flex",flexDirection: "row", alignItems: "center"}}>
                                        <input type={"radio"} id={"cash"} name={"cash-installment"} style={{display: "block", flexGrow: "1"}}/>
                                        <label htmlFor={"cash"} style={{display: "block",flexGrow: "9"}}>
                                            <div style={{width: "100%",border: "1px solid #402D60",borderRadius: "5px", padding: "0 10px",
                                                display: "flex", justifyContent: "space-between", alignItems: "center", margin: "10px 0"}}>
                                                <span style={{fontSize: "4rem"}}>{"600000"}</span>
                                                <span style={{flexGrow: "5", paddingRight: "10px"}}>تومان</span>
                                                <span>امروز</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div className={"input-radio"} style={{display: "flex",flexDirection: "row", alignItems: "center"}}>
                                        <input type={"radio"} id={"installment"} name={"cash-installment"} style={{display: "block", flexGrow: "1"}}/>
                                        <label htmlFor={"installment"} style={{display: "block",flexGrow: "9"}}>
                                            <div style={{width: "100%", border: "1px solid #402D60",borderRadius: "5px", padding: "0 10px", margin: "10px 0"}}>
                                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                                    <span style={{fontSize: "4rem"}}>{"130000"}</span>
                                                    <span style={{flexGrow: "5", paddingRight: "10px"}}>تومان</span>
                                                    <span>امروز</span>
                                                </div>
                                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                                    <span style={{fontSize: "4rem"}}>{"500000"}</span>
                                                    <span style={{flexGrow: "5", paddingRight: "10px"}}>تومان</span>
                                                    <span>{"99/1/7"}</span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                    <span style={{display: "block"}}>
                                        برای پرداخت اقساطی باید کلیه فیلد‌های‌
                                        <Link>مشخصات من</Link>
                                        ‌تکمیل شود‌‌
                                    </span>
                                    <span style={{display: "block"}}>
                                        اگر توانایی پرداخت این مبلغ را ندارید ما را مطلع کنید
                                    </span>
                                        <input type={"checkBox"} id={"terms-of-service"} required={true}/>
                                        <label htmlFor={"terms -of service"}>
                                            <Link to={"/"}>
                                                شرایط و مقررات دوره را می‌پذیرم
                                            </Link>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type={"submit"} value={"ثبت‌نام می‌کنم"} id={"submit-registration"}/>
                </div>
            </StyledCourseRegister>
        );
    }
}
