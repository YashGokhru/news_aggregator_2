import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import Create from './components/Create';

const apiRoute = 'http://localhost:3000'
function App() {
  document.body.style.backgroundColor = "#1a1d20";

  const [postUrl , setUrl] = useState(apiRoute + '/home/posts/');
  const changeUrl = (url) => {
    setUrl(url);
  }
  return (
    <>
    <Router>
      <Navbar changeUrl={changeUrl}/>

      <Routes>
        <Route path = "/"  element = {<News url = {postUrl} />} />
        <Route path = "/create" element = {<Create />} />
      </Routes>
      
    </Router>
      
    </>
  );
}

export default App;
