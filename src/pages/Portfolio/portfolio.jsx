import React from 'react';
import Card from '../../components/Card/Card';
import { Col, Row } from "shards-react";
import iss from '../../utils/Img/ISStracker-homepage-screenshot.png'
import santa from '../../utils/Img/cyber-santa-homepage.png'
import profile from '../../utils/Img/Team-profile-generator-screenshot.png';
import read from '../../utils/Img/Readme-generator-screenshot.png'
import fitness from '../../utils/Img/ft-homepage.png'
import note from '../../utils/Img/note-taker-screenshot.png'


function Portfolio() {

    return(
        <>
            <Row>
            <Col lg="5"></Col>
            <Col lg="4">
            <header>
            <h2 className="about">Portfolio</h2>
            </header>
            </Col>
            <Col lg="3"></Col>
            </Row>
            <Row>
                <Col sm="3"></Col>
                        <Card
                            title="Iss Tracker" 
                            img={iss}
                            desc="Check out the current and five day forecast of the International Space Station passby times." 
                            deployed="https://ewells89.github.io/group-22-project1/"
                            repo="https://github.com/smith-carlicia/group-22-project1.git"/>
                        <Card 
                            title="Cyber Santa"
                            img={santa}
                            desc="Cyber Santa is an application any user can create, edit, delete and post their own personal or donations Christmas lists."  
                            deployed="https://project-2-cyber-santa.herokuapp.com"
                            repo="https://github.com/Adellis95/Project-2.git"/>
                        <Card 
                            title="Team Profile Generator" 
                            img={profile}
                            desc="This codebase is built via ES6 and node.js to create an office team generator completely from the users local terminal."
                            deployed="https://github.com/smith-carlicia/team-profile-generator.git"
                            repo="https://github.com/smith-carlicia/team-profile-generator.git"/>
                    <Col sm="3"></Col>
            </Row>
            <Row>
                    <Card 
                    title="Note Taker"
                    img={note}
                    desc="This Note Taker codebase is designed to allow users to post, save and delete notes at the click(or tap) of their fingertips." 
                    deployed="https://enigmatic-atoll-90656.herokuapp.com/"
                    repo="https://github.com/smith-carlicia/note-taker.git"/>
                 <Card 
                    title="Fitness Tracker"
                    img={fitness}
                    desc="This codebase is a workout tracker that creates, updates and tracks the user's daily workouts." 
                    deployed="https://blooming-forest-17711.herokuapp.com/"
                    repo="https://github.com/smith-carlicia/fitness-tracker.git"/>
                <Card 
                    title="ReadMe Generator"
                    img={read}
                    desc="Readme.md Generator is constructed to generate a Sample Readme.md from node.js terminal command line."
                    deployed="https://github.com/smith-carlicia/readme-generator.git"
                    repo="https://github.com/smith-carlicia/readme-generator.git"/>  
           </Row>
        </>
    )
}

export default Portfolio;