import React, { useState } from 'react'
import styles from '../../styles/Episodes.module.scss'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';





const CommentForm: React.FC = () => {
    const [comment, setComment] = useState("")
    const [name, setName] = useState("")


    const submitComment = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const now = new Date();
        const timestamp = now.toISOString();
        try {
            const docRef = await addDoc(collection(db, "comments"), {
              name,
              comment,
              timestamp
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        const data = await response.json()
        setComment("")
        setName("")

    }
    return (
        <div className={styles.commentForm}>
            <h2>Comments</h2>
            <form onSubmit={submitComment}>
                <label>Name</label>
                <input type="text" placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} />
                <label>Comment</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
                <button type="submit">Post</button>
            </form>

        </div>
    )
}

export default CommentForm;

function firestore() {
    throw new Error('Function not implemented.');
}
