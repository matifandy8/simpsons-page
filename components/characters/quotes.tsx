import React, { useEffect, useState } from 'react'
import styles from '../../styles/Characters.module.scss'
import { CharactersType } from '../../types'



const Quotes: React.FC<any> = (characterName: CharactersType['name']) => {
    const [data, setData] = useState<any>([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const name = characterName.split(" ")
        setLoading(true)
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=${name[0]}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>

    return (
        <div className={styles.quote}>
            <h2>Qoutes</h2>
            {data.length > 0 ?
                <h2>
                    {data.map((el: any) => (
                        <div key={el.qoute}>
                            <p className={styles.quote_text}>{el.quote}</p>
                        </div>
                    ))}
                </h2>
                : <div>No quotes</div>
            }

        </div>
    )
}

export default Quotes;