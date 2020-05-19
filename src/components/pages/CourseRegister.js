//general dependencies
import React from "react";
import axiosInstance from '../../connetion/axios';
import {Link} from "react-router-dom";
import Toastify from "../toastify";
import Calendar from "jalali-react-big-calendar";
import moment from "moment-jalaali";
import {momentLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import mapboxgl from 'mapbox-gl';

//custom dependencies
import StyledCourseRegister from "../../styled-components/StyledCouresRegister";
import HomePageLink from "../HomePageLink";
import MenuLink from "../MenuLink";
import bbb from "../../assets/images/HomePageLink@2x.png";
import instructor from "../../assets/images/course register/Rectangle 143636@2x.png";
import hotOffer from "../../assets/images/course register/Group 62810.png";
import courseInfoIcon from "../../assets/images/course register/Group 62655.png";
import shareIcon from "../../assets/images/course register/Path 36406.png";

const localizer = momentLocalizer(moment);
moment.loadPersian({dialect: 'persian-modern'});

export default class CourseRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseName: "",
            sectionObject: {},
            courseContentTextUrls: [],
            courseContentFileUrls: [],
            courseContentTextObjects: [],
            courseContentFileObjects: [],
            sectionSessions: [],
            section_payment_packages: [],
            allPaymentPackages: [],
            longitude: null,
            latitude: null,

            events: [

            ]
        }
        this.toast = new Toastify().toast;
        this.persianMonths = ["", "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
    }

    componentDidMount() {
        const sectionUrl = localStorage.getItem("currentSection");
        let tempTexts = [];
        let tempFiles = [];
        let tempSessions = [];
        let tempPaymentPackages = [];
        let tempPayments = [];
        let tempPaymentLists = [];
        let tempPaymentDetails = [];
        axiosInstance.axios.get(sectionUrl)
            .then(async (response) => {
                this.setState(() => ({sectionObject: response.data}));
                axiosInstance.axios.get(response.data.location)
                    .then((locationResponse) => {
                        this.setState(() => ({
                            longitude: locationResponse.data.longitude,
                            latitude: locationResponse.data.latitude
                        }))
                    })
                Promise.all(response.data.section_sessions.map(sec_sess_url => axiosInstance.axios.get(sec_sess_url)))
                    .then((sec_sess_response) => {
                        tempSessions = sec_sess_response.map(s=>s.data);
                        this.setState(() => ({
                            sectionSessions: tempSessions
                        }))
                    })
                Promise.all(response.data.section_payment_packages.map(section_payment_package => axiosInstance.axios.get(section_payment_package)))
                    .then((paymentPackages) => {
                        tempPaymentPackages = paymentPackages.map(p=>p.data);
                        Promise.all(tempPaymentPackages.map(paymentPackage => axiosInstance.axios.get(paymentPackage.payment_package)))
                            .then(async (payments) => {
                                tempPayments = payments.map(p=>p.data);
                                for (let i = 0 ; i < tempPayments.length ; i++) {
                                    let paymentDetails = await Promise.all(tempPayments[i].payments.map(payment => axiosInstance.axios.get(payment)))
                                    tempPaymentDetails = paymentDetails.map(p=>p.data);
                                    tempPaymentLists.push(tempPaymentDetails);
                                }
                                this.setState(() => ({
                                    allPaymentPackages: tempPaymentLists
                                }))
                            })
                        this.setState(() => ({
                            section_payment_packages: tempPaymentPackages

                        }))
                    })
                axiosInstance.axios.get(response.data.course)
                    .then(async (course) => {
                        this.setState(() => ({courseName: course.data.name}));
                        axiosInstance.axios.get(course.data.content)
                            .then(async (CContent) => {
                                this.setState(() => ({
                                    courseContentTextUrls: CContent.data.texts,
                                    courseContentFileUrls: CContent.data.files
                                }));
                                //get list of text contents
                                Promise.all(CContent.data.texts.map(textUrl => axiosInstance.axios.get(textUrl))).then(tempTextsResponses => {
                                    tempTexts = tempTextsResponses.map(e=>e.data);
                                    this.setState(() => ({
                                        courseContentTextObjects: tempTexts
                                    }));
                                }).catch()
                                //get list of file contents
                                Promise.all(CContent.data.files.map(fileUrl => axiosInstance.axios.get(fileUrl))).then(tempFilesResponses => {
                                    tempFiles = tempFilesResponses.map(e=>e.data);
                                    this.setState(() => ({
                                        courseContentFileObjects: tempFiles
                                    }));
                                }).catch()
                            })
                        console.log(course);
                    })
            })
            .catch((error) => {
                this.toast.error("با عرض پوزش مشکلی در سامانه بوجود آمده است");
                console.log(error);
            })


        setTimeout(() => {
            console.log("tempPaymentDetails: ", tempPaymentLists);



            let tempEvents = [];
            this.state.sectionSessions.map((sectionSession) => {
                let eventObject = {};
                let tempStart = moment(`${sectionSession.start_date_time}`, "YYYY-M-D HH:mm:ss");
                let tempEnd = tempStart.add(sectionSession.duration, 'hours');
                eventObject.start = tempStart.toDate();
                eventObject.end = tempEnd.toDate();
                tempEvents.push(eventObject);
                // console.log("thousands of hours: !!!!", sectionSession.start_date_time);
            })
            this.setState(() => ({
                events: tempEvents
            }));

            mapboxgl.accessToken = 'pk.eyJ1IjoiYW1pcmphaGFuYmluIiwiYSI6ImNrOXExaDd4dzBmeWYzbm1tMjhoY2VwYmcifQ.Dm8fAIEqPNxQIC8pLwra0A';
            let map = new mapboxgl.Map({
                container: 'course-location-map',
                center: [this.state.longitude, this.state.latitude],
                zoom: 15,
                style: 'mapbox://styles/mapbox/streets-v11'
            });
            let marker = new mapboxgl.Marker().setLngLat([this.state.longitude, this.state.latitude]).addTo(map);
            console.log("eventtttt: ", this.state.events[0].start);
        },3000)

    }

    handleRegistration = () => {
        const token = axiosInstance.getAuthKey();
        console.log("token::::", token);
        axiosInstance.axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        axiosInstance.axios.post('/user/get_user/')
            .then(userResponse => {
                console.log(userResponse.data);
                this.toast.info("موجودی کیف پول شما کافی نمی‌باشد")
                this.props.history.push("/my-wallet");

            })
            .catch((error) => {
                this.toast.error("برای ثبت نام لطفا ابتدا وارد سایت شوید");
                this.props.history.push("/login");
            })
    }
    render() {
        if(this.state.events[0]) {
            console.log("render: ", this.state.events[0].start);
        }

        return (
            <StyledCourseRegister>
                <div className={"right-fixed-container"}>
                    <div className={"active-sidebar"}>
                        <nav className={"nav-sections"}>
                            <ul className={"menu"}>
                                <li className={"menu-item"}>
                                    <a className={"menu-item-link"} href={"#course-title"}>
                                        circle
                                    </a>
                                </li>
                                <li className={"menu-item"}>
                                    <a className={"menu-item-link"} href={"#course-intro-summery"}>
                                        معرفی دوره
                                    </a>
                                </li>
                                <li className={"menu-item"}>
                                    <a className={"menu-item-link"} href={"#course-general-content"}>
                                        circle
                                    </a>
                                </li>
                                <li className={"menu-item"}>
                                    <a className={"menu-item-link"} href={"#course-instructor"}>
                                        circle
                                    </a>
                                </li>
                                <li className={"menu-item"}>
                                    <a className={"menu-item-link"} href={"#course-comments"}>
                                        circle
                                    </a>
                                </li>
                                <li className={"menu-item"}>
                                    <a className={"menu-item-link"} href={"#schedule"}>
                                        تاریخ
                                    </a>
                                </li>
                                <li className={"menu-item"}>
                                    <a className={"menu-item-link"} href={"#course-location"}>
                                        آدرس
                                    </a>
                                </li>
                                <li className={"menu-item"}>
                                    <a className={"menu-item-link"} href={"#registration"}>
                                        ثبت‌نام
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
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
                        {this.state.courseName}
                    </h1>
                </div>
                <div style={{width: "100px", height: "17vw"}}>

                </div>
                <div className={"course-intro"}>
                    <div className={"course-intro-summery"} id={"course-intro-summery"}>
                        <h1 className={"course-intro-summery-header"}>
                            {this.state.courseName}
                        </h1>
                        <p>
                            {this.state.courseContentTextObjects[0] ? this.state.courseContentTextObjects[0].body : ""}
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
                                <img src={instructor} alt={"instructor"}/>
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
                        <span style={{direction: "rtl"}}>
                            {this.state.sectionObject && this.state.sectionObject.start_date}
                        </span>
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
                                <span style={{
                                    display: "block",
                                    color: "#402D60",
                                    direction: "rtl",
                                    fontSize: "5rem"
                                }}>{this.state.sectionObject && this.state.sectionObject.duration} ساعت </span>
                            </div>
                            {<span style={{color: "#aaaaaa", fontSize: "2.5rem"}}>این دوره هم‌اکنون در شهر دیگری برگزار نمی‌شود</span>}
                        </div>
                        <div className={"schedule-calendar"}>
                            <span style={{width: "35%", paddingLeft: "5px"}}>
                            </span>
                            <Calendar
                                localizer={localizer}
                                defaultDate={moment("1399-3-17", "jYYYY-jM-jD").toDate()}
                                startAccessor={"start"}
                                endAccessor={"end"}
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
                            <span
                                style={{color: "#C7BADC", fontSize: "xxx-large", marginRight: "10px"}}>{"اصفهان"}</span>
                        </div>
                        <div>
                            <span style={{color: "#aaaaaa", fontWeight: "lighter"}}>
                                نحوه برگزاری:
                            </span>
                            <span style={{
                                color: "#C7BADC",
                                fontSize: "xxx-large",
                                marginRight: "10px"
                            }}>{"حضوری و آنلاین"}</span>
                        </div>
                    </div>
                    <div className={"course-map-address"}>
                        <div id={"course-location-map"}>
                        </div>
                        <div className={"course-location-address"}>
                            {this.state.sectionObject && this.state.sectionObject.address}
                        </div>
                    </div>
                </div>
                <div className={"registration"} id={"registration"}>
                    <div className={"reg-container"}>
                        <div className={"reg-left"}>
                            <div>
                                <span style={{display: "block", textAlign: "right"}}>ظرفیت باقیمانده</span>
                                <span style={{
                                    display: "block",
                                    textAlign: "right",
                                    direction: "rtl",
                                    wordSpacing: "30px"
                                }}>{
                                    this.state.sectionObject && this.state.sectionObject.remaining_capacity
                                }نفر </span>
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
                                <span style={{fontSize: "5rem"}}>
                                    {this.state.sectionObject && this.state.sectionObject.price}
                                </span>
                                <span>تومان</span>
                            </div>
                            <span>نحوه پرداخت خود را انتخاب کنید</span>
                            <div>
                                <button className={"pay-date"}>
                                    تاریخ پرداخت
                                </button>
                                <div className={"select-cash"}>
                                    <div className={"input-radio"}
                                         style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                        <input type={"radio"} id={"cash"} name={"cash-installment"}
                                               style={{display: "block", flexGrow: "1"}}/>
                                        <label htmlFor={"cash"} style={{display: "block", flexGrow: "9"}}>
                                            <div style={{
                                                width: "100%",
                                                border: "1px solid #402D60",
                                                borderRadius: "5px",
                                                padding: "0 10px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                margin: "10px 0"
                                            }}>
                                                <span style={{fontSize: "4rem"}}>{
                                                    this.state.allPaymentPackages[1] && this.state.allPaymentPackages[1][0].amount
                                                }</span>
                                                <span style={{flexGrow: "5", paddingRight: "10px"}}>تومان</span>
                                                <span>امروز</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div className={"input-radio"}
                                         style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                        <input type={"radio"} id={"installment"} name={"cash-installment"}
                                               style={{display: "block", flexGrow: "1"}}/>
                                        <label htmlFor={"installment"} style={{display: "block", flexGrow: "9"}}>
                                            <div style={{
                                                width: "100%",
                                                border: "1px solid #402D60",
                                                borderRadius: "5px",
                                                padding: "0 10px",
                                                margin: "10px 0"
                                            }}>
                                                <div style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center"
                                                }}>
                                                    <span style={{fontSize: "4rem"}}>{
                                                        this.state.allPaymentPackages[0] && this.state.allPaymentPackages[0][0].amount
                                                    }</span>
                                                    <span style={{flexGrow: "5", paddingRight: "10px"}}>تومان</span>
                                                    <span>
                                                        {
                                                            this.state.allPaymentPackages[0] &&
                                                                this.state.allPaymentPackages[0][0].date ?
                                                                this.state.allPaymentPackages[0][0].date : "امروز"
                                                        }

                                                    </span>
                                                </div>
                                                <div style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center"
                                                }}>
                                                    <span style={{fontSize: "4rem"}}>{
                                                        this.state.allPaymentPackages[0] && this.state.allPaymentPackages[0][1].amount
                                                    }</span>
                                                    <span style={{flexGrow: "5", paddingRight: "10px"}}>تومان</span>
                                                    <span>
                                                        {
                                                            this.state.allPaymentPackages[0] &&
                                                            this.state.allPaymentPackages[0][1].date ?
                                                                moment(this.state.allPaymentPackages[0][1].date, "YYYY-M-D")
                                                                    .format("jYYYY/jM/jD") : "امروز"

                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                    <span style={{display: "block"}}>
                                        برای پرداخت اقساطی باید کلیه فیلد‌های‌
                                        <Link to={"/my-profile"}>
                                            مشخصات من
                                        </Link>
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
                    <input type={"submit"} onClick={this.handleRegistration} value={"ثبت‌نام می‌کنم"} id={"submit-registration"}/>
                </div>
            </StyledCourseRegister>
        );
    }
}
