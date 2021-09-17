import React  from 'react'
import { Card } from 'react-bootstrap';
import  './roomcards.css';

const Roomcards = ()=>{

    return (
        <div>
           <Card className = "Card1">
           <Card.Body>
           <Card.Title><b>Create Room</b></Card.Title>
           <Card.Text>
            Play alng with<br />
            your friends
           </Card.Text>
            <Card.Link >click here</Card.Link>
           </Card.Body>
           </Card>
            
           <Card className = "Card1">
           <Card.Body>
            <Card.Title><b>Join Room</b></Card.Title>
            <Card.Text>
            Play along with<br />
            your friends
            </Card.Text>
            <Card.Link >Click here</Card.Link>
            </Card.Body>
            </Card>
        </div>

        
    );

}

export default Roomcards