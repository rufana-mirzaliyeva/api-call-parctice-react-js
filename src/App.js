
import './App.css';
import SearchHeader from './SearchHeader'
import searchImages from './api'
import { useState } from 'react';
import ImageList from './imagesList';


function App() {
  const [images, setImages] = useState([])
  const  submitHandler = async (term) =>{
    const result = await searchImages(term);
    setImages(result);

  }
  return (
    <div className="App">
      <SearchHeader search = {submitHandler} /> 
      <ImageList imagesPlaceholder ={images}/>
    </div>
  );
}

export default App;
