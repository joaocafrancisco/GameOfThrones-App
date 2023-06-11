import { useEffect, useState } from "react"
import { CharacterCard } from "./CharacterCard"

import styles from './CharactersList.module.css'
import { Search } from "./Search"

export function CharactersList() {

    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch("https://thronesapi.com/api/v2/Characters")
            .then(response => response.json())
            .then(data => {
                const sortedCharacters = data.sort((a, b) => a.fullName.localeCompare(b.fullName))

                setCharacters(sortedCharacters)

                setLoading(false)
            }).catch(error => {
                setError(error)
                setLoading(false)
            })

    }, [])

    const filteredCharacters = characters.filter(character => character.firstName.toLowerCase().includes(search))

    function getSearchValue(e){
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
    }

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>error</div>
    } else {

        return (
            <>
            <Search 
            total={filteredCharacters.length}
                search={getSearchValue}
            />
                <div className={styles.container}>
                    {filteredCharacters.map(character => (
                        <CharacterCard
                            key={character.id}
                            code={character.id}
                            image={character.imageUrl}
                            name={character.fullName}
                            title={character.title}
                            family={character.family}
                        />
                    ))}
                </div>
            </>
        )
    }
}