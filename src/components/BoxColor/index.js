

export function BoxColor(props){
    return (
        <div style= {{width: "300px", height: "100px", color: "white", backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            <p style={{textAlign: "center"}}> rgb({props.r}, {props.g}, {props.b})</p>
         </div>
    )
}

