import styled from "styled-components"
import React from 'react';

const Main = styled.div`
    width: 100%;
    min-width: 1600px;
    min-height: 1080px;
    background-color: #0f1429;
`

export default function MainPage(){

    return(
        <Main>
             <div>여기는 메인 페이지입니다.</div>;
        </Main>
    )
}