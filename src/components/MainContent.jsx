// src/components/IntroSection.jsx
import React from 'react';
import styled from 'styled-components';
import '../index.css';

const Section = styled.div`
  display: flex;
  align-items: center;
   
  padding: 20px;
  background-color: #0f1429; /* Main과 동일한 배경색 */
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #ffffff; /* 텍스트 색상 흰색으로 설정 */

  /* 미디어 쿼리: 화면이 768px 이하로 줄어들면 flex-direction을 column으로 변경 */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

`;

const ImageWrapper = styled.div`
  flex: 1;
  padding: 10px;
  /* 이미지 크기 고정 */
  img {
    width: 100%;
    max-width: 300px; /* 이미지의 최대 너비를 제한 */
    height: auto;
    border-radius: 8px;
  }

  /* 화면이 768px 이하일 때 이미지 크기를 조정 */
  @media (max-width: 768px) {
    img {
      max-width: 200px; /* 작은 화면에서는 최대 너비를 더 작게 설정 */
    }
  }
`;

const Description = styled.div`
  flex: 2;
  padding: 10px;
  color: #ffffff;
  font-family: 'TheJamsil3Regular', sans-serif;

`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left; /* 우측 정렬 */
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
  text-align: left; /* 우측 정렬 */
  max-width: 600px; /* 최대 너비를 제한 */
`;

const IntroSection = ({ image, title, text }) => {
  return (
    <Section>
      <ImageWrapper>
        <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      </ImageWrapper>
      <Description>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Description>
    </Section>
  );
};

export default IntroSection;
