import axios from 'axios';


const  searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization: 'Client-ID MhSnjC8cCl9YrSpTzAHj49-vrot8_I0ZXkjd5rV-0wc'
      },
      params:{
        query:term
      },

    });
    return response.data.results;
  };

  export default searchImages;