// import BuildBowl from './components/BuildBowl';
import './App.css';
import AccountMain from './views/AccountMain';

// import RegisterMain from './views/RegisterMain';
// import UserMain from './views/UserMain';


function App() {
  return (
    <div className="App">
      <div className="NameLogo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lbM8e24nx_4Z6XUFFwcSkdGA8dAab1i4eg&usqp=CAU" alt="ramen" className="Logo" ></img>
        <div>
          <h1>Ramen Dojo</h1>
          <p><i>earn your black belt in eating</i></p>
        </div>
      </div>

        {/* <RegisterMain /> */}
      {/* <BuildBowl /> */}
      {/* <UserMain /> */}
      <AccountMain />

    </div>
  );
}

export default App;
