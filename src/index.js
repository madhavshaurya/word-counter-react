import React from 'react';
import ReactDOM from 'react-dom';
import WordCounter from './WordCounter'; // Import the WordCounter component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <WordCounter /> {/* Render the WordCounter component here */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
