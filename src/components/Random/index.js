import styles from './styles.module.css'


export function Random(props) {
    return (
       <div className={styles.random}>
            <p> Random value between {props.min} and {props.max}</p>
       </div> 
    )
}

