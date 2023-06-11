import { Link } from "react-router-dom"
import styles from './CharacterCard.module.css'


export function CharacterCard({ image, name, code }){
    return (
        

        <Link to={`character/${code}`}>
            <article className={styles.card}>

                <div 
                    className={styles.cardImage}
                    style={{
                        backgroundImage: `url(${image})`
                    }}
                >

                </div>

                <div className={styles.cardName}>
                    {name}
                </div>

            </article>

        </Link>
    )
}