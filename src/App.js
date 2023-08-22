import React, { useState } from "react";
import "./App.css";
import ukImg from "./uk.png";
import enImg from "./en.png";

const languages = {
  en: {
    alphabet: "abcdefghijklmnopqrstuvwxyz",
  },
  uk: {
    alphabet: "абвгдеєжзиіїйклмнопрстуфхцчшщьюя",
  },
};

function App() {
  const [inputSentence, setInputSentence] = useState("");
  const [missingLetters, setMissingLetters] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("uk");

  const handleInputChange = (event) => {
    const sentence = event.target.value.toLowerCase();
    setInputSentence(sentence);
    checkAlphabet(sentence);
  };

  const setLanguage = (lang) => {
    const newLanguage = languages[lang];
    if (!newLanguage) {
      throw new Error(`Invalid language: ${lang}`);
    }
    setCurrentLanguage(lang);
    checkAlphabet(inputSentence);
  };

  const setEnglish = () => {
    setLanguage("en");
  };
  const setUkrainian = () => {
    setLanguage("uk");
  };

  const checkAlphabet = (sentence) => {
    const missing = languages[currentLanguage].alphabet
      .split("")
      .filter((letter) => !sentence.includes(letter));
    setMissingLetters(missing);
  };

  return (
    <div className="container">
      <nav className="lang-wrapper">
        <button
          className={`lang-btn ${currentLanguage === "en" ? "active" : ""}`}
          onClick={setEnglish}
        >
          <img src={enImg} alt="EN" />
        </button>
        <button
          className={`lang-btn ${currentLanguage === "uk" ? "active" : ""}`}
          onClick={setUkrainian}
        >
          <img src={ukImg} alt="UK" />
        </button>
      </nav>

      <textarea
        placeholder="Enter a sentence..."
        value={inputSentence}
        className="form-control"
        onChange={handleInputChange}
      />
      {missingLetters.length > 0 && (
        <div className="missing-wrapper">
          <p className="missing-title">Missing letters:</p>
          <p className="missing-letters">{missingLetters.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
