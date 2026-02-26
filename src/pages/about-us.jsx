import React, { useEffect, useState } from "react";
import "../styles/about-us.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutUs() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "images/homebackground.png",
    "images/onemanintofram.jpg",
    "images/jadabache.jpg",
    "images/seatandstudystudent.jpg",
  ];

  useEffect(() => {
   
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className="about-us">
      <Header />
      <div className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide ${index + 5}`}
            className={`slideshow-image ${
              index === currentImage ? "active" : ""
            }`}
          />
        ))}
      </div>
      <nav className="about-us-navbar-below-photos">
        <ul className="about-us-navbar-below-photos-donate">
          <button className="donate-button">
            <span role="img" aria-label="heart">
              ❤️
            </span>
            <a href="/Mode-Transaction" className="aboutus-donate-button">Donate now</a>
          </button>
        </ul>
      </nav>
      <section className="about-us-1">
        <h1 className="about-us-title-1">
          <span className="line"></span>About us :{" "}
          <span className="line"></span>
        </h1>
        <p className="about-us-text">
          <i>
            Tanmay Development Foundation Stakeholders; Works closely with
            institutions, corporate entities, government, local communities
          </i>
          <br />
          <i>
            and individuals to provide timely interventions in water
            conservation, environment protection, rural development, sustainable
          </i>
          <br />
          <i>
            agriculture, sanitation and waste management, women empowerment,
            education and skill development. Tanmay Development
          </i>
          <br />
          <i>
            Foundation is a grassroots organization that aims to bring
            qualitative improvement and change in the lives of vulnerable
            people.
          </i>
          <br />
          <i>
            The strength of Tanmay Development Foundation is its strong
            community connect and its commitment to the
          </i>
          <br />
          <i>betterment of the underprivileged society.</i>
          <br />
        </p>
      </section>
      <div className="our-focus-on-work">
        <h1 className="our-focus-on-work-title">Our Focus On Work</h1>
        <div className="focus-section">
          <div className="know-more-title">
            <h2>
              Working Hand In Hand To Create A<br /> Brighter Future
            </h2>
            <button className="know-more-button">Know More →</button>
          </div>

          <div class="right">
            <a href="agriculture">
              <div class="card-agriculture">
                <div class="agriculture-overlay-container">
                  <img src="images/about-us-img1.png" alt="Agriculture"></img>
                  <div class="agriculture-overlay">
                    <span class="agriculture-text">Agriculture</span>
                  </div>
                </div>
              </div>
            </a>
            <div class="left-images">
              <a href="education">
                <div className="left-img-1-overlay-container">
                  <img
                    src="images/image16.jpg"
                    className="left-img-1"
                    alt="education"
                  />
                  <div className="left-img-1-overlay">
                    <span className="left-img-1-text">Education</span>
                  </div>
                </div>
              </a>

              <a href="environment">
                <img
                  src="images/environment.png"
                  class="left-img-2"
                  alt="environment"
                />
              </a>
            </div>
            <div class="right-image">
              <a href="women-empowerment">
                <img
                  src="images/women-impowerment.png"
                  alt="women-empowerment"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="media">
        <h1 className="media-title">
          <span className="line"></span>Media <span className="line"></span>
        </h1>
      </section>
      <img src="images/media1.jpg" alt="media1" className="media1" />
      <img src="images/media2.jpg" alt="media2" className="media2" />
      <img src="images/media3.jpg" alt="media3" className="media3" />
      <img src="images/media4.jpg" alt="media4" className="media4" />
      <section className="our-impact">
        <h1 className="our-impact-title">
          <span className="line"></span>Our Impact{" "}
          <span className="line"></span>
        </h1>
      </section>
      <img src="images/OurImpact.jpg" alt="OurImpact" className="OurImpact" />
      <section className="meet-the-team">
        <h1 className="meet-the-team-title">
          <span className="line"></span>Meet The Team{" "}
          <span className="line"></span>
        </h1>
      </section>
      <img
        src="images/NgoTeamMember.jpg"
        alt="NgoTeamMember"
        className="NgoTeamMember"
      />
      <section className="our-progress">
        <h1 className="our-progress-title">
          <span className="line"></span>Our Progress{" "}
          <span className="line"></span>
        </h1>
      </section>
      <img
        src="images/OurProgress.jpg"
        alt="OurProgress"
        className="OurProgress"
      />
      <Footer />
    </div>
  );
}

export default AboutUs;
