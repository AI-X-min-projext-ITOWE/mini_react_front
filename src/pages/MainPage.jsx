import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import MainContent from '../components/MainContent';
import sampleImage from '../assets/img/main/sample.png';
import { Link } from "react-router-dom";
import { ReactComponent as BrififyLogo } from '../assets/img/main/Brifify..svg';
import '../index.css';

// Main 스타일 정의
const Main = styled.div`
    width: 100%;
    height: 1200px;
    min-height: 100vh;
    background-color: #0f1429;
    display: flex;
    flex-direction: column;
    text-align: center;

    #mp-container{
        width: 1168px;
        height: 600px;
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        margin-top: 220px;
    }
`;

const MainText = styled.div`
    font-family: 'TheJamsil3Regular', sans-serif;
    color: #ffffff;
    font-size: 20px;
    margin-top: 20px;
    line-height: 1.5;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const StyledButton = styled.button`
    font-family: 'TheJamsil3Regular', sans-serif;
    font-size: 18px;
    color: #ffffff;
    background-color: #690D9C;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const ScrollIndicator = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;
    font-size: 18px;
    animation: bounce 1.5s infinite;

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;

export default function MainPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [showIndicator, setShowIndicator] = useState(true); // 스크롤 유도 표시 상태
    const mainContentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // 스크롤을 50px 이상 할 때만 표시
                setIsVisible(true);
                setShowIndicator(false); // 스크롤 시작 시 유도 텍스트 숨기기
                window.removeEventListener("scroll", handleScroll); // 한 번만 실행
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Main>
            <div id="mp-container">  
                <div className="logo tracking-in-contract-bck">
                    <BrififyLogo width="400" height="auto" />
                </div>
                <br />
                <br />
         
                <StyledLink to="/summary">
                    <StyledButton>지금 시작하기</StyledButton>
                </StyledLink>
            
                <MainText>
                다양한 사진, 논문, 기사 등을 AI로 요약하고 번역해 드리며, <br /> 
                 음성으로도 제공합니다! 핵심만 쏙쏙 파악하고, <br />
                 시간은 확실히 절약하세요!
                </MainText>
                 <div className="Maintext"></div>

                <br /><br /><br />

                <div ref={mainContentRef} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
                    {isVisible && (
                        <MainContent
                            image={sampleImage}
                            title="개발자를 위한 문서 요약 및 번역 서비스"
                            text="기술 문서나 API 문서를 이해하는 데 어려움을 겪으셨나요? 우리의 서비스는 복잡한 개발 문서를 AI를 통해 간편하게 번역하고 요약해 드립니다. 원하는 문서를 업로드하기만 하면, 핵심 내용을 빠르게 파악할 수 있도록 도와드리며, 다양한 언어로 번역해 제공하여 전 세계 개발자와의 협업을 더욱 원활하게 합니다. 시간을 절약하고, 생산성을 높이는 데 최적화된 솔루션을 경험해보세요!"
                        />
                    )}
                </div>
                
                {showIndicator && <ScrollIndicator>⬇ 스크롤을 하세요 ⬇</ScrollIndicator>}
            </div>
        </Main>
    );
}
