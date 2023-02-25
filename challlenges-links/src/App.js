import logo from './logo.svg';
import './App.css';
import TableLink from './Table';

import 'bootstrap/dist/css/bootstrap.min.css';

let Links= [{url:`https://cyf-highscore-react-boshram.netlify.app/`,
title:"High Score Challenge"}]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TableLink Links = {Links}/>
    </div>
  );
}

export default App;
