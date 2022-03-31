import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import RegisterMain from './views/RegisterMain';
import UserMain from './views/UserMain';
import OrderMain from './views/OrderMain';
import AccountMain from './views/AccountMain';
import BuildBowl from './components/BuildBowl';


function App() {
  const [ userId, setUserId ] = useState('');
  useEffect(() => {
    async function fetchUserId() {
      try{
        const id = await axios.get('http://localhost:8000/api/protected', { withCredentials: true });
        setUserId(id.data);
      }catch(err){
        console.log(err);
      }
    }

    fetchUserId();
  })

  return (
    <div className="App">
      <div className="NameLogo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lbM8e24nx_4Z6XUFFwcSkdGA8dAab1i4eg&usqp=CAU" alt="ramen" className="Logo" />
        <div>
          <h1>Ramen Dojo</h1>
          <p><i>earn your black belt in eating</i></p>
        </div>
      </div>
      <Router>
        <RegisterMain path='/login' />
        <UserMain id={userId} path='/' />
        <OrderMain id={userId} path='/cart' />
        <AccountMain id={userId} path='/edit/:id' />
        <BuildBowl id={userId} path='/bowl' />
      </Router>
    </div>
  );
}

export default App;
