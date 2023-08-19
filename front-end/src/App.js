import logo from './logo.svg';
import './App.css';
import React from 'react';
import VideoUploadForm from './VideoUploadForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Video Website</h1>
      </header>
      <main>
        <VideoUploadForm />
      </main>
    </div>
  );
}

export default App;
