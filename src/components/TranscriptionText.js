// TranscriptionText.js
import React from 'react';
import { Spinner } from 'react-bootstrap'; // Import Spinner

function TranscriptionText({ transcription, isLoading }) {
    return (
        <div className="transcription-container">
            {isLoading ? (
                <div className="spinner-container">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <textarea 
                    className="transcription-text" 
                    value={transcription} 
                    readOnly 
                    placeholder="Transcription will appear here..."
                ></textarea>
            )}
        </div>
    );
}

export default TranscriptionText;
