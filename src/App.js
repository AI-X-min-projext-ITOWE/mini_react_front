import Header from './components/Header'
import MainPage from './pages/MainPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}/>
      </Routes>
    </>
  );
}

export default App;
