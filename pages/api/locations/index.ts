import type { NextApiRequest, NextApiResponse } from 'next'
import { locations } from '../../../data'

type locationsType = {
  id: string
  name: string
  image: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<locationsType | any>
) {
  res.status(200).json(locations)
}
