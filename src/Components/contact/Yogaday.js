import React from 'react'
import img from '../assets/yoga day1.jpg'
import './Yogaday.css'
import { useNavigate } from 'react-router-dom';


const Yogaday = () => {
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate('/Contact'); // Navigate to the "swami-sivananda" page
      };
  return (
    <div>
    <div className='yoga'>
    <div className ='yoga-image'>
        <img src={img} alt='yoga img'/>
     </div>
     <div className='yoga-des'>
        <h1>International Day of Yoga</h1>
        <p>
        The International Day of Yoga is a day in recognition of Yoga, that is celebrated around the 
        world annually on 21 June, following its adoption by the United Nations in 2014.
        As Yoga exercises have shown significant benefits for physical and mental well-being,
         it was considered important by the UN to globally promote this wellness practice, which originated
          in ancient India.</p>

        <p>The initiative for "Yoga Day" was taken by India's Prime Minister Narendra Modi in his
         2014 UN address, and the related resolution received broad global support, with 177 
         nations co-sponsoring it in the United Nations General Assembly, where it passed unanimously.
         Subsequently, the first International Yoga Day was celebrated successfully on 21 June 2015, 
         around the world including New York, Paris, Beijing, Bangkok, Kuala Lumpur, Seoul and New Delhi.

        </p> 
        </div>
        </div>
        <div className='origin'>
       <p> In September 2014, India's Prime Minister Narendra Modi, in his UN address, suggested an annual 
        Day of Yoga on 21 June, as it is the longest day of the year in the Northern Hemisphere and shares 
        a special significance in many parts of the world. Following the initial proposal, the UN 
        adopted the draft resolution, entitled "Day of Yoga", in 2014. The consultations were convened by
         the delegation of India. In 2015, the Reserve Bank of India issued a 10-rupee commemorative
          coin to mark the International Day of Yoga. In April 2017, UN Postal Administration (UNPA) 
          issued 10 stamps on Asanas on a single sheet to mark International Day of Yoga.</p>

        </div>
        <div className='click'>
            <h2>Click the button below to sign up for yoga classes.</h2>
        </div>
        <div>
         <button className="button"  onClick={handleClick}>Click here</button>
        </div>
        <br/>
    
      </div>  
  )
}

export default Yogaday