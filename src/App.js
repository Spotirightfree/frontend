import logo from './logo.svg';
import './App.css';
import axios from 'axios'

async function loginService() {
  await axios.get(`${process.env.REACT_APP_GATEWAY_URL}/login-service/HelloWorld`, { crossDomain: true })
  .then(res => {
    alert(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  console.log(process.env.REACT_APP_GATEWAY_URL)
}
async function musicService() {
  await axios.get(`${process.env.REACT_APP_GATEWAY_URL}/music-service/HelloWorld`, { crossDomain: true })
  .then(res => {
    alert(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  console.log(process.env.REACT_APP_GATEWAY_URL)
}
async function playlistService() {
  await axios.get(`${process.env.REACT_APP_GATEWAY_URL}/playlist-service/HelloWorld`, { crossDomain: true })
  .then(res => {
    alert(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  console.log(process.env.REACT_APP_GATEWAY_URL)
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        Welkom bij mijn React App! In Kubernetes! Met Ocelot!
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <button onClick={loginService}>Login-service</button>
        <button onClick={musicService}>Music-service</button>
        <button onClick={playlistService}>Playlist-service</button>
      </header>
    </div>
  );
}

export default App;
