import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import MainContent from '../components/MainContent';
import work from '../assets/img/main/work1.JPG';
import trans from '../assets/img/main/trans2.JPG';
import summary from '../assets/img/main/summary3.JPG';

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
            const scrollPosition = window.scrollY;
    
            if (scrollPosition > 50 && !isVisible) {
                setIsVisible(true);
                setShowIndicator(false); // 스크롤 시작 시 유도 텍스트 숨기기
            } else if (scrollPosition <= 50 && isVisible) {
                setIsVisible(false); // 스크롤이 최상단에 있으면 초기 화면으로 복귀
                setShowIndicator(true); // 스크롤 유도 표시 다시 보이기
            }
        };

        window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible]);

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
                            image={work}
                            title="업무 생산성 향상을 위한 통합 솔루션"
                            text="Briefify는 자료 요약, 번역, 음성 지원 등 여러 기능을 통해 효율적인 정보 관리와 생산성 향상을 돕는 통합 솔루션을 제공합니다. 시간과 자원을 절약하여 더 나은 결과를 만들어보세요."
                        />
                    )}
                </div>

                <div ref={mainContentRef} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
                    {isVisible && (
                        <MainContent
                            image={summary}
                            title="방대한 자료 속 핵심만 빠르게 요약"
                            text="컨설팅 리포트, 연구 논문, 분석 자료... 이 모든 자료를 하나하나 읽기엔 시간이 부족하지 않으신가요? 우리의 서비스는 AI를 통해 방대한 정보를 요약해 주요 내용을 빠르게 제공합니다. 필요한 정보만 간추려 보면서 더 효율적인 의사결정을 경험하세요!"
                        />
                    )}
                </div>

                <div ref={mainContentRef} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
                    {isVisible && (
                        <MainContent
                            image={trans}
                            title="글로벌 자료에 대한 언어 장벽 해소"
                            text="전 세계의 다양한 언어로 작성된 문서를 AI가 자동으로 번역해드립니다. 주요 내용과 핵심 정보에만 집중할 수 있도록, 다국어 번역 지원을 통해 더욱 빠르게 글로벌 자료에 접근해보세요."
                        />
                    )}
                </div>
                
                {showIndicator && <ScrollIndicator>⬇ 스크롤을 하세요 ⬇</ScrollIndicator>}
            </div>
        </Main>
    );
}
