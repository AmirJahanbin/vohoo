import React from "react";
import axiosInstance from '../../connetion/axios';
// import DatePicker from 'react-datepicker2';
import {DatePicker} from "react-advance-jalaali-datepicker";
import momentJalaali from 'moment-jalaali';
import StyledForm from "../../styled-components/StyledForm";
import StyledMyProfile from "../../styled-components/StyledMyProfile";
import HomePageLink from "../HomePageLink";
import MenuLink from "../MenuLink";
import ChangePassword from "../ChangePassword";


import arrowBottom from "../../assets/images/arrowBottom.png";
import telegram from "../../assets/images/social icons/telegram-1@2x.png";
import whatsapp from "../../assets/images/social icons/whatsapp-1@2x.png";
import mail from "../../assets/images/social icons/mail-1@2x.png";
import instagram from "../../assets/images/social icons/instagram-1@2x.png";
import facebook from "../../assets/images/social icons/facebook-1@2x.png";
import youtube from "../../assets/images/social icons/youtube-1@2x.png";
import twitter from "../../assets/images/social icons/twitter-1@2x.png";


const menuList = document.getElementsByClassName("pro-form-group");
console.log(menuList);

export default class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            phone_number: [],
            date_of_birth: momentJalaali(),
            birth_order: ["first_child", "middle_child", "last_child"],
            gender: ["male", "female"],
            marital_status: ["married", "single", "divorced"],
            number_of_children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            current_job: ["integer"],
            current_job_explanation: [""],
            previous_job: ["integer"],
            previous_job_explanation: [""],
            degree: ["string"],
            degree_explanation: "",
            birth_address_province: "integer",
            birth_address_city: "integer",
            current_address_province: "integer",
            current_address_city: "integer",
            current_living_address: "integer",
            landline_number: "string",
            introducing_first_name: "string",
            introducing_last_name: "string",
            introducing_phone_number: "string",
            entertainments: ["integer"],
            films: ["string"],
            books: ["string"],
            interests_explanation: "string",
            social_media: {},
            disease_history: false,
            disease_history_explanation: "",
            drug_history: false,
            criminal_history: false,
            criminal_history_explanation: "",


            haveChildren: true,
            vCodeField: false,
            favoriteFilms: [""],
            favoriteBooks: [""],
            imageProfile: null
        };
        this.number_of_children= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.jobs = ['بافنده', 's', 'd', 'f', 'g', 'g', 'h'];
        this.degrees = ['a', 'a', 'a', 'a', 'a', 'a'];
        this.birthOrders = ["فرزند اول", "فرزند میانی", "فرزند آخر"]
        this.provinces = ['a', 'a', 'a', 'a', 'a', 'a'];
        this.cities = ['a', 'a', 'a', 'a', 'a', 'a'];
        this.interests = ['بازی‌های تخته ای'
            , 'پیک نیک'
            , 'شب نشینی'
            , 'بازی‌های رایانه‌ای'
            , 'سفر'
            , 'مهمانی رفتن'
            , 'بازی‌ های متفرقه'
            , 'اردو چند روز'
            , 'رفتن به رستوران'
            , 'بازی‌های کارتی'
            , 'ورزش کردن'
            , 'خرید کردن'
            , 'رفتن به سینما یا تئاتر'
            , 'کوه نوردی'
            , 'دوچرخه سواری'
            , 'فیلم دیدن'
            , 'کتاب خواندن'];
        this.numberOfChildren = React.createRef();

    }

    componentDidMount() {
        console.log('this is my token ===', axiosInstance.axios.defaults.headers.common['Authorization']);
    }

    DatePickerInput(props) {
        return <input className="form-field-text" {...props} >

        </input>;
    }

    handleNextInput = (event) => {
        if (event.keyCode === 13) {
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle submit called " + this.state.haveChildren);

    }
    handleOnChange = (event) => {
        console.log("handleOnChange called");
        let name = event.target.name;
        let val = event.target.value;
        this.setState(() => ({[name]: val}));
        console.log("event.target.name: " + name);
        console.log("event.target.name: " + val);

    };
    handleVerificationCode = () => {
        this.setState({vCodeField: true});
    };
    handleAddOption = () => {

    };

    handleImageFile = (event) => {
        this.setState({imageProfile: URL.createObjectURL(event.target.files[0])});
    }

    render() {
        return (

            <div className={"main-container"}>
                <div className={"right-container"}>
                    <div className={"right-fixed-container"}>
                        <div className={"active-sidebar"}>
                            <nav className={"nav-sections"}>
                                <ul className={"menu"}>
                                    <li className={"menu-item"}>
                                        <a className={"menu-item-link"} href={"personal-info"}>
                                            اطلاعات پرسنلی
                                        </a>
                                    </li>
                                    <li className={"menu-item"}>
                                        <a className={"menu-item-link"} href={"entertainments"}>
                                            علایق
                                        </a>
                                    </li>
                                    <li className={"menu-item"}>
                                        <a className={"menu-item-link"} href={"social-media"}>
                                            فضای مجازی
                                        </a>
                                    </li>
                                    <li className={"menu-item"}>
                                        <a className={"menu-item-link"} href={"case-history"}>
                                            سوابق
                                        </a>
                                    </li>
                                    <li className={"menu-item"}>
                                        <a className={"menu-item-link"} href={"#"}>
                                            مشخصات فیزیکی
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={"middle-container"}>
                    <StyledMyProfile>
                        <StyledForm onSubmit={this.handleSubmit}>
                            <div className={"personal-info"}>
                                <div className={"pro-form-group"}>
                                    <label className={"form-label-file"} id={"image-profile-label"}>
                                        <img src={this.state.imageProfile} className={"input-file-image"}
                                             id={"image-profile"}/>
                                        <input
                                            type={"file"}
                                            name={"profile_image"}
                                            className={"form-field-file"}
                                            onChange={this.handleImageFile}
                                            onKeyDown={this.handleNextInput}
                                        />
                                    </label>
                                </div>
                                {
                                    //is editing true then ->
                                    <ChangePassword/>
                                }

                                <div className={"pro-form-group"}>
                                    <input
                                        type={"text"}
                                        name={"first_name"}
                                        id={"first_name"}
                                        className={"form-field-text"}
                                        placeholder={"نام"}
                                        onChange={this.handleOnChange}
                                        onKeyDown={this.handleNextInput}
                                        // required={true}
                                        defaultValue={this.state.name}
                                    />
                                    <label htmlFor={"first_name"} className={"form-label-text"}>
                                        نام
                                    </label>
                                </div>
                                <div className={"pro-form-group"}>
                                    <input
                                        type={"text"}
                                        name={"last_name"}
                                        id={"last_name"}
                                        className={"form-field-text"}
                                        placeholder={"نام خانوادگی"}
                                        onChange={this.handleOnChange}
                                        onKeyDown={this.handleNextInput}
                                        // required={true}
                                    />
                                    <label htmlFor={"last_name"} className={"form-label-text"}>
                                        نام خانوادگی
                                    </label>
                                </div>
                                <div className={"pro-form-group"}>
                                    <label className={"form-label-file"} id={"national-card-label"}>
                                        تصویر کارت ملی
                                        <input
                                            type={"file"}
                                            name={"national_card_image"}
                                            className={"form-field-file"}
                                            onChange={this.handleImageFile}
                                            onKeyDown={this.handleNextInput}
                                        />
                                    </label>
                                </div>
                                {/*<div className={"pro-form-group"}>*/}
                                {/*    <DatePicker*/}
                                {/*        id={"date_of_birth"}*/}
                                {/*        timePicker={false}*/}
                                {/*        isGregorian={false}*/}
                                {/*        onChange={date_of_birth => this.setState({date_of_birth})}*/}
                                {/*        value={null}*/}
                                {/*        className={"form-field-text"}*/}
                                {/*        onKeyDown={this.handleNextInput}*/}
                                {/*    />*/}
                                {/*    <label className={"form-label-text"}>*/}
                                {/*        تاریخ تولد*/}
                                {/*    </label>*/}
                                {/*</div>*/}
                                <div className="pro-form-group datePicker">
                                    <DatePicker
                                        inputComponent={this.DatePickerInput}
                                        preSelected="1390/01/01"
                                        format="jYYYY/jMM/jDD"
                                        placeholder="تاریخ تولد"
                                        onChange={this.change}
                                        className={"form-field-text"}
                                        id={"date_of_birth"}
                                        onKeyDown={this.handleNextInput}
                                    />
                                    <label htmlFor={"date_of_birth"} className={"form-label-text"}>
                                        تاریخ تولد
                                    </label>
                                </div>
                                <div className={"pro-form-group hide-select-arrow"} style={{width: "300px"}}>
                                    <select
                                        id={"birth_order"}
                                        name={"birth_order"}
                                        className={"select-form-field "}
                                        onKeyDown={this.handleNextInput}
                                        onChange={this.handleOnChange}
                                    >
                                        <option value={""}>فرزند چندم</option>
                                        {this.birthOrders.map((order, index) => (
                                            <option
                                                value={order}
                                                key={index}
                                            >
                                                {order}
                                            </option>
                                        ))}
                                    </select>
                                    <img src={arrowBottom} alt={"arrow bottom"} className={"select-arrow-icon"}/>
                                </div>
                                <div className={"pro-form-group"}
                                     style={{width: "300px", justifyContent: "space-between", display: "flex"}}>
                                    <label htmlFor={"gender_male"} className={"form-label-radio checkbox-label"}>
                                        مرد
                                        <input
                                            type={"radio"}
                                            name={"gender"}
                                            className={"form-field-radio"}
                                            id={"gender_male"}
                                            onKeyDown={this.handleNextInput}
                                        />
                                        <span className={"checkmark"}> </span>
                                    </label>
                                    <label htmlFor={"gender_female"} className={"form-label-radio checkbox-label"}>
                                        زن
                                        <input
                                            type={"radio"}
                                            name={"gender"}
                                            className={"form-field-radio"}
                                            id={"gender_female"}
                                            onKeyDown={this.handleNextInput}
                                        />
                                        <span className={"checkmark"}> </span>
                                    </label>
                                </div>
                                <div className={"pro-form-group"}
                                     style={{width: "550px", justifyContent: "space-between", display: "flex"}}>
                                    <label htmlFor={"married"} className={"form-label-radio checkbox-label"}>
                                        متأهل
                                        <input
                                            type={"radio"}
                                            name={"marital_status"}
                                            className={"form-field-radio"}
                                            id={"married"}
                                            value={"married"}
                                            onChange={() => (this.setState({haveChildren: true}))}
                                        />
                                        <span className={"checkmark"}> </span>
                                    </label>
                                    <label htmlFor={"unmarried"} className={"form-label-radio checkbox-label"}>
                                        مجرد
                                        <input
                                            type={"radio"}
                                            name={"marital_status"}
                                            className={"form-field-radio"}
                                            id={"unmarried"}
                                            value={"unmarried"}
                                            onKeyDown={this.handleNextInput}
                                            onChange={(c) => {
                                                console.log(c.target.value);
                                                this.numberOfChildren.current.value = null;
                                                return this.setState({haveChildren: false});
                                            }}
                                        />
                                        <span className={"checkmark"}> </span>
                                    </label>
                                    <label htmlFor={"divorced"} className={"form-label-radio checkbox-label"}>
                                        متارکه
                                        <input
                                            type={"radio"}
                                            name={"marital_status"}
                                            className={"form-field-radio"}
                                            id={"divorced"}
                                            value={"divorced"}
                                            onKeyDown={this.handleNextInput}
                                            onChange={() => (this.setState({haveChildren: true}))}
                                        />
                                        <span className={"checkmark"}> </span>
                                    </label>
                                </div>
                                {/*<div className={"pro-form-group"}>*/}
                                {/*    <input*/}
                                {/*        type={"number"}*/}
                                {/*        name={"number_of_children"}*/}
                                {/*        id={"number-of-children"}*/}
                                {/*        className={"form-field-text"}*/}
                                {/*        onChange={this.handleOnChange}*/}
                                {/*        placeholder={"تعداد فرزندان"}*/}
                                {/*        onKeyDown={this.handleNextInput}*/}
                                {/*        disabled={!this.state.haveChildren}*/}
                                {/*        ref={this.numberOfChildren}*/}
                                {/*    />*/}
                                {/*    <label htmlFor={"number-of-children"} className={"form-label-text"}>*/}
                                {/*        تعداد فرزندان*/}
                                {/*    </label>*/}
                                {/*</div>*/}
                                <div className={"pro-form-group hide-select-arrow"} style={{width: "300px"}}>
                                    <select
                                        id={"number_of_children"}
                                        name={"number_of_children"}
                                        className={"select-form-field "}
                                        onKeyDown={this.handleNextInput}
                                        onChange={this.handleOnChange}
                                    >
                                        <option value={""}>تعداد فرزندان</option>
                                        {this.number_of_children.map((number, index) => (
                                            <option
                                                value={number}
                                                key={index}
                                            >
                                                {number}
                                            </option>
                                        ))}
                                    </select>
                                    <img src={arrowBottom} alt={"arrow bottom"} className={"select-arrow-icon"}/>
                                </div>
                                <div className={"inline-form-groups"}>
                                    <div className={"pro-form-group hide-select-arrow"}>
                                        <select
                                            id={"current_job"}
                                            name={"current_job"}
                                            className={"select-form-field "}
                                            onKeyDown={this.handleNextInput}
                                            onChange={this.handleOnChange}

                                        >
                                            <option value={""}>شغل فعلی</option>
                                            {this.jobs.map((job, index) => (
                                                <option
                                                    value={job}
                                                    key={index}
                                                >
                                                    {job}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={arrowBottom} alt={"arrow bottom"} className={"select-arrow-icon"}/>
                                    </div>
                                    <div className={"pro-form-group"} style={{marginRight: "40px"}}>
                                        <input
                                            type={"text"}
                                            name={"current_job_explanation"}
                                            id={"current_job_explanation"}
                                            className={"form-field-text"}
                                            onChange={this.handleOnChange}
                                            placeholder={"توضیحات"}
                                            onKeyDown={this.handleNextInput}
                                            style={{width: "600px"}}
                                        />
                                        <label htmlFor={"current_job_explanation"} className={"form-label-text"}>
                                            توضیحات
                                        </label>
                                    </div>
                                </div>
                                <div className={"inline-form-groups"}>
                                    <div className={"pro-form-group hide-select-arrow"}>
                                        <select
                                            id={"previous_job"}
                                            name={"previous_job"}
                                            className={"select-form-field"}
                                            onKeyDown={this.handleNextInput}
                                        >
                                            <option value={""}>شغل قبلی</option>
                                            {this.jobs.map((job, index) => (
                                                <option value={job} key={index}>
                                                    {job}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={arrowBottom} alt={"arrow bottom"} className={"select-arrow-icon"}/>
                                    </div>
                                    <div className={"pro-form-group"} style={{marginRight: "40px"}}>
                                        <input
                                            type={"text"}
                                            name={"previous_job_explanation"}
                                            id={"previous_job_explanation"}
                                            className={"form-field-text"}
                                            onChange={this.handleOnChange}
                                            placeholder={"توضیحات"}
                                            onKeyDown={this.handleNextInput}
                                            style={{width: "600px"}}
                                        />
                                        <label htmlFor={"previous_job_explanation"} className={"form-label-text"}>
                                            توضیحات
                                        </label>
                                    </div>
                                </div>
                                <div className={"inline-form-groups"}>
                                    <div className={"pro-form-group hide-select-arrow"}>
                                        <select
                                            id={"degree"}
                                            name={"degree"}
                                            className={"select-form-field"}
                                            onKeyDown={this.handleNextInput}
                                        >
                                            <option value={""}>مدرک تحصیلی</option>
                                            {this.degrees.map((degree, index) => (
                                                <option value={degree} key={index}>
                                                    {degree}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={arrowBottom} alt={"arrow bottom"} className={"select-arrow-icon"}/>
                                    </div>
                                    <div className={"pro-form-group"} style={{marginRight: "40px"}}>
                                        <input
                                            type={"text"}
                                            name={"previous_job_explanation"}
                                            id={"previous_job_explanation"}
                                            className={"form-field-text"}
                                            onChange={this.handleOnChange}
                                            placeholder={"توضیحات"}
                                            onKeyDown={this.handleNextInput}
                                            style={{width: "600px"}}
                                        />
                                        <label htmlFor={"previous_job_explanation"} className={"form-label-text"}>
                                            توضیحات
                                        </label>
                                    </div>
                                </div>
                                <div className={"inline-form-groups"}>
                                    <div className={"pro-form-group hide-select-arrow"}>
                                        <select
                                            id={"birth_province"}
                                            name={"birth_province"}
                                            className={"select-form-field"}
                                            onKeyDown={this.handleNextInput}
                                        >
                                            <option value={""}>استان محل تولد</option>
                                            {this.provinces.map((province, index) => (
                                                <option value={province} key={index}>
                                                    {province}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={arrowBottom} alt={"arrow bottom"} className={"select-arrow-icon"}/>
                                    </div>
                                    <div className={"pro-form-group hide-select-arrow"} style={{marginRight: "40px"}}>
                                        <select
                                            id={"birth_city"}
                                            name={"birth_city"}
                                            className={"select-form-field"}
                                            onKeyDown={this.handleNextInput}
                                        >
                                            <option value={""}>شهر محل تولد</option>
                                            {this.cities.map((city, index) => (
                                                <option value={city} key={index}>
                                                    {city}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={arrowBottom} alt={"arrow bottom"} className={"select-arrow-icon"}/>
                                    </div>
                                </div>
                                <div className={"inline-form-groups"}>
                                    <div className={"pro-form-group hide-select-arrow"}>
                                        <select
                                            id={"current_province"}
                                            name={"current_province"}
                                            className={"select-form-field"}
                                            onKeyDown={this.handleNextInput}
                                        >
                                            <option value={""}>استان محل سکونت</option>
                                            {this.provinces.map((province, index) => (
                                                <option value={province} key={index}>
                                                    {province}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={arrowBottom} alt={"arrow bottom"} className={"select-arrow-icon"}/>
                                    </div>
                                    <div className={"pro-form-group hide-select-arrow"} style={{marginRight: "40px"}}>
                                        <select
                                            id={"current_city"}
                                            name={"current_city"}
                                            className={"select-form-field"}
                                            onKeyDown={this.handleNextInput}
                                        >
                                            <option value={""}>شهر محل سکونت</option>
                                            {this.cities.map((city, index) => (
                                                <option value={city} key={index}>
                                                    {city}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={arrowBottom} alt={"arrow bottom"} className={"select-arrow-icon"}/>
                                    </div>
                                </div>
                                <div className={"pro-form-group"}>
                                    <input
                                        type={"text"}
                                        name={"current_address"}
                                        id={"current_address"}
                                        className={"form-field-text"}
                                        onChange={this.handleOnChange}
                                        placeholder={"آدرس محل سکونت"}
                                        onKeyDown={this.handleNextInput}
                                        // required={true}
                                        style={{width: "660px"}}
                                    />
                                    <label htmlFor={"current_address"} className={"form-label-text"}>
                                        آدرس محل سکونت
                                    </label>
                                </div>
                                <div className={"pro-form-group"}>
                                    <input
                                        name={"landline_number"}
                                        type={"tel"}
                                        id={"landline_number"}
                                        className={"form-field-text"}
                                        placeholder={"شماره ثابت"}
                                        // required={true}
                                        onKeyDown={this.handleNextInput}
                                    />
                                    <label htmlFor={"landline_number"} className={"form-label-text"}>
                                        شماره ثابت
                                    </label>
                                </div>
                                <div className={"inline-form-groups"}>
                                    <div className={"pro-form-group"}>
                                        <input
                                            name={"phone_number"}
                                            type={"tel"}
                                            id={"phone_number"}
                                            className={"form-field-text"}
                                            placeholder={"شماره ثابت"}
                                            pattern={"[0-9]{11}"}
                                            // required={true}
                                            onKeyDown={this.handleNextInput}
                                        />
                                        <label htmlFor={"phone_number"} className={"form-label-text"}>
                                            شماره همراه(...۰۹)
                                        </label>
                                    </div>
                                    <div>
                                        <button type={"button"} onClick={this.handleVerificationCode}
                                                id={"verification-code-btn"}>
                                            دریافت کد اعبتار سنجی
                                        </button>
                                    </div>
                                    <div className={"pro-form-group"}>
                                        <input
                                            name={"verification_code"}
                                            type={"text"}
                                            id={"verification_code"}
                                            className={"form-field-text"}
                                            placeholder={"کد اعتبارسنجی"}
                                            pattern={".{5}"}
                                            required={this.state.vCodeField}
                                            disabled={!this.state.vCodeField}
                                            onKeyDown={this.handleNextInput}
                                        />
                                        <label htmlFor={"verification_code"} className={"form-label-text"}>
                                            کد اعتبارسنجی
                                        </label>
                                    </div>
                                </div>
                                <div className={"pro-form-group"}>
                                    <input
                                        type={"text"}
                                        name={"introducing_fname"}
                                        id={"introducing_fname"}
                                        className={"form-field-text"}
                                        onChange={this.handleOnChange}
                                        placeholder={"نام معرف"}
                                        onKeyDown={this.handleNextInput}
                                        // required={true}
                                    />
                                    <label htmlFor={"introducing_fname"} className={"form-label-text"}>
                                        نام معرف
                                    </label>
                                </div>
                                <div className={"pro-form-group"}>
                                    <input
                                        type={"text"}
                                        name={"introducing_phone_number"}
                                        id={"introducing_phone_number"}
                                        className={"form-field-text"}
                                        onChange={this.handleOnChange}
                                        placeholder={"شماره تماس معرف"}
                                        onKeyDown={this.handleNextInput}
                                        // required={true}
                                    />
                                    <label htmlFor={"introducing_phone_number"} className={"form-label-text"}>
                                        شماره تماس معرف
                                    </label>
                                </div>
                            </div>
                            <div className={"entertainments"}>
                                <h3 id={"entertainments-header"}>
                                    تفریحات من
                                </h3>
                                <div id={"favorite-habits-container"}>
                                    {this.interests.map((interest, i) => {
                                        return (
                                            <div className={"pro-form-group"} key={i}>
                                                <label htmlFor={"interest" + i} className={"checkbox-label"}>
                                                    {interest}
                                                    <input
                                                        type={"checkbox"}
                                                        className={"checkbox-input"}
                                                        id={"interest" + i}
                                                        name={"interest0"}
                                                        value={interest}
                                                    />
                                                    <span className={"checkmark"}> </span>
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={"favorite-films-books-container"}>
                                    <div className={"pro-form-group"}>
                                        <input
                                            type={"text"}
                                            name={"favorite_films"}
                                            id={"favorite_films"}
                                            className={"form-field-text"}
                                            onChange={this.handleOnChange}
                                            placeholder={"فیلم یا سریال محبوب من"}
                                            // required={true}
                                            style={{width: "400px"}}
                                        />
                                        <label htmlFor={"favorite_films"} className={"form-label-text"}>
                                            فیلم یا سریال محبوب من
                                        </label>
                                    </div>
                                    <button type={"button"} onClick={this.handleAddOption} className={"form-add-btn"}>
                                        +
                                    </button>
                                    {this.state.favoriteFilms.map((favFilm, index) => {
                                        return (
                                            <span key={index}>
                                        {favFilm}
                                    </span>
                                        )
                                    })}
                                </div>
                                <div className={"favorite-films-books-container"}>
                                    <div className={"pro-form-group"}>
                                        <input
                                            type={"text"}
                                            name={"favorite_books"}
                                            id={"favorite_books"}
                                            className={"form-field-text"}
                                            onChange={this.handleOnChange}
                                            placeholder={"کتاب محبوب من"}
                                            // required={true}
                                            style={{width: "400px"}}
                                        />
                                        <label htmlFor={"favorite_books"} className={"form-label-text"}>
                                            کتاب محبوب من
                                        </label>
                                    </div>
                                    <button type={"button"} onClick={this.handleAddOption} className={"form-add-btn"}>
                                        +
                                    </button>
                                    {this.state.favoriteBooks.map((book, index) => {
                                        return (
                                            <span key={index}>
                                        {book}
                                    </span>
                                        )
                                    })}
                                </div>
                                <div className={"pro-form-group"}>
                                    <input
                                        type={"text"}
                                        name={"interests_explanation"}
                                        id={"interests_explanation"}
                                        className={"form-field-text"}
                                        onChange={this.handleOnChange}
                                        placeholder={"توضیحات تکمیلی درمورد علایق"}
                                        onKeyDown={this.handleNextInput}
                                        // required={true}
                                        style={{width: "600px"}}
                                    />
                                    <label htmlFor={"interests_explanation"} className={"form-label-text"}>
                                        توضیحات تکمیلی درمورد علایق
                                    </label>
                                </div>

                            </div>
                            <div className={"social-media"}>
                                <div className={"social-media-input"}>
                                    <img src={mail} alt={"mail"}/>
                                    <input
                                        type={"text"}
                                        name={"mail"}
                                        id={"mail"}
                                        className={"form-field-text"}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className={"social-media-input"}>
                                    <img src={whatsapp} alt={"whatsapp"}/>
                                    <input
                                        type={"text"}
                                        name={"whatsapp"}
                                        id={"whatsapp"}
                                        className={"form-field-text"}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className={"social-media-input"}>
                                    <img src={telegram} alt={"telegram"}/>
                                    <input
                                        type={"text"}
                                        name={"telegram"}
                                        id={"telegram"}
                                        className={"form-field-text"}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className={"social-media-input"}>
                                    <img src={instagram} alt={"instagram"}/>
                                    <input
                                        type={"text"}
                                        name={"instagram"}
                                        id={"instagram"}
                                        className={"form-field-text"}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className={"social-media-input"}>
                                    <img src={facebook} alt={"facebook"}/>
                                    <input
                                        type={"text"}
                                        name={"facebook"}
                                        id={"facebook"}
                                        className={"form-field-text"}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className={"social-media-input"}>
                                    <img src={youtube} alt={"youtube"}/>
                                    <input
                                        type={"text"}
                                        name={"youtube"}
                                        id={"youtube"}
                                        className={"form-field-text"}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className={"social-media-input"}>
                                    <img src={twitter} alt={"twitter"}/>
                                    <input
                                        type={"text"}
                                        name={"twitter"}
                                        id={"twitter"}
                                        className={"form-field-text"}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                            </div>
                            <div className={"case-history"}>
                                <div className={"case-diseases inline-form-groups"}>
                                    <span style={{width: "45%"}}>
                                        سابقه بیماری جسمی یا روحی
                                    </span>
                                    <div style={{width: "45%"}}>
                                        <label htmlFor={"has_disease_history"}
                                               className={"form-label-radio checkbox-label"}>
                                            دارم
                                            <input
                                                type={"radio"}
                                                name={"disease_history"}
                                                className={"form-field-radio"}
                                                id={"has_disease_history"}
                                            />
                                            <span className={"checkmark"}> </span>
                                        </label>
                                        <label htmlFor={"has_not_disease_history"}
                                               className={"form-label-radio checkbox-label"}>
                                            ندارم
                                            <input
                                                type={"radio"}
                                                name={"disease_history"}
                                                className={"form-field-radio"}
                                                id={"has_not_disease_history"}
                                            />
                                            <span className={"checkmark"}> </span>
                                        </label>
                                    </div>
                                    {/*<div className={"pro-form-group"} style={{width: "100%", paddingRight: "44%"}}>*/}
                                    {/*    <input*/}
                                    {/*        type={"text"}*/}
                                    {/*        name={"disease_history_explanation"}*/}
                                    {/*        id={"disease_history_explanation"}*/}
                                    {/*        className={"form-field-text"}*/}
                                    {/*        onChange={this.handleOnChange}*/}
                                    {/*        placeholder={"توضیح دهید"}*/}
                                    {/*        onKeyDown={this.handleNextInput}*/}
                                    {/*        style={{width: "50%", borderColor: "#606060"}}*/}
                                    {/*    />*/}
                                    {/*    <label htmlFor={"disease_history_explanation"} className={"form-label-text checkbox-label"}*/}
                                    {/*           style={{color: "#606060"}}>*/}
                                    {/*        توضیح دهید*/}
                                    {/*    </label>*/}
                                    {/*</div>*/}
                                </div>
                                <div className={"case-drug inline-form-groups"}>
                                    <span style={{width: "45%"}}>
                                        سابقه مصرف دارو
                                    </span>
                                    <div style={{width: "45%"}}>
                                        <label htmlFor={"has_drug_history"}
                                               className={"form-label-radio checkbox-label"}>
                                            دارم
                                            <input
                                                type={"radio"}
                                                name={"drug_history"}
                                                className={"form-field-radio"}
                                                id={"has_drug_history"}
                                            />
                                            <span className={"checkmark"}> </span>
                                        </label>
                                        <label htmlFor={"has_not_drug_history"}
                                               className={"form-label-radio checkbox-label"}>
                                            ندارم
                                            <input
                                                type={"radio"}
                                                name={"drug_history"}
                                                className={"form-field-radio"}
                                                id={"has_not_drug_history"}
                                            />
                                            <span className={"checkmark"}> </span>
                                        </label>
                                    </div>
                                </div>
                                <div className={"case-criminal inline-form-groups"}>
                                    <span style={{width: "45%"}}>
                                        سابقه کیفری
                                    </span>
                                    <div style={{width: "45%"}}>
                                        <label htmlFor={"has_criminal_history"}
                                               className={"form-label-radio checkbox-label"}>
                                            دارم
                                            <input
                                                type={"radio"}
                                                name={"criminal_history"}
                                                className={"form-field-radio"}
                                                id={"has_criminal_history"}
                                            />
                                            <span className={"checkmark"}> </span>
                                        </label>
                                        <label htmlFor={"has_not_criminal_history"}
                                               className={"form-label-radio checkbox-label"}>
                                            ندارم
                                            <input
                                                type={"radio"}
                                                name={"criminal_history"}
                                                className={"form-field-radio"}
                                                id={"has_not_criminal_history"}
                                            />
                                            <span className={"checkmark"}> </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </StyledForm>
                    </StyledMyProfile>
                </div>
                <div className={"left-container"}>
                    <div className={"left-fixed-container"}>
                        <HomePageLink className={"top-left-home-page-logo"}/>
                        <div className={"pro-submit-btn-container"}>
                            <button type={"button"} className={"edit-profile-btn"}>
                                ثبت تغییرات
                            </button>
                        </div>
                        <MenuLink className={"down-left-menu-link"}/>
                    </div>
                </div>
            </div>
        );
    }
}