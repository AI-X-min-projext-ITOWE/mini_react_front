import styled, { keyframes } from "styled-components"
import React, { useState } from 'react';
import upload from '../assets/img/summary/upload.png'
import audioImg from '../assets/img/summary/audio.png'
import right from '../assets/img/summary/right.png'
import check from '../assets/img/summary/check.png'
import { Loading } from '../components/Loading'

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
        margin: 16px 0 0 0;

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
        border-radius: 0 0 16px 16px;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        font-size: 18px;
    }
    #sum-output_contentbox{
        width: 866px;
        min-height: 660px;
        background-color: #151C36;
        border-radius: 0 0 16px 16px;
        color: #FFFFFF;
    }
    #sum-output_summarybox{
        width: 866px;
        min-height: 280px;
        background-color: #151C36;
        border-radius: 0 0 16px 16px;
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
    }
    #sum-translation{
        padding: 8px;
        line-height: 1.2;
    }
    #sum-summary{
        padding: 8px;
        line-height: 1.2;
    }
    .sum-bar{
        width: 262px;
        height: 1px;
        background: linear-gradient(135deg, #5E17EB 0%, #720455 75%, #910A67 100%);
        margin: 16px 0 16px 0;
    }

    #sum-optionbox{
        width: 200px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        border-radius: 50px;
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
    #sum-savelog{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        color: #FFFFFF;
    }
    #sum-footbar{
        width: 100%;
        height: 1px;
        background: linear-gradient(135deg, #5E17EB 0%, #720455 75%, #910A67 100%);
        margin: 0 0 32px 0;
    }
    #sum-textarea::placeholder {
        font-size: 16px;
    }
    #sum-s_upload{
        width: 100px;
        height: 32px;
        background-color: #0056b3;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    
    &:hover {
        background-color: #004494;
    }
    }
`

export function SummaryComponent({ translation, summary, audioUrl, isSpeech, isSummary }) {
    const handleAudioPlay = () => {
        audioUrl.play().catch((error) => {
            console.error("오디오 재생 중 오류 발생:", error);
        });
    };

    return (
        <div className="sum-contentbox">
            <div id="sum-output_contentbox">
                <div className="sum-titlebar">결과</div>
                <div id="sum-translation">
                     {translation}
                </div>
            </div>
            {summary && (
            <div id="sum-output_summarybox">
                <div className="sum-titlebar">요약본</div>
                <div id="sum-summary">
                    {summary}
                </div>
            </div>
            )}
            {isSpeech && (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div id="sum-audiobox" onClick={handleAudioPlay}>
                    <div id="sum-audiocolor">
                        <img id="sum-img" src={audioImg} alt="audio_icon"></img>
                    </div>
                    <div id="sum-audiotext">음성 듣기</div>
                </div>
            </div>
            )}
            <div id="sum-footbar"></div>
        </div>
    );
}
  
  export default function Summary(){
    const [isLoading, setIsLoading] = useState(false);
    const [showSummaryComponent, setShowSummaryComponent] = useState(false);
    const [showSaveComponent, setShowSaveComponent] = useState(false);
    const [title, setTitle] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [summaryData, setSummaryData] = useState({ translation: "", summary: "", audio: "", text: "" });
    const [isSummary, setIsSummary] = useState(false);
    const [isSpeech, setIsSpeech] = useState(false);
    const [fromLang, setFromLang] = useState("0");
    const [toLang, setToLang] = useState("0");


    //api 서버 url
    const API_URL = process.env.REACT_APP_API_URL;
    console.log("API URL:", API_URL);
    const PORT = process.env.REACT_APP_BACKEND_PORT;
    console.log("PORT:", PORT)

    const handleFileUpload = (event) => {
        const file = event.target?.files?.[0];
        if (file) {
            setSelectedFile(file);
        } else {
            console.error("No file selected or event target is undefined");
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.style.backgroundColor = "#F0F0F0";
    };

    const handleDragLeave = (e) => {
        e.currentTarget.style.backgroundColor = "#FFFFFF";
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.style.backgroundColor = "#FFFFFF";

        const file = e.dataTransfer.files[0];
        if (file) {
            setSelectedFile(file);
            console.log("파일이 업로드되었습니다:", file.name);
        }
    };

    const handleTextChange = (event) => {
        const text = event.target.value;
        setSummaryData((prevData) => ({ ...prevData, text }));
        setSelectedFile(null);
    };

    const handleSubmit = async () => {
        setIsLoading(true); // 로딩 시작

        try {
            const hasText = summaryData.text && summaryData.text.trim() !== "";
            const hasFile = !!selectedFile;
            let response;

            if (hasFile) {
                const formData = new FormData();
                formData.append("file", selectedFile);
    
                response = await fetch(`${API_URL}:${PORT}/images?from_lang=${fromLang}&to_lang=${toLang}&is_summary=${isSummary}&is_speech=${isSpeech}`, {
                    method: "POST",
                    body: formData,
                });
            } else if (hasText) {
                response = await fetch(`${API_URL}:${PORT}/text?from_lang=${fromLang}&to_lang=${toLang}&is_summary=${isSummary}&is_speech=${isSpeech}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text: summaryData.text }),
                });
            } else {
                console.error("No text or file provided.");
                return;
            }
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            
            // let audioBase64 = null;
            // let audioSrc = null;
            // let audioElement = null;

            let audioBase64 = data.result[0]
            let audioSrc = `data:audio/mpeg;base64,${audioBase64}`;
            let audioElement = new Audio(audioSrc);

            setSummaryData({
                audio: audioElement,
                summary: data.result[1],
                translation: data.result[2]
            })

            // const audioBase64 = data.result[0];  // main 브랜치의 변경 사항 유지
            // const audioSrc = `data:audio/mpeg;base64,${audioBase64}`;
            // const audioElement = new Audio(audioSrc);

            console.log(data)
  
    
            // setSummaryData({
            //     translation: data.result[1],
            //     summary: data.result[0],
            //     audio: audioElement,
            // });

            setShowSummaryComponent(true);
            setShowSaveComponent(true);

        } catch (error) {
            console.error("Request failed:", error);
        } finally {
            setIsLoading(false); // 로딩 종료
        }
    };

    const handleSave = () => {
        const savedSummaries = JSON.parse(localStorage.getItem('savedSummaries')) || [];
        const newEntry = { title, ...summaryData, date: new Date().toISOString() };
        localStorage.setItem('savedSummaries', JSON.stringify([...savedSummaries, newEntry]));
        alert('저장되었습니다.');
        setShowSaveComponent(false);
        setTitle("");
    };

    return (
        <Main>
            <div id="sum-container">
                <div id="sum-sidebox">
                    <div id="sum-menu">
                        <div className="sum-titlebar">메뉴</div>
                        <label id="sum-upload">
                            <input type="file" style={{ display: "none" }} onChange={handleFileUpload} />
                            {selectedFile ? <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><img src={check} style={{ width: "40px", height: "40px" }} alt="upload_icon"/>첨부완료</div> : <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><img src={upload} style={{ width: "40px", height: "40px" }} alt="upload_icon"/>파일 첨부하기</div>}
                        </label>
                        {selectedFile && <div style={{ color: "white", fontSize: "14px", marginTop: "8px" }}>{selectedFile.name}</div>}
                        <div className="sum-bar"></div>
                        <div id="sum-optionbox">
                            <div id="sum-langbox">
                                <select id="sum-fromlang" value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
                                    <option value="0">한국어</option>
                                    <option value="1">중국어</option>
                                    <option value="2">일본어</option>
                                    <option value="3">스페인어</option>
                                    <option value="4">영어</option>
                                </select>
                                <img src={right} alt="right_icon" />
                                <select id="sum-tolang" value={toLang} onChange={(e) => setToLang(e.target.value)}>
                                    <option value="0">한국어</option>
                                    <option value="1">중국어</option>
                                    <option value="2">일본어</option>
                                    <option value="3">스페인어</option>
                                    <option value="4">영어</option>
                                </select>
                            </div>
                            <div style={{width: "200px", height:"80", display: "flex", gap: "8px", flexDirection: "column"}}>
                                <div className="sum-options">
                                    <label htmlFor="summary_button">· 요약</label>
                                    <input type="checkbox" id="summary_button" checked={isSummary} onChange={(e) => setIsSummary(e.target.checked)} />
                                </div>
                                <div className="sum-options">
                                    <label htmlFor="audio_button">· 음성</label>
                                    <input type="checkbox" id="audio_button" checked={isSpeech} onChange={(e) => setIsSpeech(e.target.checked)} />
                                </div>
                            </div>
                        </div>
                        <div className="sum-bar"></div>
                    </div>
                    <div id="sum-submitbox">
                        <div id="sum-submit" onClick={handleSubmit}>Commit</div>
                    </div>
                </div>
                <div>
                    {showSummaryComponent ? (
                        <SummaryComponent translation={summaryData.translation} summary={summaryData.summary} audioUrl={summaryData.audio} isSpeech={isSpeech} isSummary={isSummary}/>
                    ) : (
                        <div className="sum-contentbox">
                            <div id="sum-input_contentbox">
                                {selectedFile ? <div style={{ width: "100%", height: "580px", display: "flex", justifyContent: "center", alignItems: "center", border: "none", backgroundColor: "#151C36", color: "#FFFFFF", padding: "8px", fontSize: "16px", fontFamily: "TheJamsil3Regular", lineHeight: "1.2", fontSize: "24px" }}>{selectedFile.name} 첨부완료</div> : <textarea id="sum-textarea" placeholder="텍스트를 입력하세요" value={summaryData.text} onChange={handleTextChange} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} style={{ width: "100%", height: "580px", resize: "none", outline: "none", border: "none", backgroundColor: "#151C36", color: "#FFFFFF", padding: "8px", fontSize: "16px", fontFamily: "TheJamsil3Regular", lineHeight: "1.2" }} />}         
                                 <div style={{display: "flex", gap: "8px", alignItems: "center"}}>또는<label id="sum-s_upload"><input type="file" style={{ display: "none" }} onChange={handleFileUpload} />파일 첨부</label></div>
                            </div>
                        </div>
                    )}
                    {showSaveComponent && (
                        <div id="save-component" style={{ marginTop: "20px", textAlign: "center", display: "flex", justifyContent: "flex-end" }}>
                            <div id="sum-savelog">
                                <div>로그 기록 :</div>
                                <div style={{ display: "flex" }}>
                                    <input 
                                        type="text" 
                                        placeholder="제목을 입력하세요" 
                                        value={title} 
                                        onChange={(e) => setTitle(e.target.value)} 
                                        style={{ padding: "8px", fontSize: "16px", width: "200px", marginRight: "10px" }}
                                    />
                                    <button 
                                        onClick={handleSave} 
                                        style={{ padding: "8px 16px", backgroundColor: "#690D9C", color: "#FFFFFF", fontSize: "16px", borderRadius: "4px", cursor: "pointer", fontFamily: "TheJamsil3Regular" }}
                                    >
                                        저장
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {isLoading && <Loading />}
            </div>
        </Main>
    );
}
