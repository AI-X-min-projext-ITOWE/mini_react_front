import Header from './components/Header'
import MainPage from './pages/MainPage';
import Mypage from './pages/Mypage';
import Summary from './pages/Summary';

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
        <Route path="/mypage" element={<Mypage />}/>

      </Routes>
    </>
  );
}

export default App;
