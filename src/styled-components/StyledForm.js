import styled from "styled-components";


const StyledForm = styled.form`
  
  direction: rtl;
  font-family: MJ_thameen, sans-serif;
  font-weight: 300;

.form-group {
  position: relative;
  padding: 10px 0 0;
}
.form-field[type="text"] {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid white;
  outline: 0;
  font-size: 2.5rem;
  color: white;
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
  color: white;
}
.form-field:focus ~ .form-label {
  position: absolute;
  top: -5px;
  display: block;
  transition: 0.2s;
  font-size: initial;
  font-weight: 300;
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
  margin: 20px;
}
/*******************************************************/
.form-field-text {
  font-family: inherit;
  //width: 100%;
  border: 0;
  border-bottom: 1px solid white;
  outline: 0;
  font-size: 2.5rem;
  color: white;
  padding: 5px 0 0 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form-field-text::placeholder {
    color: transparent;
}
.form-field-text:placeholder-shown ~ .form-label-text {
  font-size: 2.5rem;
  cursor: text;
  top: 15px;
}
.form-label-text {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: initial;
  color: white;
}
.form-field-text:focus ~ .form-label-text {
  position: absolute;
  top: -5px;
  display: block;
  transition: 0.2s;
  font-size: initial;
  font-weight: 300;
}
/*******************************************************/
.form-label-radio {
  margin: 15px 0 15px 15px;
}
/*******************************************************/
.select-form-field {
  font-family: MJ_thameen, sans-serif;
  font-size: 2.5rem;
  font-weight: 300;
  background-color: transparent;
  color: white;
  padding-left: 40px;
  border-bottom: 1px solid white;
  & option {
    font-size: large;
    color: black;
    background-color: #D9D9D9;
    
  }
}
.select-form-field:focus {
  outline: none;
}

`;
export default StyledForm;