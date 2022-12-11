import React, { FunctionComponent } from 'react';

export const SpeechToText: FunctionComponent<SpeechToTextProps> = ({ onResult, lang }) => {

  // @ts-ignore
  const SpeechRecognition = window.webkitSpeechRecognition;
  const recognition = React.useMemo(() => {
    return new SpeechRecognition();
  }, [SpeechRecognition]);


  recognition.continuous = false; // false = stop after first result
  recognition.lang = lang;
  recognition.interimResults = false; // false = stop after first result
  recognition.maxAlternatives = 1; // 1 = return only the best result

  const startRecognition = React.useCallback(() => {
    recognition.start();
  }, [recognition]);

  recognition.onresult = function (event: any) {
    const result = event.results[0][0];
    onResult(result);
  };

  recognition.onspeechend = function () {
    recognition.stop();
  };

  recognition.onnomatch = function (event:any) {
    console.log(event);
  };

  recognition.onerror = function (event:any) {
    console.log('Error occurred in recognition: ' + event.error);
  };

  return (
    <div>
      <button onClick={startRecognition} >Start recording</button>
    </div>
  );
};

interface SpeechToTextProps {
  onResult: (speechResult: object) => void;
  lang: string;
}