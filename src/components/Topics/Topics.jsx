import React, { useContext, useEffect } from 'react';
import FFContext from '../../context/FFContext';
import noticesAPI from '../../services/notices';

function Topics() {
  const { topics, setTopics } = useContext(FFContext);

  async function getNews() {
    const n = await noticesAPI();
    setTopics(n);
  }
  
  useEffect(()=> {
   getNews();
  }, []);


  console.log(topics);
  
  return (
    <div> 
      {
        topics ? topics.map((topic, index) => <div key={ index }>
          <a href={ topic.url } target='_blank' rel="noreferrer">
          <img src={ topic.image } alt='topic' />
          </a>
          <p>{ topic.title }</p>
        </div>) : null
      }
    </div>
  )
}

export default Topics;