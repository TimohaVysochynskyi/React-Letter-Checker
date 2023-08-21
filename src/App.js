import React, { useState } from "react";
import "./App.css";

function App() {
  const languages = {
    en: {
      alphabet: "abcdefghijklmnopqrstuvwxyz",
    },
    uk: {
      alphabet: "абвгдеєжзиіїйклмнопрстуфхцчшщьюя",
    },
  };

  const [inputSentence, setInputSentence] = useState("");
  const [missingLetters, setMissingLetters] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("en"); // Початкова мова алфавіту - англійська

  const handleInputChange = (event) => {
    const sentence = event.target.value.toLowerCase();
    setInputSentence(sentence);
    checkAlphabet(sentence);
  };

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
    checkAlphabet(inputSentence);
  };

  const checkAlphabet = (sentence) => {
    const missing = languages[currentLanguage].alphabet
      .split("")
      .filter((letter) => !sentence.includes(letter));
    setMissingLetters(missing);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Alphabet Checker</h1>
        <select value={currentLanguage} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="uk">Українська</option>
        </select>
        <textarea
          placeholder="Enter a sentence..."
          value={inputSentence}
          onChange={handleInputChange}
        />
        <div className="missing-letters">
          {missingLetters.length > 0 && (
            <p>Missing letters: {missingLetters.join(", ")}</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
