import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import styles from './CharacterInfo.module.css'

export function CharacterInfo() {
    const { code } = useParams()
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(`https://thronesapi.com/api/v2/Characters/${code}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })

    }, [code])

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>error</div>
    } else {

        return (
            <>
                <div className={styles.container} key={code}>
    
                    <div>
                        <img src={character.imageUrl} alt={character.fullName} className={styles.image}/>
                    </div>

                
                    <div className={styles.textContainer}>
                        <section className={styles.header}>

                            <h2 className={styles.name}>
                                {character.firstName} {character.lastName}
                            </h2>

                            <div className={styles.title}>
                                {character.title}
                            </div>

                        </section>

                        <div className={styles.family}>
                                {character.family}
                            </div>
                    </div>
                   
                </div>

            </>
        )
    }
}