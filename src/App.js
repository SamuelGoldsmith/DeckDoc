import './App.css';
import Banner from './elements/Banner';
import {useState , useEffect} from 'react';
import Block from './elements/Block';
import Stethescope from "./images/stethescope.png";
//import Login from './elements/Login';
//import Logout from './elements/Logout';
import { gapi } from 'gapi-script';

const clientid = '866697106535-ut31o87frsde1ns61ov3i86651shjno1.apps.googleusercontent.com';


const App = () => {
  const[page,setPage] = useState('home');

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientid,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });
  //var accessToken = gapi.auth.getToken().accessToken; -- use with api kays later
  return (
    <div className="App">
      <Banner />
        <Block
        color = 'black'
        height = 'small'/>
      <Block
        title = 'Get your routine check up'
        text = 'It is recommended that a deck is repainted every 2-3 years. Is your deck in good health?'
        images = {[Stethescope]}
        color = 'brown'
        height = 'large'
        align = 'center'
        flip = {false}/>
    </div>
  );
}

export default App;
