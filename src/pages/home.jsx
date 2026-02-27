import "../styles/home.css";
import { Link } from "react-router-dom";
import hero1 from "../assets/home/about-us-img1.webp";
import hero2 from "../assets/home/home-hero.webp";
import hero3 from "../assets/home/home-hero-img.webp";
import hero4 from "../assets/home/people-sitting-together.webp";
import hero5 from "../assets/home/womenwithstartup.webp";
import hero6 from "../assets/home/har.webp";
import hero7 from "../assets/home/about-us-img1.webp";
import { useEffect, useState } from "react";

function Home() {
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const timer = setTimeout(() => {
   setLoading(false);
  }, 1500);

  return () => clearTimeout(timer);
 }, []);

 const [currentSlide, setCurrentSlide] = useState(0);
 const slideShow = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentSlide((prev) => (prev + 1) % slideShow.length);
  }, 4000);

  return () => clearInterval(interval);
 }, []);

 if (loading) {
  return (
   <div className="flex items-center justify-center h-screen">
    <div className="w-12 h-12 rounded-full border-4 border-yellow-400 border-b-transparent animate-spin"></div>
   </div>
  );
 }
 return (
  <main className="home">

   <div className="home-hero-background relative overflow-hidden">
    {slideShow.map((image, index) => (
     <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
       index === currentSlide ? "opacity-100" : "opacity-0"
      }`}
      style={{
       backgroundImage: `url(${image})`,
       backgroundSize: "cover",
       backgroundPosition: "center",
      }}
     />
    ))}

    {/* Optional dark overlay */}
    <div className="absolute inset-0 bg-black/40"></div>
   </div>
   <div className="home-hero-bottom">
    <button></button>
   </div>

   <div className="home-about_us">
    <h1 className="home-about_us_h1">
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

    <section className="home-focus">
     <h1 className="home_focus_h1">Our Focus on Work</h1>
     <div className="home-focus-grid">
      <div className="home-focus_left">
       <p>Working Hand In Hand To Create A Brighter Future</p>
       <button>Know More →</button>
      </div>
      <div className="home-focus_right">
       <Link to="/agriculture" className="home-focus-agr">
        <h3>Agriculture</h3>
       </Link>
       <Link to="/education" className="home-focus-adu">
        <h3>Education</h3>
       </Link>
       <Link to="/women-empowerment" className="home-focus-wom">
        <h3></h3>
       </Link>
       <Link to="/environment" className="home-focus-env">
        <h3></h3>
       </Link>
      </div>
     </div>
    </section>
   </div>
   {/* media section  */}
   <section className="home-media">
    <h1 className="home-about_us_h1">
     <span></span> Media <span></span>
    </h1>
    <div className="home-media_imgs">
     <img loading="lazy" src="/images/media/media1.webp" alt="barabanki-news" />
     <img loading="lazy" src="/images/media/media2.webp" alt="tanmay development Foundation news" />
     <img loading="lazy" src="/images/media/media3.webp" alt="tanmay development Foundation news" />
     <img loading="lazy" src="/images/media/media4.webp" alt="aware womens related to monthly cycle" />
    </div>
   </section>
   {/* section our impact  */}
   <section className="home-impact">
    <h1 className="home-about_us_h1">
     <span></span> Our Impact <span></span>
    </h1>
    <div className="home-impact_container">
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
   <section className="home-team">
    <h1 className="home-about_us_h1">
     <span></span> Meet the Team <span></span>
    </h1>
    <div className="home-team_imgs_c">
     <div className="home-team_imgs">
      <img loading="lazy" src="/images/NgoTeamMember.jpg" alt="" />
     </div>
    </div>
   </section>

   {/* home progess */}
   <section className="home-progress">
    <h1 className="home-about_us_h1">
     <span></span> Our Progress <span></span>
    </h1>
    <div className="home-progress_imgs">
     <img loading="lazy" src="/images/OurProgress.jpg" alt="" />
    </div>
   </section>

  </main>
 );
}

export default Home;
