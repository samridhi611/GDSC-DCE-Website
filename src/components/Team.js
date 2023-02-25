import React, { Fragment } from 'react';
import './assets/css/Team.css';
import TeamCard from './TeamCard';
import ISHA from './assets/images/TEAM PHOTOS/IshaDabas_CommunityLead.jpg';
import SAMRIDHI from './assets/images/TEAM PHOTOS/Samridhi.jpeg'
import MUKUL from './assets/images/TEAM PHOTOS/Mukul_WebDev.jpg';
import ANSH from './assets/images/TEAM PHOTOS/Ansh_ContentTeam.jpg';
import SANDHYA from './assets/images/TEAM PHOTOS/Sandhya Yadav (ui ux design).jpg';
import ANSHUL from './assets/images/TEAM PHOTOS/Anshul_EventManagement.jpg';
import DEEPTI from './assets/images/TEAM PHOTOS/DeeptiKaushik_eventManagement.jpg';
import SANJEEV from './assets/images/TEAM PHOTOS/SanjeevArora.jpg';
import SHIVAM from './assets/images/TEAM PHOTOS/Shivam.png';
import KRITI from './assets/images/TEAM PHOTOS/Kriti.jpg';
import ABHISHEK from './assets/images/TEAM PHOTOS/AbhishekKumar.jpg';
import TANUSH from './assets/images/TEAM PHOTOS/Tanush_Arora_SocialMedia_Lead.jpeg';
import ROHAN from './assets/images/TEAM PHOTOS/Rohan.jpg';
import SAAKSHI from './assets/images/TEAM PHOTOS/Saakshi.jpeg';
import HARSH from './assets/images/TEAM PHOTOS/Harsh.JPG';
import ASHIMA from './assets/images/TEAM PHOTOS/Ashima.jpeg'
import Volunteer from './Volunteer';
const Team = () => {
    return (
        <Fragment>
            <div className="profile-area ">
            <h1 id="heading">Meat the Team!!</h1>

                <div className="container">
                    <h2>Faculty Advisor</h2>
                    <div className="row">
                        <TeamCard
                            Mname="Dr. Ashima Mehta"
                            Mdesc="Faculty Advisor"
                            Mphoto={ASHIMA}
                            link="https://www.linkedin.com/in/dr-ashima-mehta-71216177/" 
                        />
                    </div>
                    <h2>Our Core Team</h2>
                    <div className="row">
                        <TeamCard
                            Mname="Isha Dabas"
                            Mdesc="Community lead"
                            Mphoto={ISHA}
                            link="https://www.linkedin.com/in/isha-dabas-6b817a210"
                        />
                        <TeamCard
                            Mname="Samridhi"
                            Mdesc="Outreach Team Lead"
                            Mphoto={SAMRIDHI}
                            link="https://www.linkedin.com/in/samridhi6112"
                        />
                        <TeamCard
                            Mname="Mukul Sansanwal"
                            Mdesc="Web Development Lead"
                            Mphoto={MUKUL}
                            link="https://www.linkedin.com/in/mukul-sansanwal-7b698820b"
                        />
                        <TeamCard
                            Mname="Ansh Barman"
                            Mdesc="Content Team Lead"
                            Mphoto={ANSH}
                            link="https://www.linkedin.com/in/ansh-barman-6159201ba"
                        />
        
                        <TeamCard
                            Mname="Sandhya Yadav"
                            Mdesc="UI/UX Lead"
                            Mphoto={SANDHYA}
                            link="https://www.linkedin.com/in/manish-kumar-singh-4995201a0"
                        />
                        <TeamCard
                            Mname="Anshul Singh"
                            Mdesc="Event Management Lead"
                            Mphoto={ANSHUL}
                            link="https://www.linkedin.com/in/anshul-singh-34b309240"
                        />
                        <TeamCard
                            Mname="Deepti Kaushik"
                            Mdesc="Event Management Lead"
                            Mphoto={DEEPTI}
                            link="https://www.linkedin.com/in/deepti-kaushik-a8a42b218"
                        />
                        <TeamCard
                            Mname="Sanjeev Arora"
                            Mdesc="App development lead"
                            Mphoto={SANJEEV}
                            link="https://www.linkedin.com/in/sanjeevarora3735"
                        />
                         <TeamCard
                            Mname="Shivam Kumar"
                            Mdesc="Web Development Lead"
                            Mphoto={SHIVAM}
                            link="https://www.linkedin.com/in/shivam-kumar-b75774223"
                        />
                         <TeamCard
                            Mname="Kirti Kumari"
                            Mdesc="Design Team Lead"
                            Mphoto={KRITI}
                            link="https://www.linkedin.com/in/kriti-kumari-342865248"
                        />
                         <TeamCard
                            Mname="Abhishek Kumar"
                            Mdesc="Outreach team lead"
                            Mphoto={ABHISHEK}
                            link="https://www.linkedin.com/in/abhishek-kumar-299a51223"
                        />
                          <TeamCard
                            Mname="Tanush Arora"
                            Mdesc="Social Media Lead"
                            Mphoto={TANUSH}
                            link="https://www.linkedin.com/in/tanush-arora-b02b0b210"
                        />
                          <TeamCard
                            Mname="Saakshi Singh"
                            Mdesc="Content Creation lead"
                            Mphoto={SAAKSHI}
                            link="https://www.linkedin.com/in/saakshi-singh-b4121a217"
                        />
                          <TeamCard
                            Mname="Rohan Saini"
                            Mdesc="Content Creation lead"
                            Mphoto={ROHAN}
                            link="https://www.linkedin.com/in/rohan-saini-05b9b120b"
                        />
                         <TeamCard
                            Mname="Harsh Vatsal"
                            Mdesc="Application Development Lead"
                            Mphoto={HARSH}
                            link="https://www.linkedin.com/in/harsh-vatsal-63b294212"
                        />
                        
                    </div>
                    <h2>Our Volunteers</h2>
                    <div className="row">
                    <Volunteer/>
                    </div>

                </div>
            </div>
            
        </Fragment>
    )
}

export default Team
