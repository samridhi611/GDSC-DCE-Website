import React, { Fragment } from 'react';
import './assets/css/REvent.css';
import './assets/css/Team.css'; 
import REventCard from './REventCard';
import EXPO from './assets/images/event21/expo.jpg';
import HACK from './assets/images/event21/hackorelay.jpg';
import INFO from './assets/images/event21/info.jpg';
import KOTLIN from './assets/images/event21/kotlin.jpg';
import SOURCE from './assets/images/event21/source.jpg';
import TALK from './assets/images/event21/talk.jpg'
import WOW from './assets/images/event21/wow.jpg'

import SHRUTI from './assets/images/TEAM PHOTOS/Shruti_Sharma_Community_Lead.jpeg'
import TeamCard from './TeamCard';

const REvent = () => {
    return (
        <Fragment>
            <div id="event">
                <div className="container my-3 py-5 ">
                    <h1 className="text-center">Community Lead</h1>
                    <div className="row mt-5" id="event1">
                    <TeamCard
                            Mname="Shruti"
                            Mdesc="Community lead"
                            Mphoto={SHRUTI}
                            link="https://www.linkedin.com/in/shruti-sharma-1b1b131a6"
                        />
                    </div>


                    <h1 className="text-center"> Events (2020 - 2021)</h1>
                    <div className="row mt-5">

                        <REventCard 
                            etitle="Info session" 
                            edesc="Guests : Ex DSC Leads"
                            eimg={INFO}
                        />

                        <REventCard 
                            etitle="SourceTember" 
                            edesc="29 Sept - 01 Oct"
                            eimg={SOURCE}
                        />
                        <REventCard 
                            etitle="Cloud Expo" 
                            edesc="A series to begin Cloud Journey"
                            eimg={EXPO}
                        />

                        <REventCard 
                            etitle="Expert Talk" 
                            edesc="Led by Industry Experts"
                            eimg={TALK}
                        />

                        <REventCard 
                            etitle="Kotlin Session" 
                            edesc="Speaker : Aayushma Agrawal"
                            eimg={KOTLIN}
                        />
                       
                        
                        <REventCard 
                            etitle="DSC WOW" 
                            edesc="Held on : Jan 11, 2022"
                            eimg={WOW}
                        />

                        <REventCard 
                            etitle="HackORelay" 
                            edesc="A Hackathon having multiple tracks"
                            eimg={HACK}
                        />


                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default REvent
