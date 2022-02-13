import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import WordLine from './components/WordLine';

function App() {

  const [activeLine, setActiveLine] = useState(1)
  const [currentWord, setCurrentWord] = useState("     ")
  const [usedWords, setUsedWords] = useState([])
  const [letterIndex, setLetterIndex] = useState(0)

  const handleBackspace = useCallback(() => {
    const newLetterIndex = letterIndex > 0 ? letterIndex - 1 : letterIndex
    
    setLetterIndex(newLetterIndex)

    let newWord = currentWord.substring(0, newLetterIndex) + " ".repeat(5 - newLetterIndex)

    setCurrentWord(newWord)
  }, [letterIndex, currentWord])

  const handleLetterInput = useCallback((letter: string) => {
    let newWord = ""

    if (letterIndex > 0) {
      newWord = currentWord.substring(0, letterIndex) + letter + currentWord.substring(letterIndex + 1, 5)
    } else {
      newWord = letter  + currentWord.substring(1, 5) 
    }

    setCurrentWord(newWord)
    if (letterIndex < 4) {
      setLetterIndex(letterIndex + 1)
    }
  }, [letterIndex, currentWord])

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.code === "Backspace") {
      return handleBackspace()
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
      handleLetterInput(event.key)
    }
    
  }, [handleLetterInput, handleBackspace])


  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  function onClickLetterBox(index: number) {
    setLetterIndex(index - 1)
  }

  function generateWordLines() {
    const lines = []

    for (let i = 1; i <= 5; i++) {
      let ativo = false
      let palavra = "     "

      if (i < activeLine) {
        palavra = usedWords[i - 1]
      } else if (i === activeLine) {
        ativo = true
        palavra = currentWord
      }

      lines.push(
        <WordLine
          onClickLetterBox={onClickLetterBox}
          key={i}
          active={ativo}
          letterIndex={letterIndex + 1}
          word={palavra}
        />
      )
    }

    return lines
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          TERMO
        </p>
      </header>
        { generateWordLines() }
    </div>
  );
}

export default App;
