import type { NextApiRequest, NextApiResponse } from 'next'
import { comments } from '../../../data'

type commentsType = {
  id: number
  name: string
  image?: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<commentsType | any>
) {
  if(req.method === 'GET'){
  res.status(200).json(comments)
  }else if(req.method === 'POST'){
   const comment = req.body.comment
   const newComment:any = {
    id: Date.now(),
    text: comment,
   }
   comments.push(newComment)
   res.status(201).json(newComment)
  }
  
}
