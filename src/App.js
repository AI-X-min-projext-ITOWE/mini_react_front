import Header from './components/Header'
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import Summary from './pages/Summary';
import Test from './pages/Test';
import ItemDetail from './components/ItemDetail'; // 정확한 경로로 임포트
import './reset.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}/>
        <Route path="/summary" element={<Summary />}/>
        <Route path="/mypage" element={<MyPage />}/>
        <Route path="/mypage/item/:id" element={<ItemDetail />} /> {/* 상세 페이지 라우트 */}
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;