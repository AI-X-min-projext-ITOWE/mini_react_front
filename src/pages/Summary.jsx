import styled from "styled-components"
import React, { useState } from 'react';

const Main = styled.div`
    width: 100%;
    min-width: 1600px;
    min-height: 100vh;
    background-color: #0f1429;
    display: flex;

    #sum-container{
        width: 1168px;
        min-height: 760px;
        display: flex;
        gap: 16px;
        margin: 80px auto;
    }
    #sum-sidebox{
        width: 286px;
        height: 760px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    #sum-menu{
        width: 286px;
        height: 360px;
        background-color: #151C36;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
    }
    #sum-upload{
        width: 262px;
        height: 72px;
        color: #FFFFFF;
        font-size: 28px;
        border: 2px solid #5217EB;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #sum-submitbox{
        width: 286px;
        height: 88px;
        background-color: #151C36;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #sum-submit{
        width: 262px;
        height: 72px;
        color: #FFFFFF;
        font-size: 28px;
        border: 2px solid #5217EB;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sum-contentbox{
        width: 866px;
        min-height: 760px;
        display: flex;
        flex-direction: column;
        gap: 64px;
    }
    #sum-input_contentbox{
        width: 866px;
        min-height: 660px;
        background-color: #151C36;
        border-radius: 8px;
        color: #FFFFFF;
        padding: 16px;
    }
    #sum-output_contentbox{
        width: 866px;
        min-height: 660px;
        background-color: #151C36;
        border-radius: 8px;
        color: #FFFFFF;
        padding: 16px;
    }
    #sum-output_summarybox{
        width: 866px;
        min-height: 280px;
        background-color: #151C36;
        border-radius: 8px;
        color: #FFFFFF;
        padding: 16px;
    }
`
export function SummaryComponent(){
    return(
        <div className="sum-contentbox">
            <div id="sum-output_contentbox">번역본</div>
            <div id="sum-output_summarybox">요약본</div>
        </div>
    )
}

export default function Summary(){
    const [showSummaryComponent, setShowSummaryComponent] = useState(false);

    const handleSubmit = () => {
        setShowSummaryComponent(true);
    };

    return(
        <Main>
             <div id="sum-container">
                <div id="sum-sidebox">
                    <div id="sum-menu">
                        <div id="sum-upload">파일 첨부하기</div>
                        <div>
                            <div id="">번역</div>
                            <div id="">요약</div>
                        </div>
                    </div>
                    <div id="sum-submitbox">
                        <div id="sum-submit" onClick={handleSubmit}>실행</div>
                    </div>
                </div>
                {showSummaryComponent ? <SummaryComponent /> : <div className="sum-contentbox"><div id="sum-input_contentbox"></div></div>}
             </div>
        </Main>
    )
}