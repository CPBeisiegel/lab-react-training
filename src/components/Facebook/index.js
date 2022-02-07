import profiles from "../../data/berlin.json"
import styles from './styles.module.css'



export function FaceBook(){


    function handleProfile(){
        return profiles.map((element) => {
            return (
            <div className={styles.profileBox}>
                <img src={element.img} alt="profile"/>
                <div>
                    <p><strong>FirstName: </strong>{element.firstName}</p>
                    <p><strong>LastName: </strong>{element.lastName}</p>
                    <p><strong>Country: </strong>{element.country}</p>
                    <p><strong>Type:</strong> {element.isStudent ? "Student" : "Teacher"}</p>
                </div>
            </div>)
        })
    }

   // console.log(handleProfile())

    return (
        <div className={styles.profileBox}>{handleProfile()}</div>
    )
}