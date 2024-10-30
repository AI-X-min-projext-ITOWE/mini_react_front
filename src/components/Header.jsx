// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background: linear-gradient(135deg, #5E17EB 0%, #720455 75%, #910A67 100%);
  display: flex;
  align-items: center;
  justify-content: center; 
 
`;

const NavItem = styled.div`
  margin: 0 15px;
  color: white;
  font-size: 13px;
  cursor: pointer;
  font-family: sans-serif; /* 지정된 폰트 적용 */


  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <Main>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <NavItem>메인페이지</NavItem>
      </Link>
      <Link to="/summary" style={{ textDecoration: 'none', color: 'white' }}>
        <NavItem>요약하기</NavItem>
      </Link>
      <Link to="/mypage" style={{ textDecoration: 'none', color: 'white' }}>
        <NavItem>마이페이지</NavItem>
      </Link>
    </Main>
  );
}

export default Header;
