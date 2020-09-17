import React,  {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default class Second extends Component {
  render() {
	    return (
	      <div>
		      <Container fluid>
				  <Row>
				    <Col xs={{ span: 12 }} md={{ span: 4, offset:1}}>
				    <h5 className="text-center">Jackie Chan’s Plan to Keep Kicking Forever</h5>
				    </Col>				    
				  </Row>
			  </Container>

		        <Container fluid>
				  <Row>			  
				    <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 1, offset:1}}>			    	 
				       	<p className="font-weight-lighter text-center">Jackie Chan, who turned 63 this year, holds the Guinness World Record for the most credits on a single movie. (Fifteen jobs, on a movie called CZ12, or Chinese Zodiac, from 2012, starring Jackie Chan, directed by Jackie Chan, gaffed by Jackie Chan, with catering coordinated by Jackie Chan.) But in his new movie, The Foreigner, he's mostly just an actor giving a performance, a surprisingly subtle and nuanced one, as a grief-stricken London restaurateur seeking revenge on a rogue IRA faction after their bomb kills his daughter. Not counting two Kung Fu Panda sequels, The Nut Job 2, and The Lego Ninjago Movie—in which he voices, respectively, a monkey, a surly mouse, and a wise old piece of Lego—The Foreigner will be his first high-profile U.S. release since 2010, when he played Jaden Smith's mentor in a reboot of The Karate Kid, noteworthy for being a movie with "karate" in the title in which the only martial art practiced is kung fu.</p>
				    	<p className="font-weight-lighter text-center">He hasn't been idle this decade. Idle is not one of the speeds in Jackie Chan's gearbox. "Sometimes I look at some other actors, famous actors," he says incredulously. "They're so comfortable! After filming, just holiday! With a girlfriend or the family." After filming, Jackie tends to an ever-expanding portfolio of business interests, and then he makes more films. In the time since The Foreigner wrapped, he's already completed a science-fiction thing called Bleeding Steel, which features the first fight scene ever shot on the roof of the Sydney Opera House. But The Foreigner is a different kind of Jackie Chan movie, and a lot of people are excited about it. So today Jackie's driven 30 miles from Beijing to the Panlong Valley to visit his International Stunt Training Base and talk to some foreign visitors about the movie.</p>	  
				    	<div className="text-center">				    	
					    	<img src={process.env.PUBLIC_URL + "/images/m1.png"} alt="m1" className="img-fluid w-25"/>
					    	<img src={process.env.PUBLIC_URL + "/images/m2.png"} alt="m2" className="img-fluid w-25"/>
					    	<img src={process.env.PUBLIC_URL + "/images/m3.png"} alt="m3" className="img-fluid w-25"/>
				    	</div>
				    </Col>

				    <Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2, offset:2}}> 
				    	<img src={process.env.PUBLIC_URL + "/images/Jackie-Chan-sml.jpg"} alt="JackieChan" className="img-fluid" />
				    </Col>
				    
				  </Row>
				</Container>	
		    </div>
	   	);
	}
}