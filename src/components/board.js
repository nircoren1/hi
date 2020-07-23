import React from 'react'
import { dataBase } from './dataBase'

function Board(props){

    const drop= e =>{
        
        e.preventDefault()
        const card_id = e.dataTransfer.getData('card_id')
        const card =document.getElementById(card_id)
        card.style.display='block'
        e.target.appendChild(card)
        if (props.className === 'trashBlock') {
        var work = dataBase.map(function(obj) { return obj.id; }).indexOf(Number(card_id));
        dataBase.splice(work,1)

            
        }
    }
    const dragOver = e =>{
        e.preventDefault()


    }

    return(
<div
id={props.id}
className={props.className}
onDrop={drop}
onDragOver={dragOver}>{props.children}</div>

    )
}

export default Board
