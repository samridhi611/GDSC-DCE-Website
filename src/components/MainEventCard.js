import React, { Fragment } from 'react';
// import rob from './assets/images/rob1.jpg';

const MainEventCard = (props) => {
    return (
        <Fragment>
            <div  style={{width:'100%'}}>
                <div className="card">
                    <div className="card-body">
                        <img src={props.eimg} alt="img" className=" mb-3"/>
                        <h3>{props.etitle}</h3>
                        <p>{props.edesc}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MainEventCard;
