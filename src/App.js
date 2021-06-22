import './assets/css/App.css';
// Data
import pads from './assets/data/pads.js';


function App() {
  return (
    <section id='drum-machine'>
      <div id="name">
        LinnDrum
      </div>
      <div id="controls">
        <div id='display'></div>
        <div id='power'></div>
        <div id='volume'></div>
      </div>
      <div id='pad-bank'>
        <div
          id='bass-drum'
          className='drum-pad red'>
          Q
        </div>
        <div
          id='snare'
          className='drum-pad orange'>
          W
        </div>
        <div
          id='hi-hat'
          className='drum-pad yellow'>
          E
        </div>
        <div
          id='crash-cymbal'
          className='drum-pad blue'>
          A
        </div>
        <div
          id='tom-tom-1'
          className='drum-pad cyan'>
          S
        </div>
        <div
          id='claps'
          className='drum-pad green'>
          D
        </div>
        <div
          id='tambourine'
          className='drum-pad purple'>
          Z
        </div>
        <div
          id='high-conga'
          className='drum-pad magenta'>
          X
        </div>
        <div
          id='cowbell'
          className='drum-pad mauve'>
          C
        </div>
      </div>
    </section>
  );
}

export default App;