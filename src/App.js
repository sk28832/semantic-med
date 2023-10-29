// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import TranscriptionPage from './TranscriptionPage';  // Import the TranscriptionPage component

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>SemanticMed</h1>
      </header>

      <TranscriptionPage />
    </div>
  );
}

export default App;
