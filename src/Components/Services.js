import React, { Component } from "react";
import equineMassage from "../equineMassage.jpg";
import redLight from '../red-light.jpg'
import luckyBaily from '../luckyBaily.jpg';
import { Jumbotron, Container, Media, Row, Col } from "reactstrap";

export class Services extends Component {
render() {
return (
    <div>
    <Jumbotron fluid className="background">
        <Container fluid>
        <h1 className="display-3">Services</h1>
        </Container>
    </Jumbotron>

    <Container fluid className="equineMassage">
        <Media className="mt-1 smallWidth">
        <Media left middle href="#">
            {/* <Media
            object
            data-src={equineMassage}
            alt="Generic placeholder image"
        /> */}
            <img
            src={equineMassage}
            alt="equine massage"
            className="serviceImgs"
            />
        </Media>
        <Media body>
            <h3>What is Equine Massage?</h3>
            <section id="section-1">
            Equine massage is the use of hands, arms, elbows and/or tools to
            rub and knead the muscles of the horse's body to decrease
            tension and/or pain. Equine massage utilizes modified human
            massage techniques on horses to help them perform better and
            decrease pain associated with training, an ill fitting saddle,
            an unbalanced rider or injury.
            </section>

            <h3>Signs that a Horse Needs a Massage</h3>
            <p>
            Pinning ears back, biting or kicking when saddling or
            ridingReluctance to move forward during exerciseDifficulty
            bending to one or both sidesDifficulty picking up correct lead
            at the canterLeg weakness, dragging of toesTossing head during
            exercise Uncharacteristic bucking and/or rearing during
            exerciseHorse seems more "spooky" than usualHorse is in an
            uncharacteristic bad moodReluctance to be{" "}
            </p>

            <h3>Benefits of Massage Therapy</h3>
            <p>
            Increase blood flow to speed up healing processDecrease muscle
            spasmsIncrease range of motion - Increase joint flexibilityHelp
            the horse prepare for and recover from exerciseImprove mental
            wellbeingReduce scar tissue formationRelease endorphins - the
            body's natural pain killersDecrease the chance
            </p>
        </Media>
        </Media>
    </Container>

    <Container fluid>
        <Media className="mt-1 redLight smallWidth p-4">
        <Media body style={{'padding-right': '2rem'}}>
            <h3>Red light Therapy</h3>
            <p>
            Reduces pain and swelling, increases lymphatic
            activity,accelerates cell regeneration, increases circulation,
            relaxes muscles and encourages collagen production. Regulates
            serotonin levels. Serotonin mediates inflammation, allergic
            reactions, aids in blood clotting, initiating sleep, and
            fighting depression
            </p>

            <h3>
            Red light therapy has been shown to have the following effect
            </h3>
            <Row style={{'textAlign': 'left'}}>
                <Col xs>
                    <ul className='benefitList'>
                        <li>Reduces pain and swelling</li>
                        <li>Increases lymphatic activity</li>
                        <li>Accelerates cell regeneration and healing</li>
                        <li>Increases circulation</li>
                        <li>Relaxes muscles</li>
                        <li>Encourages collagen production (this is why it’s used cosmetically for people as well)</li>
                    </ul>
                </Col>
                <Col xs>
                    <ul className='benefitList'>
                        <li>Regulates serotonin levels (Serotonin mediates inflammation and allergic reactions</li>
                        <li>aids in blood clotting</li>
                        <li>initiating sleep</li>
                        <li>increases antibody production in the blood stream to allow the body to fight off viruses</li>
                    </ul>
                </Col>
            </Row>
            <p>
            Aside from the fact that a red light can be used to stimulate
            just about any acupressure point on the horse, it can also be
            beneficial for the following specific conditions:
            </p>
            <p>
            arthritic joints;wounds;sore muscles;swellingback pain;tendon/
            ligament injuries;hoof abscesses; andnavicular and
            laminitis-associated pain.
            </p>
        </Media>
        <Media left middle href="#">
            {/* <Media
            object
            data-src="holder.js/64x64"
            alt="Generic placeholder image"
            /> */}
            <img
            style={{'transform':'rotate(0deg)', 'margin-top':'8rem'}}
            src={redLight}
            alt="Red light therapy"
            className="serviceImgs"
            />
        </Media>
        </Media>
    </Container>

    <Container fluid className="canineTherapy">
        <Media className="mt-1 smallWidth">
        <Media left middle href="#">
            {/* <Media
            object
            data-src="holder.js/64x64"
            alt="Generic placeholder image"
            /> */}
            <img src={luckyBaily} alt="Dogs Lucky and Baily" id='luckyBailyPic'/>
        </Media>
        <Media body style={{'padding': '3.3rem'}}>
            <h3>What Is Canine Massage Therapy?</h3>
            <p>
            Relaxation.Increased oxygenation of the blood.Pain
            relief.Improved flexibility.Improved immune system.Reduced
            age-related issues.Reduced arthritis and hip dysplasia
            discomfort.Muscle tension, soreness, weakness and spasm relief.
            </p>
            <p>
            Canine massage is a branch of massage therapy that promotes
            health in dogs. Specifically, canine massage therapy is a form
            of alternative therapy the benefits of which may include
            relaxation, increased oxygenation, relief from pain, improved
            joint flexibility, as well as miscellaneous benefits to the
            immune system.
            </p>

            <h3>Dog massage benefits include:</h3>
            <p>
            Relaxation.Increased oxygenation of the blood.Pain
            relief.Improved flexibility.Improved immune system.Reduced
            age-related issues.Reduced arthritis and hip dysplasia
            discomfort.Muscle tension, soreness, weakness and spasm relief.
            </p>
        </Media>
        </Media>
    </Container>
    </div>
);
}
}

export default Services;
