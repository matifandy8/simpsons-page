import type { NextApiRequest, NextApiResponse } from 'next'
import { episodes } from '../../../data'

type episodesType = {
  id: string
  name: string
  date: string
  image: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<episodesType | any>
) {
  res.status(200).json(episodes)
}
