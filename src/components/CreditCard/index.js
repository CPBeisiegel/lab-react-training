/* import styles from './styles.module.css' */

export function CreditCard(props) {
   
    return (
        
                <div style={{margin: "40px", width: "417px", height: "269px", backgroundColor: `${props.bgColor}`, color: `${props.color}`, border: "solid black 1px", borderRadius: "5%"}}>

                <h1 class="title">{props.type}</h1>
                <h2>•••• •••• •••• {props.number.substr(-4)}</h2>
                <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
                <h3>{props.owner}</h3>

                </div>
     
    )
}