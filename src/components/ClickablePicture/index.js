
import {useState} from 'react';

export function ClickablePicture(props) {

    const [src, setSrc] = useState(props.img)

    function handleChange(){
        if(src === props.img){
            setSrc(props.imgClicked)        
        } else{
            setSrc(props.img)
        }
    }

    return (
        <div>
            <img onClick={handleChange}  src={src} alt="portrait" />
        </div>      
    )
}