import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import RecipeList from './Pages/RecipeList';
import About from './Pages/About';
import SideBar from './components/SideBar';
import './App.css';
import ErrorPage from './Pages/ErrorPage';

const App = () => {
	return (
    <Router>
        <SideBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipelist" element={<RecipeList />} />
        <Route path="*" element={<ErrorPage />} /> 
        {/* Redirects to ErrorPage when path is unknown */}
      </Routes>
    </Router>
	);
};

export default App;
