import "../styles/about-us.css";
import { Link } from "react-router-dom";

function AboutUs() {
 return (
  <main className="about">
   <div className="about-hero-background"></div>
   <div className="about-hero-bottom">
    <button></button>
   </div>

   <div className="about-about_us">
    <h1 className="about-about_us_h1">
     <span></span> About us: <span></span>
    </h1>
    <p>
     Tanmay Development Foundation Stakeholders; Works closely with
     institutions, corporate entities, government, local communities and
     individuals to provide timely interventions in water conservation,
     environment protection, rural development, sustainable agriculture,
     sanitation and waste management, women empowerment, education and skill
     development. .Tanmay Development Foundation is a grassroots organization
     that aims to bring qualitative improvement and change in the lives of
     vulnerable people. The strength of Tanmay Development Foundation is its
     strong community connect and its commitment to the betterment of the
     underprivileged society.
    </p>

    <section className="about-focus">
     <h1 className="about_focus_h1">Our Focus on Work</h1>
     <div className="about-focus-grid">
      <div className="about-focus_left">
       <p>Working Hand In Hand To Create A Brighter Future</p>
       <button>Know More →</button>
      </div>
      <div className="about-focus_right">
       <Link to="/agriculture" className="about-focus-agr">
        <h3>Agriculture</h3>
       </Link>
       <Link to="/education" className="about-focus-adu">
        <h3>Education</h3>
       </Link>
       <Link to="/women-empowerment" className="about-focus-wom">
        <h3></h3>
       </Link>
       <Link to="/environment" className="about-focus-env">
        <h3></h3>
       </Link>
      </div>
     </div>
    </section>
   </div>
   {/* media section  */}
   <section className="about-media">
    <h1 className="about-about_us_h1">
     <span></span> Media <span></span>
    </h1>
    <div className="about-media_imgs">
     <img src="/images/media/media1.webp" alt="" />
     <img src="/images/media/media2.webp" alt="" />
     <img src="/images/media/media3.webp" alt="" />
     <img src="/images/media/media4.webp" alt="" />
    </div>
   </section>
   {/* section our impact  */}
   <section className="about-impact">
    <h1 className="about-about_us_h1">
     <span></span> Our Impact <span></span>
    </h1>
    <div className="about-impact_container">
     <div className="impact">
      <div>
       <span>100+</span>
      </div>
      <p>
       We organize community tree planting events to increase green cover and
       combat deforestation.{" "}
      </p>
     </div>
     <div className="impact">
      <div>
       <span>120+</span>
      </div>
      <p>
       Successfully implemented primary education initiatives in the village,
       enrolling 120 children, and providing necessary educational materials,
       fostering a brighter future for the community.
      </p>
     </div>
     <div className="impact">
      <div>
       <span>300+</span>
      </div>
      <p>
       Our NGO has empowered 300+ women through Livelihood Training programs,
       conducted health camps, distributed sanitary products, and educated women
       on menstrual hygiene to boost their health and improve community.
      </p>
     </div>
     <div className="impact">
      <div>
       <span>10+</span>
      </div>
      <p>
       We implemented sustainable farming workshops for village children,
       teaching them modern agricultural techniques, and water conservation,
       ensuring food security.{" "}
      </p>
     </div>
    </div>
   </section>

   {/* team section  */}
   <section className="about-team">
    <h1 className="about-about_us_h1">
     <span></span> Meet the Team <span></span>
    </h1>
    <div className="about-team_imgs_c">
     <div className="about-team_imgs">
      <img src="/images/NgoTeamMember.jpg" alt="" />
     </div>
    </div>
   </section>

   {/* about progess */}
   <section className="about-progress">
    <h1 className="about-about_us_h1">
     <span></span> Our Progress <span></span>
    </h1>
    <div className="about-progress_imgs">
     <img src="/images/OurProgress.jpg" alt="" />
    </div>
   </section>
  </main>
 );
}

export default AboutUs;
