import React, { useContext, useEffect } from 'react';
import FFContext from '../context/FFContext';
import noticesAPI from '../services/notices';

function News() {
  const { news, setNews } = useContext(FFContext);

  async function getNews() {
    const n = await noticesAPI();
    setNews(n);
  }
  
  useEffect(()=> {
   getNews();
  }, []);


  console.log(news);
  
  return (
    <div>
      News
    </div>
  )
}

export default News;