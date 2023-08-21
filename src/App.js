import React, { useState } from "react";
import "./App.css";
import ukImg from "./uk.png";
import enImg from "./en.png";

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
  const [currentLanguage, setCurrentLanguage] = useState("uk");
  const handleInputChange = (event) => {
    const sentence = event.target.value.toLowerCase();
    setInputSentence(sentence);
    checkAlphabet(sentence);
  };

  const setEnglish = (event) => {
    setCurrentLanguage("en");
    checkAlphabet(inputSentence);
    document.querySelector("#ukBtn").style.boxShadow = "none";
    event.currentTarget.style.boxShadow = "0px 0px 5px 2.5px #FFB033";
  };
  const setUkrainian = (event) => {
    setCurrentLanguage("uk");
    checkAlphabet(inputSentence);
    document.querySelector("#enBtn").style.boxShadow = "none";
    event.currentTarget.style.boxShadow = "0px 0px 5px 2.5px #FFB033";
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
        <button className="lang-btn" onClick={setEnglish} id="enBtn">
          <img src={enImg} alt="EN" />
        </button>
        <button className="lang-btn" onClick={setUkrainian} id="ukBtn">
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
