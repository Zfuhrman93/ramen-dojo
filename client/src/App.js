import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import RegisterMain from './views/RegisterMain';
import UserMain from './views/UserMain';
//import BuildBowl from './components/BuildBowl';


function App() {
  const [ userId, setUserId ] = useState('');
  useEffect(() => {
    async function fetchUserId() {
      try{
        const id = await axios.get('http://localhost:8000/api/protected', { withCredentials: true });
        setUserId(id);
      }catch(err){
        console.log(err);
      }
    }

    fetchUserId();
  })

  return (
    <div className="App">
      <h1>Ramen Dojo</h1>
      <p><i>earn your black belt in eating</i></p>
      <Router>
        <RegisterMain path='/login' />
        <UserMain id={userId} path='/' />
      </Router>
    </div>
  );
}

export default App;
