import React from 'react';
import { Button } from 'react-bootstrap';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function TranscriptionButton({ setTranscription, onStartRecording, onStopRecording }) {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const startListening = () => {
        resetTranscript(); 
        onStartRecording && onStartRecording();
        SpeechRecognition.startListening({ continuous: true });
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setTranscription(transcript);
        onStopRecording && onStopRecording(transcript);
    };

    return (
        <div>
            <Button variant="primary" onClick={startListening} disabled={listening}>
                Start Recording
            </Button>
            <Button variant="secondary" onClick={stopListening} disabled={!listening}>
                Stop Recording
            </Button>
        </div>
    );
}

export default TranscriptionButton;
