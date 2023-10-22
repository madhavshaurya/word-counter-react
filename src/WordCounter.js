import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="6"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Enter text here..."
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
