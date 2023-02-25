import React, { Fragment } from 'react';
import tech from './assets/images/tech1.jpg';

const TeamCard = (props) => {
    return (
        <Fragment>
            <div className="col-lg-4 col-md-6 mt-4">
                <div className="card">
                    <div className="img1"><img src={tech} alt="tech"/></div>
                    <div className="img2"><img src={props.Mphoto} alt="rob"/></div>
                    <div className="main-text">
                        <h2>{props.Mname}</h2>
                        <p>{props.Mdesc}</p>
                    </div>
                    <div className="socials">
                        <a href={props.link} target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TeamCard
