import React, { Fragment } from 'react';
import './assets/css/REvent.css';
import './assets/css/Team.css'; 
import REventCard from './REventCard';
import Oreintation from './assets/images/event22/Orientation.jpg';
import Koat from './assets/images/event22/Kotlearner.jpg';
import Cloud from './assets/images/event22/info1.jpg';
import Devfest from './assets/images/event22/DevFest.jpg';
import Android from './assets/images/event22/android_camp.jpg';
import UI from './assets/images/event22/Ui.jpg';

import ISHA from './assets/images/TEAM PHOTOS/IshaDabas_CommunityLead.jpg';
import TeamCard from './TeamCard';

const REvent3 = () => {
    return (
        <Fragment>
            <div id="event">
                <div className="container my-3 py-5 ">
                    <h1 className="text-center">Community Lead</h1>
                    <div className="row mt-5" id="event1">
                    <TeamCard
                            Mname="Isha Dabas"
                            Mdesc="Community lead"
                            Mphoto={ISHA}
                            link="https://www.linkedin.com/in/isha-dabas-6b817a210/"
                        />
                    </div>

                    <h1 className="text-center"> Events (2022 - 2023)</h1>
                    <div className="row mt-5">

                        <REventCard 
                            etitle="Oreintation Session" 
                            edesc="Team introduction"
                            eimg={Oreintation}
                        />

                        <REventCard 
                            etitle="Devfest" 
                            edesc="27-11-2022"
                            eimg={Devfest}
                        />
                        

                        <REventCard 
                            etitle="Android Camp" 
                            edesc="Speaker: Harsh Verma"
                            eimg={Android}
                        />

                        <REventCard 
                            etitle="Cloud Session" 
                            edesc="Speaker : Aditya Shekhawat"
                            eimg={Cloud}
                        />
                       
                        
                        <REventCard 
                            etitle="Ui/Ux Session" 
                            edesc=" Speaker: Rajat Patel"
                            eimg={UI}
                        />

                        <REventCard 
                            etitle="Stepping Stones Kotlearner" 
                            edesc="Held on : 24 September 2022"
                            eimg={Koat}
                        />

                        </div>
                    </div>
                </div>
                
        </Fragment>
    )
}

export default REvent3;