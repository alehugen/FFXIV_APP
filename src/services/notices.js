const URL = 'http://na.lodestonenews.com/news/notices';

export default async function noticesAPI() {
   const request = await fetch(URL);
   const response = await request.json();
   return response;
}
