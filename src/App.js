import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import UserSearchPage from './Components/UserSearchPage';
import RandomTweetPage from './Components/RandomTweetPage';

//props
let userPageSelection;



function App() {
  return (
    <div className="App">
      <div className="navbar"> <NavBar /></div>
      <div className="pageContent">
          {/* <div className="homePage"><HomePage /></div> */}
          <button type="button" class="btn btn-outline-secondary">Secondary</button>

          <div className="userSearchPage"><UserSearchPage /></div>
          {/* <div className="randomTweetPage"><RandomTweetPage /></div> */}
      </div>
    </div>
      
      )
}

export default App;
