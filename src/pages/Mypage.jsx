import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Main = styled.div`
    width: 100%;
    min-width: 1600px;
    min-height: 100vh;
    background-color: #0f1429;
    display: flex;
    justify-content: center;
    font-family: TheJamsil3Regular;
    
    #myp-container{
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
        color: #7b5bff; /* Hover 시 색상 변경 */
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
    align-items: center;
    justify-content: center;
`;

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    font-size: 18px;
    width: 100%;
    max-width: 700px;
    border-bottom: 1px solid #333;
    &:last-child {
        border-bottom: none;
    }
    a {
        text-decoration: none;
        color: inherit;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PageButton = styled.button`
    margin: 0 5px;
    padding: 8px 12px;
    font-size: 16px;
    color: #a9b3d1;
    background-color: #690D9C;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: TheJamsil3Regular;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

export default function MyPage() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const initialItems = Array.from({ length: 20 }, (_, index) => ({
            id: index + 1,
            name: `(저장한 이름) ${index + 1}`,
            date: getCurrentDate()
        })).reverse();
        setItems(initialItems);
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <Main>
            <div id="myp-container">
            <Sidebar>
                <Title>마이페이지</Title>
                <RecordText to="/mypage">나의 기록</RecordText> {/* 링크 추가 */}
            </Sidebar>
            <Content>
                {currentItems.map((item, index) => (
                    <Item key={item.id}>
                        <Link to={`/mypage/item/${item.id}`}>
                            <div>{index + 1 + indexOfFirstItem}. {item.name}</div>
                            <div>{item.date}</div>
                        </Link>
                    </Item>
                ))}
                <Pagination>
                    <PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
                        이전
                    </PageButton>
                    <span>{currentPage} / {totalPages}</span>
                    <PageButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                        다음
                    </PageButton>
                </Pagination>
            </Content>
            </div>
        </Main>
    );
}
