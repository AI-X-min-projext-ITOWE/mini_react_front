import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from "styled-components";

const Main = styled.div`
    width: 100%;
    min-width: 1600px;
    min-height: 100vh;
    background-color: #0f1429;
    display: flex;
    justify-content: center;
    font-family: TheJamsil3Regular;

    #id-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1200px;
        height: 800px;
        margin: 120px auto;
    }
`;

const Sidebar = styled.div`
    width: 200px;
    min-height: 600px;
    background-color: #1a1f36;
    color: #a9b3d1;
    border-radius: 8px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    width: 100%;
    height: 32px;
    background: linear-gradient(135deg, #5E17EB 0%, #720455 75%, #910A67 100%);
    padding: 0 0 0 8px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
`;

const RecordText = styled(Link)`
    margin-top: 24px;
    text-align: center;
    font-size: 16px;
    color: #a9b3d1;
    text-decoration: none;

    &:hover {
        color: #7b5bff;
    }
`;

const Content = styled.div`
    width: 800px;
    min-height: 600px;
    background-color: #1a1f36;
    color: #a9b3d1;
    padding: 40px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const DetailTitle = styled.h1`
    font-size: 28px;
    color: #FFFFFF;
    margin-bottom: 16px;
`;

const TextContent = styled.div`
    font-size: 18px;
    color: #a9b3d1;
    line-height: 1.6;
    text-align: left;
    max-width: 600px;
    margin-bottom: 20px;
`;

const BackButton = styled.button`
    color: #a9b3d1;
    background-color: #690D9C;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    font-family: TheJamsil3Regular;

    &:hover {
        background-color: #540A7C;
    }
`;

export default function ItemDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    // 데이터 로드 함수: localStorage에서 데이터를 가져와 특정 ID에 해당하는 항목을 반환합니다.
    const loadSavedItemById = () => {
        const savedSummaries = JSON.parse(localStorage.getItem('savedSummaries')) || [];
        return savedSummaries[id] || null;
    };

    const item = loadSavedItemById();

    return (
        <Main>
            <div id="id-container">
                <Sidebar>
                    <Title>마이페이지</Title>
                    <RecordText to="/mypage">나의 기록</RecordText>
                </Sidebar>
                <Content>
                    {item ? (
                        <>
                            <DetailTitle>{item.title || "제목 없음"}</DetailTitle>
                            <TextContent>
                                <p>{item.summary || "내용이 없습니다."}</p>
                            </TextContent>
                        </>
                    ) : (
                        <TextContent>
                            <p>요청하신 아이템이 존재하지 않습니다.</p>
                        </TextContent>
                    )}
                    <BackButton onClick={() => navigate('/mypage')}>돌아가기</BackButton>
                </Content>
            </div>
        </Main>
    );
}
