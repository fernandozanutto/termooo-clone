import LetterBox from "../LetterBox";
import './styles.css'


interface WordLineProps {
    active?: boolean
    word: string
    onClickLetterBox: (index: number) => void
    letterIndex: number
}

export default function WordLine({active, word, onClickLetterBox, letterIndex}: WordLineProps) {
    function onClickLetter(index: number) {
        onClickLetterBox(index)
    }

    function generateBoxes() {
        const boxes = []

        for (let i=1; i<=5; i++) {
            boxes.push(
                <LetterBox
                    letter = {word[i-1]}
                    key={i} 
                    active={i === letterIndex}
                    onClickLetterBox={onClickLetter} 
                    id={i} 
                />
            )
        }
        
        return boxes
    }

    return (
        <div className={`word-line ${active ? "ativo" : ""}`}>
            { generateBoxes() }
        </div>
    )
}