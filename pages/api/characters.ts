// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type characters = {
  id: string
  name: string
  image: string
}
const characters = [  
  {"id":"1","name":"Maggie Simpsons", "image":"https://res.cloudinary.com/dp7vfoqbw/image/upload/v1669327122/characters/Maggie_lrahoa.png"},  
  {"id":"2","name":"Bart Simpsons", "image":"https://res.cloudinary.com/dp7vfoqbw/image/upload/v1669327105/characters/Bart_enmhxd.png"},  
  {"id":"3","name":"Homer Simpsons", "image":"https://res.cloudinary.com/dp7vfoqbw/image/upload/v1669327099/characters/Homer_sjsv3o.png"},  
  {"id":"4","name":"Lisa Simpsons", "image":"https://res.cloudinary.com/dp7vfoqbw/image/upload/v1669327122/characters/Lisa_h9dyip.png"},  
  {"id":"5","name":"Marge Simpsons", "image":"https://res.cloudinary.com/dp7vfoqbw/image/upload/v1669327121/characters/Marge_c1mpjl.png"}  
] 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(characters)
}