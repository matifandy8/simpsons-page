import React from 'react'
import styles from '../../styles/Episodes.module.scss'
import ReactPlayer from 'react-player'


const Episode: React.FC = ({ episode }: any) => {
  return (
    <div className={styles.episode}>
      <div className='episode_info'>
        <h1>{episode.name}</h1>
        <p>{episode.date}</p>
        <div>
        <ReactPlayer url={episode.videoUrl} playing controls />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext: any) => {
  const pathurl = pageContext.params;
  const apiResponse = await fetch(
    `http://localhost:3000/api/episodes/${pathurl.episode}`
  );
  const episode = await apiResponse.json();

  return {
    props: {
      episode,
    },
  };
};
export default Episode