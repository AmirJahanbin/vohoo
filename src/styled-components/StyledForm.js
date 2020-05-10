import styled from "styled-components";


const StyledForm = styled.form`
  
  direction: rtl;
  font-family: MJ_thameen, sans-serif;
  font-weight: 400;

.form-group {
  position: relative;
  padding: 10px 0 0;
}
.form-field[type="text"] {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #D9D9D9;
  outline: 0;
  font-size: 2.5rem;
  color: #D9D9D9;
  padding: 5px 0 0 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form-field::placeholder {
    color: transparent;
}
.form-field:placeholder-shown ~ .form-label {
  font-size: 2.5rem;
  cursor: text;
  top: 15px;
}
.form-label {
  position: absolute;
  top: 0;
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
/*******************************************************/
.form-field-text {
  font-family: inherit;
  width: 300px;
  border: 0;
  border-bottom: 1px solid #D9D9D9;
  outline: 0;
  font-size: 35px;
  color: #D9D9D9;
  padding: 5px 0 0 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form-field-text::placeholder {
    color: transparent;
}
.form-field-text:placeholder-shown ~ .form-label-text {
  font-size: 40px;
  cursor: text;
  top: 15px;
  color: #D9D9D9;
}
.form-label-text {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 2rem;
  color: #606060;
}
.form-field-text:focus ~ .form-label-text {
  position: absolute;
  top: -5px;
  display: block;
  transition: 0.2s;
  font-size: 2rem;
  font-weight: 400;
  color: #606060;
}

/*******************************************************/
.form-label-radio {
  margin: 15px 0 15px 15px;
  color: #D9D9D9;
}
/*******************************************************/
.select-form-field {
  font-family: MJ_thameen, sans-serif;
  font-size: 40px;
  font-weight: 400;
  width: 310px;
  background-color: #AAAAAA;
  color: #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
  
  & option {
    font-size: large;
    color: black;
    background-color: #D9D9D9;   
  }
}
.select-form-field:focus {
  outline: none;
}
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
`;
export default StyledForm;