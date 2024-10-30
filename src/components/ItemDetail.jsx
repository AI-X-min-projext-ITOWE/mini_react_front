import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from "styled-components";

const Main = styled.div`
    width: 100%;
    min-width: 1600px;
    height: 1080px;
    min-height: 100vh;
    background-color: #0f1429;
    display: flex;
    justify-content: center;
    font-family: TheJamsil3Regular;
    line-height: 1.5;

    #id-container{
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
    margin-top: 20px; /* "나의 기록" 아래로 내림 */
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
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TextContent = styled.div`
    text-align: left;
    flex-grow: 1;
`;

const BackButton = styled.button`
    align-self: flex-end;
    color: #a9b3d1;
    background-color: #690D9C;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    margin-top: 20px;
    font-family: TheJamsil3Regular;

    &:hover {
        background-color: #540A7C;
    }
`;

const items = [
    { id: '1', name: '아이템 1', description: '아이템 1의 상세 정보' },
    { id: '2', name: '아이템 2', description: '아이템 2의 상세 정보' },
    { id: '3', name: '아이템 3', description: '아이템 3의 상세 정보' },
];

export default function ItemDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const item = items.find(item => item.id === id);

    return (
        <Main>
            <div id="id-container">
            <Sidebar>
                <Title>마이페이지</Title>
                <RecordText to="/mypage">나의 기록</RecordText>
            </Sidebar>
            <Content>
                <TextContent>
                    {item ? (
                        <>
                            <h2>상세 페이지</h2>
                            <p>아이템 이름: {item.name}</p>
                            <p>아이템 설명: {item.description}</p>
                        </>
                    ) : (
                        <>
                            <h2>아이템을 찾을 수 없습니다.</h2>
                            <p>요청하신 아이템이 존재하지 않습니다.</p>
                        </>
                    )}
                </TextContent>
                <BackButton onClick={() => navigate('/mypage')}>돌아가기</BackButton>
            </Content>
            </div>
        </Main>
    );
}
