import styles from './styles.module.css'
import {BoxColor} from '../BoxColor'

export function NumbersTable(props){

    function handleDisplay(){
/*         const array = new Array(12).fill(1)
        array.map((element, i) => element.push(i))

        console.log(array) */
        let array = [];
        let element

        for (let i = 0; i <props.limit; i++) {
          /*   if(i%2 === 0){
                element = {BoxColor = 'red'}
            } else {
                element = {BoxColor = 'white'}
            } */
            element = {backgroundColor: i%2 === 0 ? 'red' : 'white'}
         array.push(<li element={element} add={i}>{i+1}</li>)
        }
        return array
    }

    return (
        <div className={styles.numbersTable}>{handleDisplay()}</div>
    )

}


