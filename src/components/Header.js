import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const StyledHeader = styled.div`
    /* background-color: red; */
    height: 8vh;
    display: flex;
    font-family: "Black Han Sans", sans-serif;
    /* justify-content: space-between; */
`;
const Logo = styled.img`
    width: 90px;
    margin: 8px;
    margin-left: 30px;
    margin-top: 10px;
`;

const NavBar = styled.ul`
    display: flex;
    justify-content: space-around;
    /* background-color: green; */
    align-items: center;
    width: 70%;
`;

const NavBarLi = styled.li`
    list-style: none;
`;

const Info = styled.div`
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 120px;
    width: 10%;
`;
const Header = () => {
    return (
        <StyledHeader>
            <Logo src={logo} />
            <NavBar>
                <NavBarLi>지역</NavBarLi>
                <NavBarLi>빵종류</NavBarLi>
                <NavBarLi>빵모임</NavBarLi>
                <NavBarLi>뭐를</NavBarLi>
                <NavBarLi>넣을까</NavBarLi>
            </NavBar>
            <Info>
                <NavBarLi>로그인</NavBarLi>
                <NavBarLi>My Page</NavBarLi>
            </Info>
        </StyledHeader>
    );
};

export default Header;
