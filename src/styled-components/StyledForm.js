import styled from "styled-components";


const StyledForm = styled.form`
  
  direction: rtl;
  font-family: MJ_thameen, sans-serif;
  font-weight: 300;

.form-group {
  position: relative;
  padding: 10px 0 0;
}
.form-field {
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
`;
export default StyledForm;