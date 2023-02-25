import React, { Fragment } from 'react';
import './assets/css/REvent.css';
import EVENT22 from './assets/images/event22/event22.jpeg'
import EVENT21 from './assets/images/events_image/shrutiEvent.png'
import EVENT20 from './assets/images/events_image/Sejal.png'
import { Link } from 'react-router-dom';
import MainEventCard from './MainEventCard';


const MainEvent = () => {
    return (
        <Fragment>
            <Link to="/events/2021" id='links'>
            <div id="event">
                <div className="container my-3 py-5 ">


                    <h1 className="text-center">Our Events!!!</h1>
                    <div className="row mt-5" >

                    <Link to="/events/2022" id='links' className='col-lg-4 col-md-6 mb-3'>
                        <MainEventCard
                            etitle="Session 2022-23" 
                            edesc="Community Lead : ISHA DABAS"
                            eimg={EVENT22}
                        />
                    </Link>

                    <Link to="/events/2021" id='links' className='col-lg-4 col-md-6 mb-3'> 
                        <MainEventCard
                            etitle="Session 2021-22" 
                            edesc="Community Lead : SHRUTI "
                            eimg={EVENT21}
                        />
                    </Link>

                    <Link to="/events/2020" id='links' className='col-lg-4 col-md-6 mb-3'> 
                       <MainEventCard
                            etitle="Session 2020-21" 
                            edesc="Community Lead : SEJAL KHANNA"
                            eimg={EVENT20}
                        />
                    </Link>

                    </div>
                </div>
            </div>
            </Link>
        </Fragment>
    )
}


export default MainEvent;