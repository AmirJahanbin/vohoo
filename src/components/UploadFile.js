import React from "react";
import styled from "styled-components";
import cameraIcon from "../assets/images/camera.png";
import nationalCard from "../assets/images/national-card.png";
import avatar from "../assets/images/avatar.png";
import axiosInstance from "../connetion/axios";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const StyledUploadFile = styled.div`
  .form-label-file {
    position: relative;
  }
  .form-field-file {
    position: absolute;
    visibility: hidden;
  }
  #image-profile-label{  
    background-image: url(${props => props.avatar});
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${props => props.avatar === avatar ? "auto" : "cover"};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border: 1px solid #D9D9D9;
    border-radius: 20px;
  }
  #image-profile-label:hover {
    background-color: rgba(64, 45, 96, 0.5);
    background-image: url(${props => props.avatar}), url(${cameraIcon});
    background-size: ${props => props.avatar === avatar ? "auto" : "cover"}, auto;  
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    background-blend-mode: overlay;
  }
  #image-profile {
    width: 150px;
    height: auto;
  }
  #national-card-label{
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.nationalCard});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 258px;
    height: 156px;    
  }

`;

export default class UploadFile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageProfile: avatar,
            nationalCard: nationalCard,
            user_id: "",
            is_spinning: false
        }

    }
    async componentDidMount() {
        console.log("component did mount upload file called");
        const token = await axiosInstance.getAuthKey();
        axiosInstance.axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        axiosInstance.axios.post('/user/get_user/')
            .then(userResponse => {
                // console.log(userResponse.data);
                this.setState({user_id: userResponse.data.id});
                axiosInstance.axios.get(`/information/profile/${userResponse.data.id}/`)
                    .then((usrPro) => {
                        if(usrPro.data.image !== null) {
                            this.setState(() => ({
                                imageProfile: usrPro.data.image
                            }));
                        }
                        if(usrPro.data.national_card_image !== null) {
                            this.setState(() => ({
                                nationalCard: usrPro.data.national_card_image
                            }));
                        }
                    })
            })
            .catch((error) => {
                console.log("error in upload file: ", error.response.data);
            })
    }
    handleImageFile = (event) => {
        // Add a request interceptor
        axiosInstance.axios.interceptors.request.use((config) => {
            // Do something before request is sent
            this.setState(() => ({is_spinning: true}))
            return config;
        }, (error) => {
            // Do something with request error
            this.setState(() => ({is_spinning: false}))
            return Promise.reject(error);
        });

        // Add a response interceptor
        axiosInstance.axios.interceptors.response.use((response) => {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            this.setState(() => ({is_spinning: false}))
            return response;
        }, (error) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            this.setState(() => ({is_spinning: false}))
            return Promise.reject(error);
        });
        console.log("handle image file in upload called");
        const formData = new FormData();
        formData.append("image", event.target.files[0]);
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        }
        axiosInstance.axios.patch(`/information/profile/${this.state.user_id}/`, formData, config);
        const f = event.target.files[0];
        if(event.target.files[0] !== undefined){
            this.setState({nationalCard: URL.createObjectURL(f)});
            this.setState({imageProfile: URL.createObjectURL(f)});
            this.props.handleFile(event);
        }
    }
    render() {
        return (
            <StyledUploadFile avatar={this.state.imageProfile} nationalCard={this.state.nationalCard}>
                <label className={"form-label-file"} id={this.props.id}>
                    <input
                        type={"file"}
                        name={"profile_image"}
                        className={"form-field-file"}
                        onChange={this.handleImageFile}
                        onKeyDown={this.handleNextInput}
                    />
                    {this.state.is_spinning &&
                        <Loader type="Puff" color="#00BFFF" height={80} width={80}/>
                    }
                </label>
            </StyledUploadFile>
        )
    }
}