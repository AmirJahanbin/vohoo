import styled from "styled-components";
import schemeBackground from "../assets/images/course register/scheme_background@2x.png";

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
    padding-bottom: 30px;
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
      font-family: IRANSans, sans-serif;
      background-color: white;
      border-radius: 10px 10px 0 0;
      width: 370px;
      height: 300px;
      position: relative;
      top: -43%;
    }
    & .rbc-toolbar {
      flex-direction: column;
    }
    & .rbc-header {
      & span {
        font-size: x-small;
      }
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
      width: 600px;
      border: 1px solid gray;
      border-radius: 10px;
      height: 400px;
    }
    //& .mapboxgl-canvas {
    //  height: 245px;
    //}
    & .course-map-address {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: flex-start;
      padding: 30px 0;
    }
    & .course-location-address {
      text-align: right;
      padding-right: 5px;
      line-height: 1.3;
      width: 300px;
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
export default StyledCourseRegister;