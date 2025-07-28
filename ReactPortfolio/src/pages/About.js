import React from 'react';
import './About.css';

// Images
import profileImg from '../assets/images/about_profile_image.png';
import webDevIcon from '../assets/images/mobile.png';
import responsiveIcon from '../assets/images/about_responsive-design.png';
import mobileIcon from '../assets/images/mobile.png';
import seoIcon from '../assets/images/about_seo.png';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about__container--title titles">About</h2>

      <div className="about__container">
        <div className="about__image">
          <img src={profileImg} alt="about_profile_image" />
          <div className="profile__details">
            <p>Balakumaran</p>
            <p>UCE Ariyalur, Tamil Nadu.</p>
          </div>
        </div>

        <div className="about__details">
          <h3 className="about__position">
            MERN Stack Developer & Web Designer
          </h3>
          <p className="about__text">
            Hi, I'm Balakumaran, a passionate and detail-oriented Full Stack Web Developer with a strong foundation in computer science and hands-on experience in modern web technologies. My journey in tech began with a deep curiosity about how websites work and today, I'm building complete web apps that solve real-world problems.
          </p>

          <h4 className="about__service-title">What I'm doing</h4>

          <div className="about__services">
            <ServiceCard
              icon={webDevIcon}
              title="Web Development"
              description="I build responsive, fast-loading websites using modern tech like HTML, CSS, JS, and MERN. Every site is scalable, and built for real-world performance."
            />
            <ServiceCard
              icon={responsiveIcon}
              title="Responsive Web Design"
              description="I design layouts that adapt beautifully to all screen sizes and devices. Your site will look sharp and stay user-friendly, everywhere."
            />
            <ServiceCard
              icon={mobileIcon}
              title="Mobile App Development"
              description="I create mobile apps using React Native that work on both Android and iOS. Fast, clean, and user-focused mobile experiences."
            />
            <ServiceCard
              icon={seoIcon}
              title="SEO Optimization"
              description="I optimize websites for Google ranking, faster loading, and better traffic. Get found online and grow organically with smart SEO."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className={`service-card`}>
    <div className="service-card__header">
      <img src={icon} alt={title} width="60" />
      <p className="service-card__title">{title}</p>
    </div>
    <div className="service-card__content">
      <p className="service-card__description">{description}</p>
    </div>
  </div>
);

export default About;
