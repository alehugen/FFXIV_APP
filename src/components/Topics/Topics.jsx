import React, { useContext, useEffect } from 'react';
import FFContext from '../../context/FFContext';
import noticesAPI from '../../services/notices';
import '../Topics/Topics.css';

function Topics() {
  const { topics, setTopics } = useContext(FFContext);

  async function getNews() {
    const n = await noticesAPI();
    setTopics(n);
  }
  
  useEffect(()=> {
   getNews();
  }, []);

  return (
    <div className='topic-box'> 
      {
        topics ? topics.map((topic, index) => <div key={ index } className='topic-card'>
          <a href={ topic.url } target='_blank' rel="noreferrer">
          <h2>{ topic.title }</h2>
          <img src={ topic.image } alt='topic' />
          <p>{ topic.description }</p>
          </a>
        </div>).slice(0,12) : null
      }
    </div>
  )
}

export default Topics;