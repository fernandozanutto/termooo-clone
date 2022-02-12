import React, { useState } from 'react'
import './styles.css'


interface LetterBoxProps {
    id: number
    onClick: (index: number) => void
    onLetterUpdated: () => void
    active: boolean
}

export default function LetterBox(props: LetterBoxProps) {

    const [letter, updateLetter] = useState('')

    function onClickLetterBox() {
        props.onClick(props.id)
    }

    function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>){
        updateLetter(event.key)
        props.onLetterUpdated()
    }

    return (
        <div 
            tabIndex={props.active ? props.id - 1 : undefined} 
            onKeyDown={onKeyDown} onClick={onClickLetterBox} 
            className={`letter-input ${props.active ? "edit" : ""}`}
            >{letter}</div>
    )
}