// React
import React, {useState} from 'react';
// CSS
import './assets/css/App.css';
// Data
import pads from './assets/data/pads.js';

const PadBank = ({pads, playAudio, setText}) => {
  const HandleMouseClick = (letter, instrument) => {
    setText(instrument);
    playAudio(letter);
  }
  const padButtons = pads.map((pad) => {
    return (
      <li
        key={pad.id}
        id={pad.id}
        className={`drum-pad ${pad.color}`}
        onClick={() => HandleMouseClick(pad.letter, pad.id)}
        tabIndex={pad.padIndex}
      >
        {pad.letter}
        <audio
          id={pad.letter}
          src={pad.sound}
          className='clip'
          type='audio/wav'
        >
          <p>Your browser does not support the audio element.</p>
        </audio>
      </li>
    )
  });
  return (
    <ul id='pad-bank'>
      {padButtons}
    </ul>
  );
}

const Display = ({text}) => {
  return (
    <div id='display'>{text}</div>
  )
}

const App = () => {
  // Display State
  const initialState = "Welcome...";
  const [text, setText] = useState(initialState);

  const playAudio = (letter) => {
    const audio = document.getElementById(letter);
    audio.play();
  };

  const handleKeyPress = (event) => {
    const keyPressed = event.key.toUpperCase();
    pads.forEach(pad => {
      if (pad.letter === keyPressed) { // play only on assigned keys
        setText(pad.id);
        playAudio(keyPressed);
      }
    });
  }

  return (
    <section
      id='drum-machine'
      tabIndex="0"
      autoFocus
      onKeyDown={(event) => handleKeyPress(event)}
    >
      <div id="name">
        LinnDrum
      </div>
      <div id="controls">
        <Display text={text} />
        <div id='power'></div>
        <div id='volume'></div>
      </div>
      <PadBank pads={pads} playAudio={playAudio} setText={setText}/>
    </section>
  );
}

export default App;