import React from 'react';
import './News.css'; // Import CSS file for styling

export default function News() {
  return (
    <div className="news-container">
      {/* First row: Image and Text */}
      <div className="news-item">
        <div className="news-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Swami_Sivananda_Swami_Vishnudevananda_am_Ganges.jpg/244px-Swami_Sivananda_Swami_Vishnudevananda_am_Ganges.jpg" alt="News 1" />
        </div>
        <div className="news-text">
          <p>
          Founding the Divine Life Society
Sivananda founded the Divine Life Society in 1936 on the banks of the Ganges River, distributing spiritual literature for free. Early disciples included Satyananda Saraswati, founder of Satyananda Yoga.

In 1945, he created the Sivananda Ayurvedic Pharmacy, and organised the All-world Religions Federation. He established the All-world Sadhus Federation in 1947 and the Yoga-Vedanta Forest Academy in 1948.  He called his yoga the Yoga of Synthesis, combining the Four Yogas of Hinduism (Karma Yoga, Bhakti Yoga, Jnana Yoga, Rāja Yoga), for action, devotion, knowledge, and meditation respectively.

Sivananda travelled extensively on a major tour in 1950, and set up branches of the Divine Life Society throughout India. He vigorously promoted and disseminated his vision of yoga.   His Belgian devotee André Van Lysebeth wrote that his critics "disapproved of both his modern methods of diffusion, and his propagation of yoga on such a grand scale to the general public", explaining that Sivananda was advocating a practice that everybody could do, combining "some asanas, a little pranayama, a little meditation and bhakti; well, a little of everything".  

Vegetarianism
Sivananda insisted on a strict lacto-vegetarian diet for moral and spiritual reasons, arguing that "meat-eating is highly deleterious to health".   Divine Life Society thus advocates a vegetarian diet.  

Mahasamadhi
Swami Sivananda died, described as entering Mahasamadhi, on 14 July 1963 beside the River Ganges at his Sivananda Ashram near Muni Ki Reti.
          </p>
        </div>
      </div>

      {/* Second row: Image and Text */}
      <div className="news-item">
        <div className="news-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Krishnananda_and_Sivananda_1945.jpg/168px-Krishnananda_and_Sivananda_1945.jpg" alt="News 2" />
        </div>
        <div className="news-text">
          <p>
          Sivananda's two chief acting organizational disciples were Chidananda Saraswati and Krishnananda Saraswati. Chidananda Saraswati was appointed president of the DLS by Sivananda in 1963 and served in this capacity until his death in 2008. Krishnananda Saraswati was appointed General Secretary by Sivananda in 1958 and served in this capacity until his death in 2001.

Disciples who went on to grow new organisations include:

Chinmayananda Saraswati, founder of the Chinmaya Mission
Jyotirmayananda Saraswati, founder of Yoga Research Foundation, Miami, Florida, USA
Karunananda Saraswati, founder of The Valley of Peace yoga ashram in the Moonbi Ranges north of Tamworth, New South Wales, Australia
Sahajananda Saraswati, Spiritual Head of Divine Life Society of South Africa
Satchidananda Saraswati, founder of the Integral Yoga Institutes, around the world
Satyananda Saraswati, founder of Bihar School of Yoga
Shantananda Saraswati, founder of Temple of Fine Arts (Malaysia & Singapore)
Sivananda Radha Saraswati, founder of Yasodhara Ashram, British Columbia, Canada
Venkatesananda Saraswati, inspirer of Ananda Kutir Ashrama in South Africa and Sivananda Ashram in Fremantle, Australia
Vishnudevananda Saraswati, founder of the Sivananda Yoga Vedanta Centres, HQ Canada.
          </p>
        </div>
      </div>
    </div>
  );
}
