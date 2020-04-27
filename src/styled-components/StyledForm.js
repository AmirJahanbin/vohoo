import styled from "styled-components";


const StyledForm = styled.form`
  
  direction: rtl;
  font-family: MJ_thameen, sans-serif;
  font-weight: 300;
  font-size: 2.5rem;

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
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form-field::placeholder {
    color: transparent;
}
.form-field:placeholder-shown ~ .form-label {
  font-size: 2.5rem;
  cursor: text;
  top: 20px;
}
.form-label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1.5rem;
  color: white;
}
.form-field:focus {
  padding-bottom: 6px;
  font-weight: normal;
  border-width: 2px;
}
.form-field:focus ~ .form-label {
  position: absolute;
  top: -5px;
  display: block;
  transition: 0.2s;
  font-size: 1.5rem;
  color: white;
  font-weight: 300;

}
.form-field:required, .form-field:invalid {
  box-shadow: none;
}
`;
export default StyledForm;