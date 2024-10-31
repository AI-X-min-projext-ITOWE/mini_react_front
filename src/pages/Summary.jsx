import styled, { keyframes } from "styled-components"
import React, { useRef, useState } from 'react';
import upload from '../assets/img/summary/upload.png'
import audioImg from '../assets/img/summary/audio.png'
import right from '../assets/img/summary/right.png'

const sparkleAnimation = keyframes`
    0% {
    border-color: #5E17EB;
  }
  25% {
    border-color: #720455;
  }
  50% {
    border-color: #910A67;
  }
  75% {
    border-color: #720455;
  }
  100% {
    border-color: #5E17EB;
  }
`;

const Main = styled.div`
    width: 100%;
    min-width: 1600px;
    height: 100%;
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
        cursor: pointer;

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
    #sum-audiobox{
        width: 140px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        background-color: #151C36;
        border: 2px solid transparent;
        animation: ${sparkleAnimation} 1.5s infinite; /* 애니메이션 적용 */
        cursor: pointer;
    }
    #sum-audiocolor{
        width: 30px;
        height: 30px;
        background: linear-gradient(135deg, #5E17EB 0%, #720455 75%, #910A67 100%);
        border-radius: 999px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #sum-audiotext{
        color: #FFFFFF;
    }
    #sum-img{
        width: 36px;
        height: 36px;
    }
    
    input[type="checkbox"] {
        transform: scale(1.5);
    }
    #save-component{
        font-family: TheJamsil3Regular;
    }
    #sum-langbox{
        display: flex;
        color: #FFFFFF;
        gap: 16px;
    }
    select, option{
        font-family: TheJamsil3Regular;
    }
`
export function SummaryComponent({ translation, summary, audioUrl }) {

    console.log(audioUrl)
    
    const handleAudioPlay = () => {
        audioUrl.play().catch((error) => {
            console.error("오디오 재생 중 오류 발생:", error);
        });
    };

    return (
        <div className="sum-contentbox">
            <div id="sum-output_contentbox">
                <div className="sum-titlebar">번역본</div>
                <div id="sum-translation">
                     {translation}
                </div>
            </div>
            <div id="sum-output_summarybox">
                <div className="sum-titlebar">요약본</div>
                <div id="sum-summary">
                     요약
                </div>
            </div>
            <div id="sum-audiobox" onClick={handleAudioPlay}>
                <div id="sum-audiocolor">
                    <img id="sum-img" src={audioImg} alt="audio_icon"></img>
                </div>
                <div id="sum-audiotext">음성 듣기</div>
            </div>
        </div>
    );
}

export default function Summary(){
    const [showSummaryComponent, setShowSummaryComponent] = useState(false);
    const [showSaveComponent, setShowSaveComponent] = useState(false);
    const [title, setTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState(null); // 선택된 파일 상태 추가
    const [summaryData, setSummaryData] = useState({ translation: "", summary: "", audio: "" });
    const [ isSummary, setIsSummary ] = useState(false);
    const [ isSpeech, setIsSpeech ] = useState(false);
    const [ fromLang, setFromLang ] = useState("0");
    const [ toLang, setToLang ] = useState("0");

    //api 서버 url
    const API_URL = process.env.REACT_APP_API_URL;
    console.log("API URL:", API_URL);  // API URL 출력

    // 파일 업로드 핸들러
    const handleFileUpload = (event) => {
        if (!event || !event.target || !event.target.files || event.target.files.length === 0) {
            console.error("No file selected or event target is undefined");
            return;
        }
    
        const file = event.target.files[0];
        setSelectedFile(file); // 파일을 상태에 저장
    };

    const handleSubmit = async () => {
        if (!selectedFile) {
            console.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await fetch(`http://127.0.0.1:8000/images?from_lang=${fromLang}&to_lang=${toLang}&is_summary=${isSummary}&is_speech=${isSpeech}`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            const audioBase64 = data.result;
            const audioSrc = `data:audio/mpeg;base64,${audioBase64}`;
            const audioElement = new Audio(audioSrc);

            setSummaryData({
                translation: data.result,
                summary: data.summary,
                audio: audioElement,
            });
    
            console.log(data);
            
            setShowSummaryComponent(true);
            setShowSaveComponent(true);
        } catch (error) {
            console.error("File upload failed:", error);
        }
    };

    const handleSave = () => {
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
                         {/* 파일 첨부 버튼 (label과 input으로 구성) */}
                        <label id="sum-upload">
                            <input type="file" style={{ display: "none" }} onChange={handleFileUpload} />
                            <img src={upload} style={{ width: "40px", height: "40px" }} alt="upload_icon" />
                            파일 첨부하기
                        </label>
                         <div className="sum-bar"></div>
                        {/* 번역 및 요약 옵션 */}
                        <div id="sum-optionbox">
                            <div id="sum-langbox">
                                <select id="sum-fromlang" value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
                                    <option value="0">한국어</option>
                                    <option value="1">중국어</option>
                                    <option value="2">일본어</option>
                                    <option value="3">스페인어</option>
                                    <option value="4">영어</option>
                                </select>
                                <img src={right} alt="right_icon"></img>
                                <select id="sum-tolang" value={toLang} onChange={(e) => setToLang(e.target.value)}>
                                    <option value="0">한국어</option>
                                    <option value="1">중국어</option>
                                    <option value="2">일본어</option>
                                    <option value="3">스페인어</option>
                                    <option value="4">영어</option>
                                </select>
                            </div>
                            <div className="sum-options">
                                <label htmlFor="summary_button">요약</label>
                                <input type="checkbox" id="summary_button" checked={isSummary} onChange={(e) => setIsSummary(e.target.checked)}/>
                            </div>
                            <div className="sum-options">
                                <label htmlFor="audio_button">음성</label>
                                <input type="checkbox" id="audio_button" checked={isSpeech} onChange={(e) => setIsSpeech(e.target.checked)}/>
                            </div>
                        </div>
                        <div className="sum-bar"></div>
                    </div>
                    <div id="sum-submitbox">
                        <div id="sum-submit" onClick={handleSubmit}>Commit</div>
                    </div>
                </div>
                <div>
                {showSummaryComponent ? <SummaryComponent translation={summaryData.translation} summary={summaryData.summary} audioUrl={summaryData.audio}/> : 
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