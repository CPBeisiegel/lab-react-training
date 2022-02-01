import styles from './styles.module.css'
import {Rating} from '../Rating'


export function DriverCard(props){
   
    return (
        <div className={styles.driverCard}>
            <img className={styles.driverPicture} src={props.img} alt="portrait" />
            <div>
                <p>{props.name}</p>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>

            </div>

        </div>
    )
}