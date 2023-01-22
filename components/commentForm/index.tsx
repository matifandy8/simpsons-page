import React, { useState } from 'react'
import styles from '../../styles/Episodes.module.scss'




const CommentForm: React.FC = () => {
    const [comment, setComment] = useState("")

    const submitComment = async () => {
       const response = await fetch('http://localhost:3000/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
            'Content-Type': 'application/json',
        }
       })
       const data = await response.json()
       console.log(data)
    }
    return (
        <div className={styles.commentForm}>
           <h2>Comments</h2>
           <label>Name</label>
           <input type="text" placeholder='Your name'/>
           <label>Email address</label>
           <input type="text" placeholder='Your email'/>
           <label>Comment</label>
           <textarea value={comment} onChange={(e) => setComment(e.target.value)}/>
           <button onClick={submitComment}>Post</button>
        </div>
    )
}

export default CommentForm;