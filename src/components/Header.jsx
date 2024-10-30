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
  z-index: 1;
`;

const NavItem = styled.div`
  margin: 0 15px;
  color: white;
  font-size: 13px;
  cursor: pointer;
  font-family: sans-serif; /* 지정된 폰트 적용 */


  &:hover {
    font-weight: bold;

  }

  &.jello-horizontal {
    animation: jello-horizontal 0.9s both;
  }

`;


function Header() {

    const handleAnimation = (e) => {
      // 클릭된 요소에 애니메이션 클래스를 추가
      e.target.classList.add('jello-horizontal');

      // 애니메이션이 끝나면 클래스를 제거하여 다시 사용할 수 있도록
      e.target.addEventListener('animationend', () => {
        e.target.classList.remove('jello-horizontal');
      }, { once: true });
    };



  return (
    
    <Main >
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <NavItem onClick={handleAnimation}>메인페이지</NavItem>
        </Link>
        <Link to="/summary" style={{ textDecoration: 'none', color: 'white' }}>
          <NavItem onClick={handleAnimation}>요약하기</NavItem>
        </Link>
        <Link to="/mypage" style={{ textDecoration: 'none', color: 'white' }}>
          <NavItem onClick={handleAnimation}>마이페이지</NavItem>
        </Link>
    </Main>
  );
}

export default Header;