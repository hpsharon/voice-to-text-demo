import React from 'react';
import './App.css';
import {SpeechToTextSection} from "./speech-to-text-section";

// Show the hunting package + query assistant
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
// Browser support https://caniuse.com/speech-recognition
// Demo app BG color https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/
// Present this code
// Lang: https://www.w3schools.com/tags/ref_language_codes.asp
// Show on Hunting


function App() {

  return (
    <div className="App">
      <div>
        <SpeechToTextSection lang={'en-US'}/>
      </div>
      <div>
        <SpeechToTextSection lang={'he-IL'}/>
      </div>
      <div>
        <SpeechToTextSection lang={'es-SP'}/>
      </div>
      <div>
        <SpeechToTextSection lang={'fa'}/>
      </div>
    </div>
  );
}

export default App;

// get all the emails from last week with at least one attachment
// get all cloud events from Amazon web services in November
// get all mail attachments who are images from the past week