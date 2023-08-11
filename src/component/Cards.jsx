import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
    return (  
        <> 
        <div className='d-flex gap-3 my-2 justify-content-center'>    

        <Card style={{ width: '10rem', height: '10rem', backgroundColor: '#8ce6fa' }}>
        <Card.Img variant="top" src="https://media.nh.org.au/wp-content/uploads/2019/04/01200332/patitens-visiors.png"/>
        </Card>

        <Card style={{ width: '10rem', height: '10rem', backgroundColor: '#8aff8a' }}>
        <Card.Img variant="top" src="https://media.nh.org.au/wp-content/uploads/2019/04/01200332/health-professionals-1.png"/>
        </Card>

        <Card style={{ width: '10rem', height: '10rem', backgroundColor: '#ca93fa' }}>
        <Card.Img variant="top" src="https://media.nh.org.au/wp-content/uploads/2019/04/01200332/research-education-1.png"/>
        </Card>

        <Card style={{ width: '10rem', height: '10rem', backgroundColor: '#fabe57' }}>
        <Card.Img variant="top" src="https://media.nh.org.au/wp-content/uploads/2019/04/01200331/work-with-us.png"/>
        </Card>

        <Card style={{ width: '10rem', height: '10rem', backgroundColor: '#f772b9' }}>
        <Card.Img variant="top" src="https://media.nh.org.au/wp-content/uploads/2019/04/01200331/support-us-1.png"/>
        </Card>
      </div>

      <div className='d-flex gap-3 my-2 justify-content-center'>
      <Card style={{ width: '18rem', height: '18rem' }}>
      <Card.Img variant="top" src="https://media.nh.org.au/wp-content/uploads/2023/08/11132130/DanielC.final1_-300x169.jpg" />
      <Card.Body>
        <Card.Title style={{color: 'gray'}}>11 August, 2023</Card.Title>
        <Card.Text style={{color: 'blue'}}>
          Get to know: Daniel Crompton
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', height: '18rem' }}>
      <Card.Img variant="top" src="https://media.nh.org.au/wp-content/uploads/2023/08/10121643/Iman.story_.final_-1536x864-1-300x169.jpg" />
      <Card.Body>
        <Card.Title style={{color: 'gray'}}>10 August, 2023</Card.Title>
        <Card.Text style={{color: 'blue'}}>
        Vascular Surgery Unit first to use the INARI ClotTReiver on east coast
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', height: '18rem' }}>
      <Card.Img variant="top" src="https://media.nh.org.au/wp-content/uploads/2023/08/09122948/MicrosoftTeams-image-Cropped-300x168.png" />
      <Card.Body>
        <Card.Title style={{color: 'gray'}}>19 August, 2022</Card.Title>
        <Card.Text style={{color: 'blue'}}>
        Fighting stroke together
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', height: '18rem' }}>
      <Card.Img variant="top" src="https://media.nh.org.au/wp-content/uploads/2023/08/04111431/0V0A8875-Cropped-768x432-1-300x169.jpg" />
      <Card.Body>
        <Card.Title style={{color: 'gray'}}>20 March, 2023</Card.Title>
        <Card.Text style={{color: 'blue'}}>
        Get to know: Stefania Zen
        </Card.Text>
      </Card.Body>
    </Card>
      </div>

      <div className='d-flex justify-content-center'>
      <Button variant="primary">More news</Button>
      </div>

      <div className='d-flex justify-content-center gap-2 my-2' style={{backgroundColor: '#005cb9', height: '100px', alignItems: "center", color: "white", fontSize: "2rem"}}>
        <span>Your feedback is important to us</span><FontAwesomeIcon style={{marginTop: "5px"}} icon={faCloud} />
      </div>
      </>
    )
}

export default Cards