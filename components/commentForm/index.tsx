import React, { useState } from 'react'
import styles from '../../styles/Episodes.module.scss'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';



const CommentForm: React.FC = () => {
    const [commentText, setCommentText] = useState("")
    const [name, setName] = useState("")


    const submitComment = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const now = new Date();
        const timestamp = now.toISOString();
        try {
            const docRef = await addDoc(collection(db, "comments"), {
                name: name,
                commentText: commentText,
                timestamp: timestamp
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setCommentText("")
        setName("")
    }
    return (
        <div className={styles.commentForm}>
            <h2>Comments</h2>
            <form onSubmit={submitComment}>
                <label>Name</label>
                <input type="text" placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} />
                <label>Comment</label>
                <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} />
                <button className={styles.btn}  type="submit">Post</button>
            </form>

        </div>
    )
}

export default CommentForm;

