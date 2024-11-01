import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    width: 300px;
    height: 120px;
    background: #690D9C;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: #FFFFFF;
`;

export function Loading() {
    const [loadingText, setLoadingText] = useState("잠시만 기다려 주세요.");

    useEffect(() => {
        let intervalId;
        let dotsCount = 0;

        const updateDots = () => {
            dotsCount = (dotsCount + 1) % 6;
            const dots = ".".repeat(dotsCount);
            setLoadingText(`잠시만 기다려 주세요${dots}`);
        };

        intervalId = setInterval(updateDots, 500);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <ModalBackground>
            <ModalContent>
                <p>작업 진행 중 입니다.</p>
                <p>{loadingText}</p>
            </ModalContent>
        </ModalBackground>
    );
}