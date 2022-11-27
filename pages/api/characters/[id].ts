import { NextApiRequest, NextApiResponse } from 'next'
import { characters } from '../../../data'


type ResponseError = {
    message: string
}
type charactersType = {
    id: string
    name: string
    image: string
}



export default function personHandler(
    req: NextApiRequest,
    res: NextApiResponse<charactersType | ResponseError>
) {
    const { query } = req
    const { id } = query
    const filtered = characters.filter((p) => p.id === id)

    return filtered.length > 0
        ? res.status(200).json(filtered[0])
        : res.status(404).json({ message: `Character with id: ${id} not found.` })
}