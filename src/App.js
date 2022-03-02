import "./styles.css";
import React, {useState, useEffect} from 'react';


export default function App() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/random"
    );
    const data = await response.json();
    console.log(data);
    setPosts(data);
  }
  useEffect(() => {
    fetchPost()
  },[])

  return (
    <div className="App">
          <p>{posts.value}</p>
          <div className='wrap'>
            <button className='button' onClick={fetchPost}>Get new Joke</button>
          </div>
    </div>
  );
}
