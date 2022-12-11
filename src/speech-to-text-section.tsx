import React, {FunctionComponent} from 'react';
import {SpeechToText} from "./speech-to-text";
import ReactJson from "react-json-view";

export const SpeechToTextSection: FunctionComponent<SpeechToTextSectionProps> = (props) => {
  const {lang} = props;
  const [speechResult, setSpeechResult] = React.useState({});
  const onResult = React.useCallback((speechResult: object) => {
    // @ts-ignore
    setSpeechResult({transcript: speechResult.transcript, confidence: speechResult.confidence});
  }, [speechResult])

  return (
    <>
      <div style={{display:'flex'}}>
        <div style={{flex:1}}><h1>{lang}</h1></div>
        <div style={{flex:1}}><SpeechToText onResult={onResult} lang={lang}/></div>
        <div style={{flex:1}}><ReactJson
          src={speechResult}
        /></div>
      </div>
    </>
  );
};

interface SpeechToTextSectionProps {
  lang: string;
}
