import './styles.css'


interface LetterBoxProps {
    id: number
    onClickLetterBox: (index: number) => void
    active: boolean
    letter: string
}

export default function LetterBox({id, active, letter, onClickLetterBox}: LetterBoxProps) {
    
    function onClick() {
        onClickLetterBox(id)
    }

    return (
        <div 
            tabIndex={0}
            onClick={onClick} 
            className={`letter-input ${active ? "edit" : ""}`}
            >{letter}</div>
    )
}