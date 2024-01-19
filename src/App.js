import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import History from './pages/History';
import Favourite from './pages/Favourite';
import Quotes from './pages/Quotes';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/favourites' element={<Favourite/>}/>
        <Route path='/quotes' element={<Quotes/>}/>

      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
