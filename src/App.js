import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';
import Home from './Home';
import ManagementProgramme from './ManagementProgramme';

function App() {
  return (
    <div >
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ManagementProgramme" element={<ManagementProgramme />} />
      </Routes>
    </Router>
    
    <Footer />
    </div>
  );
}

export default App;
