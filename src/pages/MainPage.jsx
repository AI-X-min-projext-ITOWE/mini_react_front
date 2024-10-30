import styled from "styled-components"
import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.png'
import '../index.css';

//메인
const Main = styled.div`
    display: flex;
    flex-direction: column; /* 수직 방향으로 배치 */
    align-items: center; /* 수평 중앙 정렬 */
    justify-content: center; /* 수직 중앙 정렬 */
    width: 100%;
    height: 100vh; /* 화면 전체 높이로 설정 */
    background-color: #0f1429;
    text-align: center;
`;

//텍스트
const MainText = styled.div`
    font-family: 'TheJamsil3Regular', sans-serif;
    color: #ffffff;
    font-size: 20px;
    margin-top: 20px;
    line-height: 1.5;
`;

// 버튼
const StyledLink = styled(Link)`
    text-decoration: none;
`;

const StyledButton = styled.button`
    font-family: 'TheJamsil3Regular', sans-serif;
    font-size: 18px; /* 폰트 크기 */
    color: #ffffff; /* 글자 색 */
    background-color: #690D9C; /* 버튼 배경색 */
    padding: 10px 20px; /* 버튼 안쪽 여백 */
    border: none;
    border-radius: 8px; /* 버튼 모서리 */
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3; /* 호버 시 색상 */
    }
`;

export default function MainPage(){

    return(
            
        <Main>  
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            

            <StyledLink to="/summary">
                <StyledButton>지금 시작하기</StyledButton>
            </StyledLink>
            
            <MainText>
            다양한 사진, 논문, 기사 등을 AI로 요약하고 번역해 드리며, <br /> 
             음성으로도 제공합니다! 핵심만 쏙쏙 파악하고, <br />
             시간은 확실히 절약하세요!
            </MainText>
             <div className="Maintext"></div>

        </Main>
    )
}