import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './copmonents/Navbar';
import Footer from './copmonents/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/experience' element={<Experience/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
