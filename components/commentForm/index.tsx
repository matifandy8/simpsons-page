import React, { useState } from 'react'
import styles from '../../styles/Episodes.module.scss'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';



const CommentForm: React.FC = () => {
    const [commentText, setCommentText] = useState("")
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');




    const submitComment = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const now = new Date();
        const timestamp = now.toISOString();
        if (!name || !commentText) {
            setErrorMessage("Please fill in all fields");
            return;
        }
        try {
            const docRef = await addDoc(collection(db, "comments"), {
                name: name,
                commentText: commentText,
                timestamp: timestamp
            });
            console.log("Document written with ID: ", docRef.id);
            setSuccessMessage("Comment is posted")
        } catch (e) {
            console.error("Error adding document: ", e);
            setErrorMessage('Error adding comment. Please try again later.');
        }
        setCommentText("")
        setName("")
    }
    return (
        <div className={styles.commentForm}>
            <h2>Comments</h2>
            {errorMessage && <p className={styles.commentError}>{errorMessage}</p>}
            {successMessage && <p className={styles.commentSuccess}>{successMessage}</p>}
            <form onSubmit={submitComment}>
                <label>Name</label>
                <input type="text" placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} className={name === '' ? styles.empty : ''}/>
                <label>Comment</label>
                <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} className={commentText === '' ? styles.empty : ''}/>
                <button className={styles.btn}  type="submit">Post</button>
            </form>

        </div>
    )
}

export default CommentForm;

