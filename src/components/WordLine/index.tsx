import { useState } from "react";
import LetterBox from "../LetterBox";
import './styles.css'


interface Teste {
    ativo?: boolean
}

export default function WordLine({ativo}: Teste) {

    const [activeBox, setActiveBox] = useState(1)

    function onClickLetter(index: number) {
        setActiveBox(index)
    }

    function nextLetter() {
        if (activeBox < 5) {
            setActiveBox(activeBox + 1)
        }
    }

    function generateBoxes() {
        const boxes: JSX.Element[] = []

        for (let i=1; i<=5; i++) {
            boxes.push(
                <LetterBox
                    onLetterUpdated = {nextLetter}
                    key={i} 
                    active={i === activeBox} 
                    onClick={onClickLetter} 
                    id={i} />
            )
        }

        return boxes
    }

    return (
        <div  className={`word-line ${ativo ? "ativo" : ""}`}>
            { generateBoxes() }
        </div>
    )
}