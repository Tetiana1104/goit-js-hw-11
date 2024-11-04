const API_KEY = '46879645-5baa1dadd9c91ee84aac66fac'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`;
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }
    
    const data = await response.json();
    return data.hits.map(({ webformatURL, largeImageURL, tags, likes, comments, views, downloads }) => ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        comments,
        views,
        downloads,
    }));
}




