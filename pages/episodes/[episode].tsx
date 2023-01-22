import React from 'react'
import styles from '../../styles/Episodes.module.scss'
import ReactPlayer from 'react-player'
import CommentForm from '../../components/commentForm'


const Episode: React.FC = ({ episode, comments }: any) => {
  console.log(comments)
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
            <div key={comment.id} className={styles.comment}>
              <span>{comment.createdAt}</span>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext: any) => {
  const pathurl = pageContext.params;
  const [episodeRes, commentsRes] = await Promise.all([
    fetch(`https://simpsons-page.vercel.app/api/episodes/${pathurl.episode}`),
    fetch(`https://simpsons-page.vercel.app/api/comments`)
  ]);
  const [episode, comments] = await Promise.all([
    episodeRes.json(),
    commentsRes.json()
  ]);
  return { props: { episode, comments } };
};
export default Episode