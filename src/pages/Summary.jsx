import styled from "styled-components"
import React, { useState } from 'react';
import upload from '../assets/img/upload.png'

const Main = styled.div`
    width: 100%;
    min-width: 1600px;
    height: 1200px;
    min-height: 100vh;
    background-color: #0f1429;
    display: flex;
    font-family: TheJamsil3Regular;
    line-height: 1.5;

    #sum-container{
        width: 1168px;
        min-height: 760px;
        display: flex;
        gap: 16px;
        margin: 120px auto;
    }
    #sum-sidebox{
        width: 286px;
        height: 200px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    #sum-menu{
        width: 286px;
        height: 360px;
        background-color: #151C36;
        border-radius: 0 0 8px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid transparent;
        border-image: linear-gradient(135deg, #5E17EB 0%, #720455 75%, #910A67 100%) 1;
    }
    #sum-upload{
        width: 262px;
        height: 72px;
        color: #FFFFFF;
        font-size: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        background-color: #0056b3;
        transition: background-color 0.3s;

    &:hover {
        background-color: #004494;
    }
    }
    #sum-submitbox{
        width: 286px;
        height: 88px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #sum-submit{
        width: 272px;
        height: 72px;
        color: #FFFFFF;
        font-size: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #690D9C;
        border-radius: 8px;
        transition: background-color 0.3s;

    &:hover {
        background-color: #540A7C;
    }
    }
    .sum-contentbox{
        width: 866px;
        min-height: 760px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    #sum-input_contentbox{
        width: 866px;
        min-height: 660px;
        background-color: #151C36;
        border: 1px solid transparent;
        border-image: linear-gradient(135deg, #5E17EB 0%, #720455 75%, #910A67 100%) 1;
        border-radius: 0 0 8px 8px;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        font-size: 18px;
    }
    #sum-output_contentbox{
        width: 866px;
        min-height: 660px;
        background-color: #151C36;
        border-radius: 0 0 8px 8px;
        color: #FFFFFF;
    }
    #sum-output_summarybox{
        width: 866px;
        min-height: 280px;
        background-color: #151C36;
        border-radius: 0 0 8px 8px;
        color: #FFFFFF;
    }

    .sum-titlebar{
        width: 100%;
        height: 32px;
        background: linear-gradient(135deg, #5E17EB 0%, #720455 75%, #910A67 100%);
        display: flex;
        align-items: center;
        padding: 0 0 0 8px;
        color: #FFFFFF;
        margin: 0 0 16px 0;
    }
    .sum-bar{
        width: 262px;
        height: 1px;
        background: linear-gradient(135deg, #5E17EB 0%, #720455 75%, #910A67 100%);
        margin: 16px 0 16px 0;
    }

    #sum-optionbox{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .sum-options{
        font-size: 22px;
        color: #FFFFFF;
        display: flex;
        gap: 8px;
    }
    
    input[type="checkbox"] {
        transform: scale(1.5);
    }
`
export function SummaryComponent(){
    return(
        <div className="sum-contentbox">
            <div id="sum-output_contentbox">
                <div className="sum-titlebar">
                    번역본
                </div>
            </div>
            <div id="sum-output_summarybox">
                <div className="sum-titlebar">
                    요약본
                </div>
            </div>
        </div>
    )
}

export default function Summary(){
    const [showSummaryComponent, setShowSummaryComponent] = useState(false);
    const [showSaveComponent, setShowSaveComponent] = useState(false);
    const [title, setTitle] = useState("");

    const handleSubmit = () => {
        setShowSummaryComponent(true);
        setShowSaveComponent(true); // 기록저장 버튼 표시
    };

    const handleSave = () => {
        const summaryData = {
            title: title,
            translation: "번역본 텍스트", // 실제 번역본 내용으로 교체
            summary: "요약본 텍스트" // 실제 요약본 내용으로 교체
        };
        localStorage.setItem(`summary_${title}`, JSON.stringify(summaryData));
        alert('저장되었습니다.');
        setShowSaveComponent(false); // 저장 후 입력창 숨기기
        setTitle(""); // 제목 초기화
    };

    return(
        <Main>
             <div id="sum-container">
                <div id="sum-sidebox">
                    <div id="sum-menu">
                        <div className="sum-titlebar">메뉴</div>
                        <div id="sum-upload"><img src={upload} style={{width: "40px", height: "40px"}} alt="upload_icon" />파일 첨부하기</div>
                        <div className="sum-bar"></div>
                        <div id="sum-optionbox">
                            <div className="sum-options">
                                <label htmlFor="translate_button">번역</label>
                                <input type="checkbox" id="translate_button" />
                            </div>
                            <div className="sum-options">
                                <label htmlFor="summary_button">요약</label>
                                <input type="checkbox" id="summary_button" />
                            </div>
                        </div>
                        <div className="sum-bar"></div>
                    </div>
                    <div id="sum-submitbox">
                        <div id="sum-submit" onClick={handleSubmit}>Commit</div>
                    </div>
                </div>
                <div>
                {showSummaryComponent ? <SummaryComponent /> : 
                <div className="sum-contentbox">
                    <div id="sum-input_contentbox">
                        <div>Ctrl + V</div>
                        또는
                        <div>파일첨부</div>
                    </div>
                </div>}

                {showSaveComponent && (
                    <div id="save-component" style={{ marginTop: "20px", textAlign: "center" }}>
                        <input type="text" placeholder="제목을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value)} style={{ padding: "8px", fontSize: "16px", width: "300px", marginRight: "10px" }}/>
                        <button onClick={handleSave} style={{padding: "8px 16px", backgroundColor: "#690D9C", color: "#FFFFFF", fontSize: "16px", borderRadius: "4px", cursor: "pointer"}}>
                            저장하기
                        </button>
                    </div>
                )}
                </div>
             </div>
        </Main>
    )
}