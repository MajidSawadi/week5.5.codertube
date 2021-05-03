import React from 'react'
import {useState, useEffect} from 'react'
import {Card , Button, Container, Row, Col} from 'react-bootstrap'
const HomePage = () => {
const [movie , setMovie]= useState([]);

useEffect(() => {
    const fetchData = async () => {
        const respo=await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=5b023e61fee153445ff3626d789791e7");
        const json =await respo.json();
        console.log({json});
        setMovie(json.results);
        console.log(setMovie);
    }
    fetchData();
  }, []);
  

    return (
       
          <Container>
  <Row>
 { movie.map((m) => (
    <Col> 
      <Card className="m-3" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + m.backdrop_path}/>
     <Card.Body>
      <Card.Title>{m.title}</Card.Title>
      <Card.Text>
       {m.overview}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
     </Card>
     </Col>

  ))}
  </Row>
</Container>
            
 



 );
}

export default HomePage
