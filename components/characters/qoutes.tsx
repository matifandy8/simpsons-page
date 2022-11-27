import React, { useEffect, useState } from 'react'

const Qoutes: React.FC<any> = ({ characterName }: any) => {
    console.log(characterName.split(" "))
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const name = characterName.split(" ")
        setLoading(true)
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=${name[0]}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No Qoutes</p>
    console.log(data)

    return (
        <div>
            <h2>Qoutes</h2>
        </div>
    )
}

export default Qoutes;