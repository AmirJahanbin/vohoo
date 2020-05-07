import React from "react";
import DatePicker from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';
import StyledMyProfile from "../../styled-components/StyledMyProfile";
import StyledForm from "../../styled-components/StyledForm";
import HomePageLink from "../HomePageLink";
import MenuLink from "../MenuLink";
import ChangePassword from "../ChangePassword";


import telegram from "../../assets/images/social icons/telegram-1@2x.png";
import whatsapp from "../../assets/images/social icons/whatsapp-1@2x.png";
import mail from "../../assets/images/social icons/mail-1@2x.png";
import instagram from "../../assets/images/social icons/instagram-1@2x.png";
import facebook from "../../assets/images/social icons/facebook-1@2x.png";
import youtube from "../../assets/images/social icons/youtube-1@2x.png";
import twitter from "../../assets/images/social icons/twitter-1@2x.png";




export default class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marital_status: "",
            haveChildren: true,
            vCodeField: false,
            favoriteFilms: ["interstellar"],
            favoriteBooks: ["annacarnia"],
            date_of_birth: momentJalaali(),
            imageProfile: null
        };
        this.jobs = ['بافنده', 's', 'd', 'f', 'g', 'g', 'h'];
        this.degrees = ['a', 'a', 'a', 'a', 'a', 'a'];
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

    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle submit called " + this.state.haveChildren);

    }
    handleOnChange = (event) => {
        console.log(this.state.marital_status);
        let name = event.target.name;
        let val = event.target.value;
        this.setState(() => ({[name]: val}));
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
            <StyledMyProfile>
                {/*<div className={"right-fixed-container"}>*/}
                {/*    <div className={"active-sidebar"}>*/}
                {/*        <nav className={"nav-sections"}>*/}
                {/*            <ul className={"menu"}>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#course-title"}>*/}
                {/*                        اطلاعات پرسنلی*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#course-intro-summery"}>*/}
                {/*                        علایق*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#course-general-content"}>*/}
                {/*                        فضای مجازی*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*                <li className={"menu-item"}>*/}
                {/*                    <a className={"menu-item-link"} href={"#course-instructor"}>*/}
                {/*                        سوابق*/}
                {/*                    </a>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
                {/*        </nav>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={"left-fixed-container"}>
                    <div className={"home-menu-link"}>
                        <HomePageLink className={"top-left-home-page-logo"}/>
                        <button type={"button"} className={"edit-profile-btn"}>
                            ویرایش
                        </button>
                        <MenuLink className={"down-left-menu-link"}/>
                    </div>
                </div>
                <StyledForm onSubmit={this.handleSubmit}>
                    <div className={"personal-info"}>
                        <div className={"pro-form-group"}>
                            <label className={"form-label-file"} id={"image-profile-label"}>
                                <img src={this.state.imageProfile} className={"input-file-image"} id={"image-profile"}/>
                                <input
                                    type={"file"}
                                    name={"profile_image"}
                                    className={"form-field-file"}
                                    onChange={this.handleImageFile}
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
                                onChange={this.handleOnChange}
                                placeholder={"نام"}
                                onKeyDown={this.handleNextInput}
                                // required={true}
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
                                onChange={this.handleOnChange}
                                placeholder={"نام خانوادگی"}
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
                                />
                            </label>
                        </div>
                        <div className={"pro-form-group"}>
                            <DatePicker
                                id={"date_of_birth"}
                                timePicker={false}
                                isGregorian={false}
                                onChange={date_of_birth => this.setState({date_of_birth})}
                                value={this.state.date_of_birth}
                                className={"form-field-text"}
                            />
                            <label className={"form-label-text"}>
                                تاریخ تولد
                            </label>
                        </div>
                        <div className={"pro-form-group"}>
                            <input
                                type={"number"}
                                name={"birth_order"}
                                id={"birth_order"}
                                className={"form-field-text"}
                                onChange={this.handleOnChange}
                                placeholder={"فرزند چندم"}
                            />
                            <label htmlFor={"birth_order"} className={"form-label-text"}>
                                فرزند چندم
                            </label>
                        </div>
                        <div className={"pro-form-group"}>
                            <input
                                type={"radio"}
                                name={"gender"}
                                className={"form-field-radio"}
                                id={"gender_male"}
                            />
                            <label htmlFor={"gender_male"} className={"form-label-radio"}>
                                مرد
                            </label>
                            <input
                                type={"radio"}
                                name={"gender"}
                                className={"form-field-radio"}
                                id={"gender_female"}
                            />
                            <label htmlFor={"gender_female"} className={"form-label-radio"}>
                                زن
                            </label>
                        </div>
                        <div className={"pro-form-group"}>
                            <input
                                type={"radio"}
                                name={"marital_status"}
                                className={"form-field-radio"}
                                id={"married"}
                                value={"married"}
                                onChange={() => (this.setState({haveChildren: true}))}
                            />
                            <label htmlFor={"married"} className={"form-label-radio"}>
                                متأهل
                            </label>
                            <input
                                type={"radio"}
                                name={"marital_status"}
                                className={"form-field-radio"}
                                id={"unmarried"}
                                value={"unmarried"}
                                onChange={(c) => {
                                    console.log(c.target.value);
                                    return this.setState({haveChildren: false});
                                }}
                            />
                            <label htmlFor={"unmarried"} className={"form-label-radio"}>
                                مجرد
                            </label>
                            <input
                                type={"radio"}
                                name={"marital_status"}
                                className={"form-field-radio"}
                                id={"divorced"}
                                value={"divorced"}
                                onChange={() => (this.setState({haveChildren: true}))}
                            />
                            <label htmlFor={"divorced"} className={"form-label-radio"}>
                                متارکه
                            </label>
                        </div>
                        <div className={"pro-form-group"}>
                            <input
                                type={"number"}
                                name={"number_of_children"}
                                id={"number-of-children"}
                                className={"form-field-text"}
                                onChange={this.handleOnChange}
                                placeholder={"تعداد فرزندان"}
                                onKeyDown={this.handleNextInput}
                                disabled={!this.state.haveChildren}
                            />
                            <label htmlFor={"number-of-children"} className={"form-label-text"}>
                                تعداد فرزندان
                            </label>
                        </div>
                        <div className={"inline-form-groups"}>
                            <div className={"pro-form-group"}>
                                <select id={"current_job"} name={"current_job"} className={"select-form-field"}>
                                    <option value={""}>شغل فعلی</option>
                                    {this.jobs.map((job, index) => (
                                        <option value={job} key={index}>
                                            {job}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={"pro-form-group"}>
                                <input
                                    type={"text"}
                                    name={"current_job_explanation"}
                                    id={"current_job_explanation"}
                                    className={"form-field-text"}
                                    onChange={this.handleOnChange}
                                    placeholder={"توضیحات"}
                                />
                                <label htmlFor={"current_job_explanation"} className={"form-label-text"}>
                                    توضیحات
                                </label>
                            </div>
                        </div>
                        <div className={"inline-form-groups"}>
                            <div className={"pro-form-group"}>
                                <select id={"previous_job"} name={"previous_job"} className={"select-form-field"}>
                                    <option value={""}>شغل قبلی</option>
                                    {this.jobs.map((job, index) => (
                                        <option value={job} key={index}>
                                            {job}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={"pro-form-group"}>
                                <input
                                    type={"text"}
                                    name={"previous_job_explanation"}
                                    id={"previous_job_explanation"}
                                    className={"form-field-text"}
                                    onChange={this.handleOnChange}
                                    placeholder={"توضیحات"}
                                />
                                <label htmlFor={"previous_job_explanation"} className={"form-label-text"}>
                                    توضیحات
                                </label>
                            </div>
                        </div>
                        <div className={"inline-form-groups"}>
                            <div className={"pro-form-group"}>
                                <select id={"degree"} name={"degree"} className={"select-form-field"}>
                                    <option value={""}>مدرک تحصیلی</option>
                                    {this.degrees.map((degree, index) => (
                                        <option value={degree} key={index}>
                                            {degree}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={"pro-form-group"}>
                                <input
                                    type={"text"}
                                    name={"previous_job_explanation"}
                                    id={"previous_job_explanation"}
                                    className={"form-field-text"}
                                    onChange={this.handleOnChange}
                                    placeholder={"توضیحات"}
                                />
                                <label htmlFor={"previous_job_explanation"} className={"form-label-text"}>
                                    توضیحات
                                </label>
                            </div>
                        </div>
                        <div className={"inline-form-groups"}>
                            <div className={"pro-form-group"}>
                                <select id={"birth_province"} name={"birth_province"} className={"select-form-field"}>
                                    <option value={""}>استان محل تولد</option>
                                    {this.provinces.map((province, index) => (
                                        <option value={province} key={index}>
                                            {province}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={"pro-form-group"}>
                                <select id={"birth_city"} name={"birth_city"} className={"select-form-field"}>
                                    <option value={""}>شهر محل تولد</option>
                                    {this.cities.map((city, index) => (
                                        <option value={city} key={index}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={"inline-form-groups"}>
                            <div className={"pro-form-group"}>
                                <select id={"current_province"} name={"current_province"} className={"select-form-field"}>
                                    <option value={""}>استان محل سکونت</option>
                                    {this.provinces.map((province, index) => (
                                        <option value={province} key={index}>
                                            {province}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={"pro-form-group"}>
                                <select id={"current_city"} name={"current_city"} className={"select-form-field"}>
                                    <option value={""}>شهر محل سکونت</option>
                                    {this.cities.map((city, index) => (
                                        <option value={city} key={index}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
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
                                style={{width: "50%"}}
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
                                <button type={"button"} onClick={this.handleVerificationCode} id={"verification-code-btn"}>
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
                        <div id={"favorite-habits-container"}>
                            {this.interests.map((interest, i) => {
                                return (
                                    <div className={"pro-form-group"} key={i}>
                                        <input
                                            type={"checkbox"}
                                            id={"interest" + i}
                                            name={"interest0"}
                                            value={interest}
                                        />
                                        <label htmlFor={"interest" + i}>
                                            {interest}
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
                                style={{width: "50%"}}
                            />
                            <label htmlFor={"interests_explanation"} className={"form-label-text"}>
                                توضیحات تکمیلی درمورد علایق
                            </label>
                        </div>

                    </div>
                    <div className={"social-media"}>
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
                            <img src={twitter} alt={"twitter"}/>
                            <input
                                type={"text"}
                                name={"twitter"}
                                id={"twitter"}
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
                            <img src={youtube} alt={"youtube"}/>
                            <input
                                type={"text"}
                                name={"youtube"}
                                id={"youtube"}
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
                                <input
                                    type={"radio"}
                                    name={"disease_history"}
                                    className={"form-field-radio"}
                                    id={"has_disease_history"}
                                />
                                <label htmlFor={"has_disease_history"} className={"form-label-radio"}>
                                    دارم
                                </label>
                                <input
                                    type={"radio"}
                                    name={"disease_history"}
                                    className={"form-field-radio"}
                                    id={"has_not_disease_history"}
                                />
                                <label htmlFor={"has_not_disease_history"} className={"form-label-radio"}>
                                    ندارم
                                </label>
                            </div>
                            <div className={"pro-form-group"} style={{width: "100%", paddingRight: "44%"}}>
                                <input
                                    type={"text"}
                                    name={"disease_history_explanation"}
                                    id={"disease_history_explanation"}
                                    className={"form-field-text"}
                                    onChange={this.handleOnChange}
                                    placeholder={"توضیح دهید"}
                                    onKeyDown={this.handleNextInput}
                                    style={{width: "50%", borderColor: "#606060"}}
                                />
                                <label htmlFor={"disease_history_explanation"} className={"form-label-text"} style={{color: "#606060"}}>
                                    توضیح دهید
                                </label>
                            </div>
                        </div>
                        <div className={"case-drug inline-form-groups"}>
                            <span style={{width: "45%"}}>
                                سابقه مصرف دارو
                            </span>
                            <div style={{width: "45%"}}>
                                <input
                                    type={"radio"}
                                    name={"drug_history"}
                                    className={"form-field-radio"}
                                    id={"has_drug_history"}
                                />
                                <label htmlFor={"has_drug_history"} className={"form-label-radio"}>
                                    دارم
                                </label>
                                <input
                                    type={"radio"}
                                    name={"drug_history"}
                                    className={"form-field-radio"}
                                    id={"has_not_drug_history"}
                                />
                                <label htmlFor={"has_not_drug_history"} className={"form-label-radio"}>
                                    ندارم
                                </label>
                            </div>
                        </div>
                        <div className={"case-criminal inline-form-groups"}>
                            <span style={{width: "45%"}}>
                                سابقه کیفری
                            </span>
                            <div style={{width: "45%"}}>
                                <input
                                    type={"radio"}
                                    name={"criminal_history"}
                                    className={"form-field-radio"}
                                    id={"has_criminal_history"}
                                />
                                <label htmlFor={"has_criminal_history"} className={"form-label-radio"}>
                                    دارم
                                </label>
                                <input
                                    type={"radio"}
                                    name={"criminal_history"}
                                    className={"form-field-radio"}
                                    id={"has_not_criminal_history"}
                                />
                                <label htmlFor={"has_not_criminal_history"} className={"form-label-radio"}>
                                    ندارم
                                </label>
                            </div>
                        </div>
                    </div>
                    <input type={"submit"} value={"ثبت"} id={"my-profile-submit-btn"}/>
                </StyledForm>
            </StyledMyProfile>
        );
    }
}