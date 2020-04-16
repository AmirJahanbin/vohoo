import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Link to={"/"}>Go home</Link>
            <Link to={""}>درخت آگاهی من</Link>
            <Link to={"/my-courses"}>دوره های من</Link>
            <Link to={""}>ارتباطات من</Link>
            
            <Link to={"/my-profile"}>مشخصات من</Link>
            <Link to={"/invoice"}>صورت مالی من</Link>
            <Link to={"/my-activity"}>حضور من</Link>
            <Link to={"/sign-up"}>عضویت در سایت</Link>
            <Link to={""}>داستان ما</Link>
            <Link to={"/about-us"}>ارتباط با ما</Link>
            <h3>This is Menu page!</h3>
        </div>
    );
};
export default Menu;