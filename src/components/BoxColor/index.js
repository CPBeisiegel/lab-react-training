

export function BoxColor(props){
    return (
        <div style= {{width: "300px", height: "100px", backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
         </div>
    )
}

