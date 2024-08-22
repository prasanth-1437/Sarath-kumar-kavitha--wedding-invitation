import React, { useEffect, useState } from 'react';
import './HomePage.css'; // Ensure this CSS file is created for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import ring from './Ring.jpg'
import couple from './couple.jpg'
import Gudela from './Gudela.jpg'
import './header.css'

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [greet,setGreet]=useState("")
  const [isToggled, setIsToggled] = useState(false);
  const [card,setCard]=useState(true)

  const toggleBodyClass = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (isToggled) {
      document.body.classList.remove('toggled-class');
    } else {
      document.body.classList.add('toggled-class');
    }
    
    // Clean up by removing the class when the component unmounts
    return () => {
      document.body.classList.remove('toggled-class');
    };
  }, [isToggled]);


  useEffect(() => {
    const calculateTimeLeft = () => {
      // Correct wedding date for August 26, 2024
      const weddingDate = new Date('2024-08-26T10:00:00+05:30'); // Ensure this date is correct
      const now = new Date();

      console.log("Wedding Date:", weddingDate.toString());
      console.log("Current Date:", now.toString());

      // Calculate the difference in milliseconds
      const difference = weddingDate - now;
      console.log("Difference (ms):", difference);

      // If the wedding date is in the past, return an empty object
      if (difference <= 0) {
        setTimeLeft({});
        setGreet('Happy Married Life Both of you')
        return;
      }

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <nav className="navbar">
        <ul>
        <li><a href="#Home">Home</a></li>
          <li><a href="#invitation">Invitation</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#countdown">Timer</a></li>
          <li onClick={toggleBodyClass}>  {isToggled?<><b style={{color:"black"}}>Dark </b><i class="fa-solid fa-lightbulb" ></i></>:<><b style={{color:"black"}}>Light </b><i class="fa-regular fa-lightbulb" ></i></>}
          </li>
        </ul>
      </nav>

      <header id="Home" className="hero-section">
        <div><h1>Gudela's Wedding Invitation</h1></div>
        <br></br><br></br>
        <br></br><br></br>
        
     <div className={isToggled?'hero-names':"hero-namesD"}>
     <h2>Sarath Kumar</h2>
     <h2>&</h2>
     <h2>Kavitha</h2>
     
     
     </div>
     <br></br><br></br>
     <br></br><br></br>
     <br></br><br></br>
        <div>
          <p>Marriage is honourable in all. heb: 13:4</p>
        </div>
      </header>

      <section id="invitation" className={isToggled?"invitation-details":"invitation-detailsD"}>
       <b> <h2 id='headings'>Mr. Gudela Srinivasa rao & Mrs. Lakshmi</h2></b>
        <p>We cordially invite you and your family to the auspicious occasion of the wedding of our Younger Son:</p>
        <img id="couple" src={couple}/>
        
        <h3>Sarath Kumar</h3>
        <p>With</p>
        <h3>Kavitha</h3>
     
        <p>(Only daughter of Mr. Pilla Apparao & Mrs. Chandra from chittinagar, Vijayawada, NTR Dist)</p>

        <h2 id='headings'>Wedding Bells & Venue</h2>
        <p>On Monday, August 26, 2024 at 10:00 a.m.</p>
       
        <p>Lunch follows ...</p>
         <button onClick={()=>{setCard(!card)}}>{card?<p><b>Open Card</b></p>:<p><b>Close Card</b></p>}</button><br>
         </br>
         {card?<></>:<><img src={Gudela} style={{width:"100%"
         }}/></>}
        <h4>Invited by:</h4>
        <p>Mr. Gudela Srinivasa rao & Mrs. Lakshmi</p>
        <p>With best compliments from Near & Dear</p>
      </section>

      <section id="countdown" className={isToggled?"countdown":"countdownD"}>
        <h2>Time Left Until the Wedding</h2>
        <div className="timer">
          <div className="time-unit">
            <span className="number">{timeLeft.days || 0}</span>
            <span className="label"> Days</span>
          </div>
          <div className="time-unit">
            <span className="number">{timeLeft.hours || 0}</span>
            <span className="label"> Hours</span>
          </div>
          <div className="time-unit">
            <span className="number">{timeLeft.minutes || 0}</span>
            <span className="label"> Minutes</span>
          </div>
          <div className="time-unit">
            <span className="number">{timeLeft.seconds || 0}</span>
            <span className="label"> Seconds</span>
          </div>
          <h3>{greet}</h3>
        </div>
      </section>

      <section id="location" className={isToggled?"location":"locationD"}>
<i className="fas fa-location-dot" style={{ color: "red", fontSize: "2.5em" }}></i>
 
      <h2>Location</h2>
        <p>V CONVENTION (Milk Project Function Hall)</p>
        <p>Bheemana vari Peta, Vijayawada - 520001</p>
        <div className="map">
          <iframe
            title="Wedding Venue Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1203.4923143037179!2d80.61334795601427!3d16.54141078891948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef5add1db6b3%3A0xa58237a41844e2ce!2sV%20convention!5e0!3m2!1sen!2sin!4v1723883240174!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <section id="Solemnized" className={isToggled?'solemnized':'solemnizedD'}>
      <h4>To be Solemnized by:</h4>
      <p>Pastor. Y.S. Raju (I.P.C. Church)</p>
        <p>Rev. Charles. P. Jacob (Philadelphia A.G. Church)</p>
        <p>With blessings from Rev. Dr. Philip. P. Jacob (Philadelphia A.G. Church)</p>
        

      </section>
      <section className={isToggled?'contact':'contactD'}>
        <h3>Contact</h3>
        <p>G.Lakshmi : 9502651484</p>
        <p>G.Charan Teja : 9390358658</p>
      </section>
      <br></br>
      
     
       <center><p>&copy; PrasanthKumar Gudela , contact: 8977263725</p></center>
       <br></br>
       <br></br>
       
      <footer className="footer">
        <div id="Navbar-down">
        <a href='#Home'><div className='each-option'> 
          <div>
        
          <i class="fa-solid fa-heart" style={{ color: "red"}}></i>
          {/* <i class="fa-solid fa-house"></i> */}
          </div>
          <div className='btm-name'>
             <p>Home</p>
          </div>
         </div></a>
         <a href='#invitation'>
         <div className='each-option'>
        <div >
          <img src={ring} style={{width:'1.7em',height:"1.5em"}}/>
        </div>
    
    <div className='btm-name'>
      <p>invite</p>
    </div>
         </div></a>
         <a href="#location">  <div className='each-option'>
           <div>
           <i className="fas fa-location-dot" style={{ color: "green", fontSize: "1em" }}></i>
           </div>
           <div className='btm-name'>
               <p>Location</p>
           </div>
         </div></a>
         <a href='#countdown'>
         <div className='each-option'>
         <div>
         <i class="fa-solid fa-hourglass-half" style={{ color: "brown"}}></i>
           </div>
           <div className='btm-name'>
               <p>Time</p>
           </div>

         </div>
         </a>
         <div className='each-option' onClick={toggleBodyClass}>
         <div>
           {isToggled?<i class="fa-solid fa-lightbulb" ></i>:<i class="fa-regular fa-lightbulb" ></i>}
           </div>
           <div className='btm-name'>
               {isToggled?<p>Dark</p>:<p>Light</p>}
           </div>
         </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;
