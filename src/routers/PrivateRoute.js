import React from "react";
import {Route, Redirect} from "react-router-dom";
import axiosInstance from "../connetion/axios";
import Toastify from "../components/Toastify";

export default function PrivateRoute({children, ...rest}) {
    let toast = new Toastify().toast;
    return (
        <Route
            {...rest}
            render={({location}) => {
                console.log("hello this is amir form private router anyone there? ", axiosInstance.getAuthKey());
                if (axiosInstance.getAuthKey()) {
                    return (children)
                } else {
                    toast.error("لطفا ابتدا وارد سایت شوید");
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {from: location}
                            }}
                        />
                    )
                }
            }
            }
        />
    );
}