import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    background-color: #dab385;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Black Han Sans", sans-serif;
`;

const Footer = () => {
    return <StyledFooter>제작 : 조주선</StyledFooter>;
};

export default Footer;
