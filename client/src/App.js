import MainMenu from '../../../RamenDojo2/client/src/components/MainMenu';
// import BuildBowl from './components/BuildBowl';
import NavBar from '../../../RamenDojo2/client/src/components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ramen Dojo</h1>
      <p><i>earn your black belt in eating</i></p>
      <NavBar />
      {/* <BuildBowl /> */}
      <MainMenu />
      
    </div>
  );
}

export default App;
