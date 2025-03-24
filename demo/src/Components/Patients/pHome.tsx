import React from "react";
import "./pHomeStyle.css";
import { Link } from "react-router-dom";


const Hospital = () => {
  const stats = [
    { number: "1400+", text: "Qualified Staffs", color: "#7c3aed" },
    { number: "49+", text: "Years of Experience", color: "#1992d4" },
    { number: "100+", text: "Modern Equipment", color: "#22c55e" },
    { number: "80+", text: "Awards Won", color: "#f97316" },
    { number: "360", text: "Degree Healthcare", color: "#db2777" },
    { number: "950+", text: "Bedded Hospital", color: "#4f46e5" },
  ];
  const specialties = [
    { name: "Anesthesiology", icon: "🩹" },
    { name: "Cardiology", icon: "❤️" },
    { name: "Cardiovascular And Thoracic Surgery", icon: "💖" },
    { name: "Clinical Hematology", icon: "🩸" },
    { name: "Dentistry", icon: "🦷" },
    { name: "Dermatology", icon: "🧑‍⚕️" },
    { name: "Diabetology And Endocrinology", icon: "🩺" },
    { name: "Emergency Care", icon: "🚨" }
  ];
  return (
    <div className="hospital-container">
      <header className="header">
        <div className="logo">Horizon Hospital</div>
        <nav>
          <ul>
            <Link to="/patient/pHome">Home</Link>
                       <Link to="/patient/pDoctor">Doctors</Link>
                       <Link to="/patient/pDept">Department</Link>
                       <Link to="/patient/pServices">Services</Link>
                       <Link to="/patient/pAppointment">Appointment</Link>
            <a href="#about">Contacts</a>
          </ul>
        </nav>
      </header>
      
      <section className="hero">
        <div className="hero-content">
          <h3>WISH YOUR HAPPY LIFE!</h3>
          <h1>Protect Your Health and Love Be Happy</h1>
          <p>
            Completely e-enable covalent functionalities and market positioning 
            infomediaries. Interactively initiate exceptional.
          </p>
          <button className="btn">Discover more</button>
        </div>
      </section>
      
      <section className="info-section">
        <div className="info-box schedule">
          <h3>Schedule Hours</h3>
          <p>Mon-Thu: 09.00 - 06.00</p>
          <p>Friday: 09.00 - 10.00</p>
          <p>Saturday: 02.00 - 06.00</p>
          <p>Sunday: 09.00 - 06.00</p>
        </div>
        <div className="info-box doctors">
          <h3>Find Doctors</h3>
          <p>High Expect 50+ Doctors</p>
          <button className="btn">Doctor</button>
        </div>
        <div className="info-box contact">
          <h3>Contact Us</h3>
          <p>Call Us Anytime</p>
          <p>+00 123 (456) 890</p>
          <button className="btn">Contact Us</button>
        </div>
      </section>
      
      <section className="experience">
        <h2>25+ Years of Experience</h2>
        <p>
          Completely e-enable covalent functionalities and market positioning infomediaries 
          initiate exceptional hospital supply.
        </p>
        <ul>
          <li>Providing Compassionate Care</li>
          <li>Brings Innovation and Care Together</li>
          <li>From Prevention to Recovery</li>
        </ul>
      </section>

      <div className="hospital-info-container">
      <div className="hospital-info-content">
        <h3 className="hospital-name"> Hospital</h3>
        <h2 className="hospital-title">We Are The Best Hospital In Coimbatore</h2>
        <p className="hospital-description">
          At Hospital, we aim to provide exceptional healthcare to everyone seeking it. 
          Being Coimbatore’s Best Hospital, we prioritize our patients above all else. 
          We believe in treating each individual with the utmost respect, dignity, and empathy they deserve. 
          Our patient-centered approach ensures that your needs are not just met but exceeded, as we strive to 
          create a healing environment where you feel valued, heard, and cared for. 
          As a top multi-speciality hospital in Coimbatore, we are equipped with state-of-the-art technology 
          and committed to delivering the highest standards of care.
        </p>
        <p className="hospital-description">
          Beyond providing exceptional healthcare services, Hospital is deeply rooted in 
          our community. We actively engage in outreach programs, health education initiatives, and partnerships 
          with local organizations to promote wellness and improve the overall health of our community members. 
          Being honored with the tag “Best Hospital In Coimbatore,” we have received several accolades, recognitions, 
          NABH certification, and many more.
        </p>
      </div>
      <div className="hospital-info-image">
        {/* <img src={doctorsImage} alt="Doctors Team" /> */}
      </div>
    </div>
      <div className="appointments-container">
      <h2 className="appointments-title">
        Introducing <span className="highlight">Digital Appointments</span>
      </h2>
      <p className="appointments-subtitle">
        Schedule your visit now at Hospital
      </p>

      <div className="core-values">
      <h2 className="title">How we work</h2>
      <h1 className="heading">Our Core Values</h1>
      <p className="description">
        Our fundamental principles, beliefs and values that drive our business
      </p>

      <div className="values-container">
        {/* Reliability */}
        <div className="value-card reliability">
          <div className="icon">🛡️</div>
          <h3>Reliability</h3>
          <p className="highlight">WE WANT TO BE KNOWN AS RELIABLE</p>
          <p>We are committed to providing our reliability by delivering the best possible care and treatment.</p>
        </div>

        {/* Responsibility */}
        <div className="value-card responsibility">
          <div className="icon">🤲</div>
          <h3>Responsibility</h3>
          <p className="highlight">WE ARE MOTIVATED BY RESPONSIBILITY</p>
          <p>We always strive to do everything in our capacity to serve our patients better.</p>
        </div>

        {/* Respect */}
        <div className="value-card respect">
          <div className="icon">🤝</div>
          <h3>Respect</h3>
          <p className="highlight">WE TREAT OTHERS AS WE EXPECT TO BE TREATED</p>
          <p>We always treat people with courtesy, politeness, and kindness.</p>
        </div>

        {/* Reasonable */}
        <div className="value-card reasonable">
          <div className="icon">💰</div>
          <h3>Reasonable</h3>
          <p className="highlight">WE ARE GUIDED BY OUR INTENT TO BE FAIR</p>
          <p>We are committed to offering the best healthcare at the most affordable price.</p>
        </div>
      </div>
    </div>

    <div className="specialties-container">
      <h2>Our Specialities</h2>
      <p>
        We take pride in offering a comprehensive range of specialized medical
        services to cater to all your healthcare needs.
      </p>
      <div className="specialties-grid">
        {specialties.map((specialty, index) => (
          <div key={index} className="specialty-card">
            <div className="specialty-icon">{specialty.icon}</div>
            <div className="specialty-name">{specialty.name}</div>
          </div>
        ))}
      </div>
      <button className="know-more">Know More →</button>
    </div>

    <div className="health-checkup-container">
      <div className="health-checkup-content">
        <h3 className="subtitle">Schedule an Health Check-Up</h3>
        <h2 className="title">Book a Health Checkup</h2>
        <p className="description">
          Beat the queue and get a comprehensive health checkup at Sri Ramakrishna Hospital.
          Ensure your well-being with top medical experts from the comfort of your home!
        </p>
        <button className="book-button">BOOK CHECKUP</button>
      </div>
      <div className="health-checkup-image">
        {/* <img src={doctorImage} alt="Doctor Consultation" /> */}
      </div>
    </div>

      <div className="appointments-content">
        {/* Left Side - Image Section */}
        <div className="appointments-image">
          <img src="your-image-path.png" alt="Appointment" />
        </div>

        {/* Right Side - Appointment Options */}
        <div className="appointments-options">
          <div className="appointment-box">
            <h3>Online Consultation</h3>
            <p>Select a preferred doctor and time slot to book a video consultation</p>
            <button className="appointment-button">Consult Now</button>
          </div>

          <div className="appointment-box">
            <h3>Doctor Appointment</h3>
            <p>Select a preferred doctor and time slot to book a video consultation</p>
            <button className="appointment-button">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
    <div className="appointment-banner3">
      <div className="appointment-content3">
        <div className="appointment-text3">
          <h3 className="appointment-subtitle3">Schedule an Appointment</h3>
          <h1 className="appointment-title3">Consult our Doctors</h1>
          <p className="appointment-description3">
            Beat The Queue To Consult A Doctor From Sri Ramakrishna Hospital.
            You Deserve The Best Healthcare In The Comfort Of Your Home!
          </p>
          <button className="appointment-button3"><Link to="/patient/pAppointment">BOOK APPOINTMENT</Link></button>
        </div>
        <div className="appointment-image3">
          {/* <img src={doctorImage} alt="Doctor Consultation" /> */}
        </div>
      </div>
    </div>
      
    <div className="why-choose-us">
      <div className="why-choose-content">
        <h3 className="why-choose-title">Why choose us</h3>
        <h2 className="why-choose-heading">
          We constantly strive to provide the best healthcare,
          <br />
          with such an effort we have achieved,
        </h2>

        <div className="stats-container">
          {stats.map((item, index) => (
            <div key={index} className="stats-card">
              <h3 style={{ color: item.color }}>{item.number}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
     
      <footer className="footer">
        <div className="footer-section" id="about">
          <h2>Horizon Hospital</h2>
          <p>
            Completely e-enable covalent functionalities and medical positioning
            infomediaries interactively.
          </p>
          <p>17/B New Division Road, NY 10003 - USA</p>
          <p>+123 (4567) 890</p>
          <p>example@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>Service Links</h3>
          <ul>
            <li>Cardiology</li>
            <li>Orthopedics</li>
            <li>Neurology</li>
            <li>Dermatology</li>
            <li>Dental Care</li>
            <li>Surgery</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Subscribe Newsletter</h3>
          <p>Signup for our latest updates from our medical team anytime.</p>
        </div>
      </footer>
    </div>
  );
};

export default Hospital;
