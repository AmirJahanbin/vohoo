import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default class Toastify extends Component {

    constructor(props) {
        super(props);
        this.toast = toast;
        toast.configure({
            autoClose: 5000
        })
    }

    render(){
        console.log("toastify rendered");
        return (
            <div>
                <ToastContainer
                autoClose={5000}
                newestOnTop={true}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                />
            </div>
        );
    }
}