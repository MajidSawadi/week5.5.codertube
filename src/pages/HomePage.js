import React from 'react'
import {useState, useEffect} from 'react'
const HomePage = () => {
const [movie , setMovie]=useState([]);
useEffect(() => {
    const fetchData = async () => {
        const respo=await fetch("https://api.themoviedb.org/3/movie/550?api_key=5b023e61fee153445ff3626d789791e7");
        const json =await respo.json();
        console.log({json});
        setMovie(json);
    };
    fetchData();
  }, []);
  

    return (
        <div>
            {
  movie.map((m) => (
    <div>
      <h3>
       {movie.title}
      </h3>
    </div>
  ))
}

</div>  )
}

export default HomePage
