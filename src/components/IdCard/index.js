import styles from './styles.module.css'



export function IdCard(props){
    return (
        <div className={styles.cardContainer}>
            <img src={props.picture} alt="portrait"/>
            <ul>
                <li>LastName: {props.lastName}</li>
                <li>FirstName: {props.firstName}</li>
                <li>Gender: {props.gender}</li>
                <li>Height: {props.height}</li>
                <li>Birth: {props.birth.toLocaleString()}</li> 
            </ul>
              
        </div>
    )
}