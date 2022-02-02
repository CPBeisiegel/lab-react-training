import {useState} from 'react'

export function Carousel(props){

const [srcCarousel, setSrcCarousel] = useState(props.images[0])

   function handleChange(mood){
       let imgPosition = props.images.indexOf(srcCarousel)

       let changePosition 

       if(imgPosition <= 0){
           changePosition = props.images.length - 1
       } else {
           changePosition = (imgPosition + mood) % props.images.length
       }

       setSrcCarousel(props.images[changePosition])
   }


    return (
        <div>
            <button onClick={()=> handleChange(1)}>Left</button>
                 <img src={srcCarousel} alt="portrait"/>
            <button onClick={()=> handleChange(-1)}>Right</button>
        </div>
    ) 



}