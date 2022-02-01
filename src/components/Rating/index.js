/* import styles from './styles.module.css' */

export function Rating(props) {

    /* Encontrei essa forma na interner mas não entendi como usar  */
    const numberEstrelas = Math.round(props.children) 

  /*   const numberEstrelas = Math.round(estrelas)

    let estrelas = 5
     */

    let star = ""

    for (let i = 0; i < 5; i++) {
        if( i < numberEstrelas ) {
            star = star + '★';
        } else{
            star = star + '☆';
        }
    }

    return (
        <div className="rating">
            <p>{star}</p>
        </div>
    )
}