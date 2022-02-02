/* import styles from './styles.module.css' */

export function Rating(props) {

    /* Solução Ale
    
    const numberOfStars = Math.round(props.children)

    let star = "★"

    star = star.repeat(numberOfStars).padEnd(5, '☆')
    
    */


    const numberEstrelas = Math.round(props.children) 


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
            <span>{star}</span>
        </div>
    )
}