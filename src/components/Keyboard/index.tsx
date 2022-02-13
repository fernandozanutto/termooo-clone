import KeyLetter from './KeyLetter'
import './styles.css'

export default function Keyboard() {

    function generateKeys() {
        const letters = [
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
            "A", "S", "D", "F", "G", "H", "J", "K", "L", "BACK",
            "Z", "X", "C", "V", "B", "N", "M", "ENTER"
        ]

        return letters.map((letter) => {
            return <KeyLetter label={letter} />
        })
    }
    return (
        <div id="keyboard">
            { generateKeys() }
        </div>
    )
}