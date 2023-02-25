import './assets/css/volunteer.css';
import Charu from './assets/images/voluntree/charu2.jpg';
import Shruti from './assets/images/voluntree/shruti yadav.jpg';
import Aryan from './assets/images/voluntree/aryan.jpg';
import Ritu from './assets/images/voluntree/ritu.jpg';
import Mohit from './assets/images/voluntree/mohit2.jpeg';
import Mahak from './assets/images/voluntree/Mahak_yadav.jpg';
import Tanishka from './assets/images/voluntree/tanishika.jpg';
import Prathamesh from './assets/images/voluntree/prathamesh.jpg';
import Shruti1 from './assets/images/voluntree/shruti.jpg';
import Lochan from './assets/images/voluntree/loachan2.jpg';
import Ujjwal from './assets/images/voluntree/ujjwal.jpeg';
import Diksha from './assets/images/voluntree/Disha Adak.jpg';

const Volunteer = () => {
    return(
        <div>
            <section class="container containerV">
      <div class="cardV">
        <div class="image">
          <img src={Charu} alt="" />
        </div>
        <h2>Charu Sharma</h2>
        <p>Socail Media</p>
        <a href="https://www.linkedin.com/in/charu-sharma-799284262"></a>
      </div>
      <div class="cardV">
        <div class="image">
            <img src={Shruti} alt="" />
        </div>
        <h2>Shruti Yadav</h2>
        <p>Social Media</p>
        <a href="https://www.linkedin.com/in/shruti-yadav-10a504253">
        <i class="fab-fa"></i>
        </a>
      </div>
      <div class="cardV">
        <div class="image">
            <img src={Aryan} alt="" />
        </div>
        <h2>Aryan Dabas</h2>
        <p>Social Media</p>
        <a href="https://www.linkedin.com/in/aryan-dabas-559827219"></a>
      </div>
      <div class="cardV">
        <div class="image">
            <img src={Ritu} alt="" />
        </div>
        <h2>Ritu Yadav</h2>
        <p>Outreach Team</p>
        <a href="https://www.linkedin.com/in/ritu-yadav-0bb447253"></a>
      </div>
      <div class="cardV">
        <div class="image">
            <img src={Mohit} alt="" />
        </div>
        <h2>Mohit Rathee</h2>
        <p>Outreach Team</p>
        <a href="https://www.linkedin.com/in/mohit-rathee-ab209224b"></a>  
      </div>
      <div class="cardV">
        <div class="image">
            <img src={Mahak} alt= ""/>
        </div>
        <h2>Mahak Yadav</h2>
        <p>Event Management</p>
        <a href="https://www.linkedin.com/in/mahak-yadav-34615a25a"></a>  
      </div>
      <div class="cardV">
        <div class="image">
            <img src={Prathamesh}alt="" />
        </div>
        <h2>Prathamesh</h2>
        <p>Event Management</p>
        <a href="https://www.linkedin.com/in/prathamesh-wakekar-62529825a"></a>  
      </div>
      <div class="cardV">
        <div class="image">
            <img src={Shruti1}alt="" />
        </div>
        <h2>Shruti Yadav</h2>
        <p>Web Development</p>
        <a href="https://www.linkedin.com/in/shruti-jain-98391a254"></a>  
      </div>
      <div class="cardV">
        <div class="image">
            <img src={Lochan} alt= ""/>
        </div>
        <h2>Lochan  </h2>
        <p>Content Creation</p>
        <a href="https://www.linkedin.com/in/prathamesh-wakekar-62529825a"></a>  
      </div>

      <div class="cardV">
        <div class="image">
            <img src={Ujjwal} alt="" />
        </div>
        <h2>Ujjwal Aggarwal</h2>
        <p>Application Development</p>
        <a href="https://www.linkedin.com/in/prathamesh-wakekar-62529825a"></a>  
      </div>

      <div class="cardV">
        <div class="image">
            <img src={Tanishka} alt="" />
        </div>
        <h2>Tanishka Tiwari</h2>
        <p>UI/UX </p>
        <a href="https://www.linkedin.com/in/prathamesh-wakekar-62529825a"></a>  
      </div>
    
    <div class="cardV">
      <div class="image">
          <img src={Diksha} alt="" />
      </div>
      <h2>Disha Adak</h2>
      <p>Design Team</p>
      <a href="https://www.linkedin.com/in/prathamesh-wakekar-62529825a"></a>  
    </div>
   </section>
        </div>
    )
}

export default Volunteer;