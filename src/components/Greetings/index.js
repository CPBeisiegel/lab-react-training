import styles from './styles.module.css'

export function Greetings(props) {
    const greeting = {
        de: 'Hallo',
        fr: 'Bonjour',
        es: 'Hola',
        en: 'Hello',
    }
    return (
        
        <div className={styles.greet}>
            <p>
            {greeting[props.lang]} {props.children}
            </p>
            
        </div>
    )
}