import React from "react";
import styled from "styled-components";
import arrowBottom from "../assets/images/arrowBottom.png";

const StyledSelect = styled.div`
position: relative;
padding: 10px 0 0;
margin: 20px 0;
color: #D9D9D9;
width: 300px;
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
    font-family: IRANSans, sans-serif;
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
.select-form-field:not(:empty) ~ .select-form-label {
  font-size: ${props => props.value ? "2rem" : "36px"};
  cursor: pointer;
  top: ${props => props.value ? "-5px" : "15px"};
  color: ${props => props.value ? "#606060" : "#D9D9D9"};
}
.select-form-label {
  position: absolute;
  top: -5px;
  display: block;
  transition: 0.2s;
  font-size: 2rem;
  color: #606060;
}
.select-form-field:focus ~ .select-form-label {
  position: absolute;
  top: -5px;
  display: block;
  font-size: 2rem;
  font-weight: 400;
  color: #606060;
}


.select-arrow-icon {
  position: absolute;
  left: 0;
}
/* This is to remove the arrow of select element in IE */
//.hide-select-arrow {
  display: flex;
  align-items: center;
//}
select::-ms-expand {
  display: none; 
}
select{
  -webkit-appearance: none;
  appearance: none; 
}
@-moz-document url-prefix(){
  //.hide-select-arrow
  {
    border: 1px solid #CCC; 
    border-radius: 4px; 
    box-sizing: border-box; 
    position: relative; 
    overflow: hidden;
  } 
  //.hide-select-arrow 
  select { 
    width: 110%; 
    background-position: right 30px center !important; 
    border: none !important;
  }
}
`;

export default class SelectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    componentDidMount() {
        this.setState({value: this.props.value})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.value !== this.props.value) {
            this.setState({value: this.props.value})
        }
    }

    handleOnChange = (event) => {
        this.setState({value: event.target.value});
        this.props.handleOnChange(event);
    }
    render() {
        return (
            <StyledSelect value={this.state.value} style={this.props.style}>
                <select
                    value={this.state.value}
                    className={"select-form-field"}
                    id={this.props.id}
                    name={this.props.name}
                    onChange={this.handleOnChange}
                    disabled={this.props.disabled}
                    required={this.props.required}
                >
                    {this.props.children}
                </select>
                <label htmlFor={this.props.id} className={"select-form-label"}>
                    {this.props.label}
                </label>
                <img src={arrowBottom} alt={"arrow bottom"} className={"select-arrow-icon"}/>
            </StyledSelect>
        )
    }
}