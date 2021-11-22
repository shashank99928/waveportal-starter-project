import * as React from 'react';
import { ethers } from 'ethers';
import './App.css';

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
          <span role="img" aria-label="handEmoji">
            👋{' '}
          </span>{' '}
          Hey there!
        </div>

        <div className="bio">
          I am Shashank and Currently I am learning about blockchain! Connect
          your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
