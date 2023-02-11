import React from 'react'
import styles from '../../styles/Episodes.module.scss'
import ReactPlayer from 'react-player'
import CommentForm from '../../components/commentForm'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'


const Episode = ({ episode, comments }: any) => {
  return (
    <div className={styles.episode}>
      <div className={styles.info}>
        <h1>{episode.name}</h1>
        <p>{episode.date}</p>
        <div className={styles.video}>
          <ReactPlayer url={episode.videoUrl} playing controls width="100%"
            height="400px" />
        </div>
      </div>
      <div className={styles.comments}>
        <CommentForm />
        <div className={styles.listComments}>
          {comments.map((comment: any) => (
            <div key={comment.timestamp} className={styles.comment}>
              <div className={styles.commentInfo}>
                <p>{comment.name}</p>
                <span className={styles.commentDate} >{comment.timestamp}</span>
              </div>
              <p className={styles.commentText} >{comment.commentText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext: any) => {
  const pathurl = pageContext.params;
  let comments:any = [];

  const querySnapshot = await getDocs(collection(db, "comments"));
  querySnapshot.forEach((doc) => {
    comments.push(doc.data());
  });


  const apiResponse = await fetch(
    `https://simpsons-page.vercel.app/api/episodes/${pathurl.episode}`
  );
  const episode = await apiResponse.json();
  return { props: { episode, comments } };
};
export default Episode