/* import styles from './styles.module.css' */

export function Rating(props) {

    /* Encontrei essa forma na interner mas não entendi como usar  */
    const numberStars = Math.round(props.children) 

  /*   const numberStars = Math.round(estrelas)

    let estrelas = 5
     */

    let star = ""

    for (let i = 0; i < 5; i++) {
        if( i < numberStars ) {
            star += '★';
        } else{
            star += '☆';
        }
    }

    return (
        <div className="rating">
            <span>{star}</span>
        </div>
    )
}