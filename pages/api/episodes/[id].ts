import { NextApiRequest, NextApiResponse } from 'next'
import { episodes } from '../../../data'


type ResponseError = {
    message: string
}
type episodesType = {
    id: string
    name: string
    image: string
}



export default function personHandler(
    req: NextApiRequest,
    res: NextApiResponse<episodesType | ResponseError>
) {
    const { query } = req
    const { id } = query
    const filtered = episodes.filter((p) => p.id === id)

    return filtered.length > 0
        ? res.status(200).json(filtered[0])
        : res.status(404).json({ message: `Episode with id: ${id} not found.` })
}