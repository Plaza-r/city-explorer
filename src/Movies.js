import React from "react";
import { Card } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import './App.css'


class Movies extends React.Component {
  render() {
    return(
      <div className="border-top py-4">
        <h3>Movies about your city of choice: </h3>
        <div className='d-flex flex-wrap'>
      {
        this.props.movie.map((movie, idx) => (

        <Col className='mt-3'> 
          <Card style={{width:'18rem'}} className='h-100 card container' key={idx}>
            <Card.Body>
              <Card.Img 
                className='card-image p-3'
                variant= "top" 
                style={{cursor:'pointer'}}
                src={`https://image.tmdb.org/t/p/w500/${movie.img}`} 
                alt={movie.title}/> 

            <Card.Title>
                Movie Title: {movie.title}
            </Card.Title>
              <Card.Text>
                Description: {movie.description}
              </Card.Text>
              <Card.Text>
                average votes: {movie.avgVotes}
              </Card.Text>
              <Card.Text>
                popularity: {movie.popularity}
              </Card.Text>
              <Card.Text>
                released on:{movie.releasedOn}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    
        ))}
        </div>
      </div>

    );
  }
}
export default Movies;