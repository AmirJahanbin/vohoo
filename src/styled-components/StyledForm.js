import styled from "styled-components";


const StyledForm = styled.form`
  
  direction: rtl;
  font-family: MJ_thameen, sans-serif;
  font-weight: 400;

.form-group {
  
  position: relative;
  padding: 10px 0 0;
}
.form-field {
  font-family: IRANSans,sans-serif;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #D9D9D9;
  outline: 0;
  font-size: 25px;
  color: white;
  padding: 5px 0 0 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form-field::placeholder {
    color: transparent;
}
.form-field:placeholder-shown ~ .form-label {
  font-size: 25px;
  cursor: text;
  top: 15px;
}
.form-label {
  position: absolute;
  top: -5px; 
  display: block;
  transition: 0.2s;
  font-size: initial;
  color: #D9D9D9;
}
.form-field:focus ~ .form-label {
  position: absolute;
  top: -5px;
  display: block;
  transition: 0.2s;
  font-size: initial;
  font-weight: 400;
  color: #AAAAAA;
}
/*******************************************************/


.inline-form-groups {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap; 
}
.pro-form-group {
  position: relative;
  padding: 10px 0 0;
  margin: 20px 0;
  color: #D9D9D9;
}
/************************** form field text *****************************/
.form-field-text {
  font-family: IRANSans, sans-serif;
  font-weight: 300;  
  width: 300px;
  border: 0;
  border-bottom: 1px solid #D9D9D9;
  outline: 0;
  font-size: 33px;
  color: white;
  padding: 5px 0 0 0;
  background: transparent;
}
.form-field-text::placeholder {
    color: transparent;
}

.form-field-text:placeholder-shown ~ .form-label-text {
  font-size: 36px;
  cursor: text;
  top: 15px;
  color: #D9D9D9;
}
.form-label-text {
  position: absolute;
  top: -5px;
  display: block;
  transition: 0.2s;
  font-size: 2rem;
  color: #606060;
}
.form-field-text:focus ~ .form-label-text {
  position: absolute;
  top: -5px;
  display: block;
  font-size: 2rem;
  font-weight: 400;
  color: #606060;
}
/************************** radio *****************************/
.form-label-radio {
  margin: 15px 0 15px 15px;
  
}
/************************* select form field ******************************/
.select-form-field {
  font-family: MJ_thameen, sans-serif;
  font-size: 36px;
  font-weight: 400;
  width: 310px;
  background-color: #AAAAAA;
  color: #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
  cursor: pointer;
  
  & option {
    font-size: 20px;
    color: black;
    background-color: #D9D9D9;   
  }
  & option:hover {
    background-color: #606060;
  }
}
.select-form-field:focus {
  outline: none;
}


//.select-form-field:not(:empty) ~ .select-form-label {
//  font-size: 36px;
//  cursor: text;
//  top: 15px;
//  color: #D9D9D9;
//}
//.select-form-label {
//  position: absolute;
//  top: -5px;
//  display: block;
//  transition: 0.2s;
//  font-size: 2rem;
//  color: #606060;
//}
//.select-form-field:focus ~ .select-form-label {
//  position: absolute;
//  top: -5px;
//  display: block;
//  font-size: 2rem;
//  font-weight: 400;
//  color: #606060;
//}



.select-arrow-icon {
  position: absolute;
  left: 0;
}
/* This is to remove the arrow of select element in IE */
.hide-select-arrow {
  display: flex;
  align-items: center;
}
select::-ms-expand {
  display: none; 
}
select{
  -webkit-appearance: none;
  appearance: none; 
}
@-moz-document url-prefix(){
  .hide-select-arrow{
    border: 1px solid #CCC; 
    border-radius: 4px; 
    box-sizing: border-box; 
    position: relative; 
    overflow: hidden;
  } 
  .hide-select-arrow select { 
    width: 110%; 
    background-position: right 30px center !important; 
    border: none !important;
  }
}
/**************************checkbox********************************/
.checkbox-label {
  position:relative;
  padding-right: 45px;
  //font-size: 33px;
  cursor: pointer;
}
.checkbox-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  background-color: transparent;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #D9D9D9;
  border-radius: 5px;
  top: 5px;
  right: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.checkbox-label:hover input ~ .checkmark {
  //border: 2px solid #AAAAAA;
}
.checkbox-label input:checked ~ .checkmark {
  
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox-label input:checked ~ .checkmark:after {
  display: block;
}
.checkbox-label .checkmark:after {
  width: 7px;
  height: 14px;
  border: solid #795FA4;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/****************************input-filed-caption**********************************/
.input-field-caption{
  font-size: 20px;
  & .checkbox-label {
    padding-right: 33px;
    color: #606060;
    & .checkmark {
      width: 23px;
      height: 23px;
    }
    & .checkmark:after {
      width: 4px;
      height: 10px;
    }
  }
  & button {
    background: transparent;
    border: none;
    color: #795FA4;
    font-size: 20px;
  }
  & span {
    color: #606060;
    width: 300px;
    display: block;
  }
}
`;
export default StyledForm;