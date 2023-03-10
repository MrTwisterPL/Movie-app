import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


const size = {
    small:css`
    padding:5px;
    border:none;
    width:20%;`
}

export const Button = styled(Link)`
border:none;
display: flex;
font-weight: 700;
font-size: 20px;
letter-spacing: 2px;
gap:10px;
width: 90%;
padding:8px;
border-radius: 5px;
text-align: center;
background-color:transparent;
color:white;
transition: 0.5s;
text-decoration: none;
&:hover {
    background-color:rgba(128, 128, 128, 0.5)
}

`