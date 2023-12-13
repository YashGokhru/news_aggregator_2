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
import Login from './components/Login';
import Postpage from './components/Postpage';

const apiRoute = 'http://localhost:3001'
function App() {
  document.body.style.backgroundColor = "#1a1d20";

  const [postUrl , setUrl] = useState(apiRoute + '/home/posts/');
  const [login , setLogin] = useState(true);

  const changeUrl = (url) => {
    setUrl(url);
  }
  console.log("check");
  return (
    <>
    <Router>
      
      {login && <Navbar changeUrl={changeUrl} />}
      {console.log("News compo") }
      <Routes>
        <Route exact path = '/login' element = {<Login url = {apiRoute} login={login} setLogin={setLogin}/> } />
        <Route exact path = "/home"  element = {<News url = {postUrl} />} />
        <Route exact path = "/create" element = {<Create />} />
        <Route path= {`/read/:_id`} element = {<Postpage  url = {apiRoute}/>} />
      </Routes>
      
    </Router>
      
    </>
  );
}

export default App;
