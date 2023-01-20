
import axios from 'axios';
import React, {useState} from 'react'
export default function Carrosal() {
    const [image, setImage] = useState('');
    const clientId = "UGPJug9WKtp2OWAnhy0TL1o_amxngsOxY2WJZCzpNqM";
    const [result, setResult] = useState([]);
    // const handleChange = (event) => {
    //     setImage(event.target.value);

    //    };

    const handleSubmit = () => {
        
        const url = "https://api.unsplash.com/photos/eUnBVyC9EFs"+"?client_id=" + clientId;
        axios.get(url).then((response) => {
        console.log(response);
         setResult(response.data);
        });
    };
  return (
    <div>
        
 
    
    {/* <div className="input">
     <input onChange={handleChange} type="text" name="image"    placeholder="Search for images"/>
    </div> */}
    <button onClick={handleSubmit} type="submit">Search</button>
    <div className="result">
   
    <img src={result.urls.regular} /> 
      
   </div>
   </div>
  )
}
