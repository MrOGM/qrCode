import React from 'react';
import './Styles/style.css'; // Adjust the path based on your file location
import imageqr from './images/image-qr-code.png';
function App() {
  return (
    <div class = "card">
        <img src={imageqr} class= "qr magy" alt = "qr code"/>
    
        <div class="text-container"> 
        <h1 >Improve your front-end skills by building projects</h1>
        <p >Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
  </div>
  );
}

export default App;
