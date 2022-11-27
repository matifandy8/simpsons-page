// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { characters } from '../../../data'

type charactersType = {
  id: string
  name: string
  image: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<charactersType | any>
) {
  res.status(200).json(characters)
}
