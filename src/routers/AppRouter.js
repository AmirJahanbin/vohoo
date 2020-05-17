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
import ContactUs from "../components/pages/ContactUs";
import MyWallet from "../components/pages/MyWallet";
import NotFound from "../components/pages/404NotFound";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path={"/"} exact={true}   component={Home}/>
                <Route path={"/course-register"} component={CourseRegister}/>
                <Route path={"/menu"}            component={Menu}/>
                <Route path={"/sign-up"}         component={SignUp}/>
                <Route path={"/login"}           component={Login}/>
                <Route path={"/my-courses"}      component={MyCourses}/>
                <Route path={"/my-profile"}      component={MyProfile}/>
                <Route path={"/invoice"}         component={Invoice}/>
                <Route path={"/massages"}        component={Messages}/>
                <Route path={"/calendar"}        component={Calendar}/>
                <Route path={"/gathering"}       component={Gathering}/>
                <Route path={"/my-activity"}     component={MyActivity}/>
                <Route path={"/contact-us"}      component={ContactUs}/>
                <Route path={"/my-wallet"}       component={MyWallet}/>
                <Route><NotFound/></Route>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;