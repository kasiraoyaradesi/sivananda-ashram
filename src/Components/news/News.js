import React from 'react';
import img from '../assets/Sivananda-1.jpg';
import img1 from '../assets/Sivananda-2.jpg'

import './News.css'; // CSS file to style the component
 // Adjust the image path as needed

const News = () => {
  return (
    <div className="image-container">
       <h2>News</h2>
      <img src= {img} alt="Sivananda's disciples" className="responsive-image" />
      <p className="caption">
      Sivananda's two chief acting organizational disciples were Chidananda Saraswati and Krishnananda Saraswati. Chidananda Saraswati was appointed president of the DLS by Sivananda in 1963 and served in this capacity until his death in 2008. Krishnananda Saraswati was appointed General Secretary by Sivananda in 1958 and served in this capacity until his death in 2001.Disciples who went on to grow new organisations includeChinmayananda Saraswati, founder of the Chinmaya MissionJyotirmayananda Saraswati, founder of Yoga Research Foundation, Miami, Florida, USAKarunananda Saraswati, founder of The Valley of Peace yoga ashram in the Moonbi Ranges north of Tamworth, New South Wales, AustraliaSahajananda Saraswati, Spiritual Head of Divine Life Society of South AfricaSatchidananda Saraswati, founder of the Integral Yoga Institutes, around the world Satyananda Saraswati, founder of Bihar School of YogaShantananda Saraswati, founder of Temple of Fine Arts (Malaysia & Singapore)Sivananda Radha Saraswati, founder of Yasoda Ashram, British Columbia, CanadaVenkatesananda Saraswati, inspirer of Ananda Kutir Ashrama in South Africa and Sivananda Ashram in Fremantle, AustraliaVishnudevananda Saraswati, founder of the Sivananda Yoga Vedanta Centres, HQ Canada..
      </p>
      <img src= {img1} alt="Sivananda's disciples" className="responsive-image" />
      <p className="caption">
        Sivananda's two chief acting organizational disciples were Chidananda Saraswati and Krishnananda Saraswati. Chidananda Saraswati was appointed president of the DLS by Sivananda in 1963 and served in this capacity until his death in 2008. Krishnananda Saraswati was appointed General Secretary by Sivananda in 1958 and served in this capacity until his death in 2001. Disciples who went on to grow new organizations include: Chinmayananda Saraswati, founder of the Chinmaya Mission; Jyotirmayananda Saraswati, founder of Yoga Research Foundation, Miami, Florida, USA; Karunananda Saraswati, founder of The Valley of Peace yoga ashram in the Moonbi Ranges north of Tamworth, New South Wales, Australia; Sahajananda Saraswati, Spiritual Head of Divine Life Society of South Africa; Satchidananda Saraswati, founder of the Integral Yoga Institutes, around the world; Satyananda Saraswati, founder of Bihar School of Yoga; Shantananda Saraswati, founder of Temple of Fine Arts (Malaysia & Singapore); Sivananda Radha Saraswati, founder of Yasodhara Ashram, British Columbia, Canada; Venkatesananda Saraswati, Inspirer of Ananda Kutir Ashrama in South Africa; and Sivananda Ashram in Fremantle, Australia; Vishnudevananda Saraswati, founder of the Sivananda Yoga Vedanta Centres, HQ Canada.
      </p>
    </div>
    
  );
};

export default News;