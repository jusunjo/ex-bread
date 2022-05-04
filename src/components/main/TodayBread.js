import React from "react";
import styled from "styled-components";

const StyledTodayBread = styled.div`
    margin: 50px;
    font-family: "Black Han Sans", sans-serif;
    width: 40%;
    height: 500px;
`;

const ImgBoxs = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-wrap: wrap;
`;

const ImgBox = styled.div`
    background-color: #c4c4c4;
    width: 45%;
    height: 200px;
    margin: 10px;
    margin-left: 0;
`;

const Title = styled.span`
    font-family: "Black Han Sans", sans-serif;
`;
const TodayBread = () => {
    return (
        <>
            <StyledTodayBread>
                <Title>오늘의 빵</Title>
                <ImgBoxs>
                    <ImgBox></ImgBox>
                    <ImgBox></ImgBox>
                    <ImgBox></ImgBox>
                    <ImgBox></ImgBox>
                </ImgBoxs>
            </StyledTodayBread>
        </>
    );
};

export default TodayBread;
