import React from 'react'

function Card(props) {
  const dragStart=e=>{
  const target=e.target
  e.dataTransfer.setData('card_id',target.id)
  setTimeout(()=>{
    target.style.display="none"
  },0)
  }

  
  const dragOver = e=>{
    e.stopPropagation()
    
  }
return(
  
    
<img 
id={props.id}
className={props.className}
draggable={props.draggable}
onDragStart={dragStart}
onDragOver={dragOver}
onClick={props.onClick}
src={props.image} alt=""></img>
)

}
export default Card