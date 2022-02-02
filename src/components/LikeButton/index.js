import { useState } from "react"

export function LikeButton(){

const [counter, setCounter] = useState(0)

function handleLikes(){
    setCounter(counter + 1) 
}

const color = ['purple','blue','green','yellow','orange','red']

   const newColors = color.map((elemento) => elemento)
   

    return (
        <button onClick={handleLikes} style={{backgroundColor:newColors[counter % 6]}}>{counter} Likes</button>
    )
}