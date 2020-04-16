import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../components/pages/Home";
import CourseRegister from "../components/pages/CourseRegister";
import Menu from "../components/pages/Menu";
import SignUp from "../components/pages/SignUp";
import Login from "../components/pages/Login";
import MyCourses from "../components/pages/MyCourses";
import MyProfile from "../components/pages/MyProfile";
import Invoice from "../components/pages/Invoice";
import Messages from "../components/pages/Messages";
import Calendar from "../components/pages/Calendar";
import Gathering from "../components/pages/Gathering";
import MyActivity from "../components/pages/MyActivity";
import AboutUs from "../components/pages/AboutUs";
import NotFound from "../components/pages/404NotFound";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path={"/"} exact={true}><Home/></Route>
                <Route path={"/course-register"}><CourseRegister/></Route>
                <Route path={"/menu"}><Menu/></Route>
                <Route path={"/sign-up"}><SignUp/></Route>
                <Route path={"/login"}><Login/></Route>
                <Route path={"/my-courses"}><MyCourses/></Route>
                <Route path={"/my-profile"}><MyProfile/></Route>
                <Route path={"/invoice"}><Invoice/></Route>
                <Route path={"/massages"}><Messages/></Route>
                <Route path={"/calendar"}><Calendar/></Route>
                <Route path={"/gathering"}><Gathering/></Route>
                <Route path={"/my-activity"}><MyActivity/></Route>
                <Route path={"/about-us"}><AboutUs/></Route>
                <Route><NotFound/></Route>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;