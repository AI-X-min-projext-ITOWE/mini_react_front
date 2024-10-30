// src/routes/Mypage.jsx
import React from 'react';
import styled from "styled-components"

const Main = styled.div`
    width: 100%;
    min-width: 1600px;
    min-height: 1080px;
    background-color: #0f1429;
`

export default function MyPage(){

    return(
        <Main>
             <div>여기는 마이 페이지입니다.</div>;
        </Main>
    )
}
