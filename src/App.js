// React
import React, {useState} from 'react';
// CSS
import './assets/css/App.css';
// Data
import pads from './assets/data/pads.js';

const PadBank = ({pads, playAudio, buttonState}) => {
  const padButtons = pads.map((pad) => {
    return (
      <li
        id={pad.id}
        className={`drum-pad ${pad.color} ${buttonState[pad.id] ? 'active' : ''}`}
        onClick={() => playAudio(pad)}
        key={pad.id}
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
  const [text, setText] = useState('Welcome...');
  const [buttonState, setButtonState] = useState(
    {
      'bass-drum': false,
      'snare': false,
      'hi-hat': false,
      'crash-cymbal': false,
      'tom-tom-1': false,
      'clap-1': false,
      'tambourine': false,
      'high-conga': false,
      'cowbell': false
    }
  );

  const setActiveButton = (pad, active) => setButtonState({ ...buttonState, [pad.id]: active });

  const playAudio = (pad) => {
    setText(pad.id);
    const audio = document.getElementById(pad.letter);
    audio.currentTime = 0;
    audio.play();
  };

  const handleKeyDown = (event) => {
    const keyPressed = event.key.toUpperCase();
    pads.forEach(pad => {
      if (pad.letter === keyPressed) { // play only on assigned keys
        playAudio(pad);
        setActiveButton(pad, true);
        document.getElementById(pad.id).focus();
      }
    });
  }

  const handleKeyUp = (event) => {
    const keyPressed = event.key.toUpperCase();
    pads.forEach(pad => {
      if (pad.letter === keyPressed) {
        setActiveButton(pad, false);
      }
    });
  }

  return (
    <section
      id='drum-machine'
      tabIndex="0"
      autoFocus
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <div id="name">
        LinnDrum
      </div>
      <div id="controls">
        <Display text={text} />
        <div id='power'></div>
        <div id='volume'></div>
      </div>
      <PadBank
        pads={pads}
        playAudio={playAudio}
        buttonState={buttonState}
      />
    </section>
  );
}

export default App;