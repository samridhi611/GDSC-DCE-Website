import React, { Fragment } from 'react';
import './assets/css/REvent.css';
import './assets/css/Team.css'; 
import REventCard from './REventCard';

import COVIHACK from './assets/images/events_image/covihack_copy.jpeg'
import UX from './assets/images/events_image/ux_ui.jpeg'
import APP from './assets/images/events_image/app_dev_vo.jpeg'
import LETCA from './assets/images/events_image/lets_code_mobile_app.jpeg'
import KGCP from './assets/images/events_image/kgcp.jpeg'
import QCJ from './assets/images/events_image/QCJ.jpeg'
import DODSC from './assets/images/events_image/day_out_with DSC.jpeg'
import GITHI from './assets/images/events_image/intro_to_git_and_github.jpeg'
import BUZZ from './assets/images/events_image/buzz_quiz.jpeg'
import WOW from './assets/images/events_image/DSC_wow.png'
import SEJAL from './assets/images/TEAM PHOTOS/Sejal.jpeg'


import TeamCard from './TeamCard';


const REvent2 = () => {
    return (
        <Fragment>
            <div id="event">
                <div className="container my-3 py-5 ">
                    <h1 className="text-center">Community Lead</h1>
                    <div className="row mt-5" id="event1">
                    <TeamCard
                            Mname="Sejal Khanna"
                            Mdesc="Community lead"
                            Mphoto={SEJAL}
                            link="https://www.linkedin.com/in/sejallkhanna"
                        />
                    </div>


                    <h1 className="text-center"> Events (2020 - 2021)</h1>
                    <div className="row mt-5">

                    <REventCard 
                            etitle="CoViHaCk'21" 
                            edesc="A 48hr long hackathon"
                            eimg={COVIHACK}
                        />
                        
                        <REventCard 
                            etitle="QwickLabs Workshop" 
                            edesc="Speaker : Shashank Barki"
                            eimg={QCJ}
                        />
                        <REventCard 
                            etitle="Kickstart with GCP" 
                            edesc="Speaker : Vijeta Pai"
                            eimg={KGCP}
                        />
                        <REventCard 
                            etitle="Android Study Jam 3" 
                            edesc="Speaker : Ankit Dhawan"
                            eimg={LETCA}
                        />
                        <REventCard 
                            etitle="Android Study Jam 2" 
                            edesc="Speaker : Kishore Theeraj"
                            eimg={LETCA}
                        />
                        <REventCard 
                            etitle="Android Study Jam 1" 
                            edesc="Speaker : Ayushma Agarwal"
                            eimg={LETCA}
                        />
                        <REventCard 
                            etitle="DSC WOW" 
                            edesc="Held on : Dec 03, 2020"
                            eimg={WOW}
                        />
                        <REventCard 
                            etitle="Buzz Quiz" 
                            edesc="Held on : Nov 10, 2020"
                            eimg={BUZZ}
                        />
                        <REventCard 
                            etitle="App-Dev Workshop" 
                            edesc="Speaker : Arpit Kulshrestha"
                            eimg={APP}
                        />
                        <REventCard 
                            etitle="Ui/Ux Workshop" 
                            edesc="Speaker : Kishore Theeraj"
                            eimg={UX}
                        />
                        <REventCard 
                            etitle="Git & Github Intro" 
                            edesc="Speaker : Yash Khare"
                            eimg={GITHI}
                        />
                        <REventCard 
                            etitle="Day Out with DSC" 
                            edesc="Held on : Sep 15, 2020"
                            eimg={DODSC}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default REvent2
