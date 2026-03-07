import "../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import hero1 from "../assets/home/home-hero.webp";
import hero2 from "../assets/home/about-us-img1.webp";
import hero3 from "../assets/home/home-hero-img.webp";
import hero4 from "../assets/home/people-sitting-together.webp";
import hero5 from "../assets/home/womenwithstartup.webp";
import hero6 from "../assets/home/har.webp";
import hero7 from "../assets/home/about-us-img1.webp";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideShow = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideShow.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const members = [
    {
      img: "/images/team/ravi_mourya.webp",
      name: "Ravi Mourya",
      desig: "President",
    },
    {
      img: "/images/team/aaditya_mourya.webp",
      name: "Aditya Maurya",
      desig: "Joint Secretary",
    },
    {
      img: "/images/team/aakash_mourya.webp",
      name: "Akash Maurya",
      desig: "Secretary",
    },
    {
      img: "/images/team/deepika_mourya.webp",
      name: "Deepika Mourya",
      desig: "Project Manager",
    },
  ];

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
        <div className="home-hero-bottom">
          <button onClick={() => navigate("/Donation")}></button>
        </div>
      </div>

      <section className="home-about_us">
        <h1 className="home-about_us_h1">
          <span></span> About us: <span></span>
        </h1>
        <p>
          Tanmay Development Foundation Stakeholders; Works closely with
          institutions, corporate entities, government, local communities and
          individuals to provide timely interventions in water conservation,
          environment protection, rural development, sustainable agriculture,
          sanitation and waste management, women empowerment, education and
          skill development. .Tanmay Development Foundation is a grassroots
          organization that aims to bring qualitative improvement and change in
          the lives of vulnerable people. The strength of Tanmay Development
          Foundation is its strong community connect and its commitment to the
          betterment of the underprivileged society.
        </p>
      </section>

      <section className="home-focus">
        <h1 className="home_focus_h1">Our Focus on Work</h1>
        <div className="home-focus-grid">
          <div className="home-focus_left">
            <p>Working Hand In Hand To Create A Brighter Future</p>
            <button>Know More →</button>
          </div>
          <div className="home-focus_right">
            <Link to="/agriculture" className="home-focus-agr">
              <h3 className="home-focus-h3">Agriculture</h3>
            </Link>
            <Link to="/education" className="home-focus-adu">
              <h3 className="home-focus-h3">Education</h3>
            </Link>
            <Link to="/women-empowerment" className="home-focus-wom">
              <h3 className=""></h3>
            </Link>
            <Link to="/environment" className="home-focus-env">
              <h3 className=""></h3>
            </Link>
          </div>
        </div>
      </section>
      {/* media section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <h2 className="text-2xl text-primary-light mb-8 text-center flex justify-center items-center gap-3">
            <span className="border h-px w-20"></span> TDF in the Media{" "}
            <span className="border h-px w-20"></span>
          </h2>
          <div className="flex justify-around items-center overflow-x-auto gap-2 md:gap-6 scrollbar-hidden p-1">
            {[
              {
                src: "/images/media/media1.webp",
                alt: "Barabanki News Coverage",
              },
              {
                src: "/images/media/media2.webp",
                alt: "Foundation Development News",
              },
              {
                src: "/images/media/media3.webp",
                alt: "Community Outreach Highlights",
              },
              {
                src: "/images/media/media4.webp",
                alt: "Menstrual Hygiene Awareness Workshop",
              },
              {
                src: "/images/media/media5.png",
                alt: "Menstrual Hygiene Awareness Workshop",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group shrink-0 relative overflow-hidden hover:rounded-xl shadow-md transition-all hover:shadow-xl"
              >
                <img
                  loading="lazy"
                  src={item.src}
                  alt={item.alt}
                  className="h-64 md:h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle overlay for better context on hover */}
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <p className="text-white text-sm font-medium">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
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
              We organize community tree planting events to increase green cover
              and combat deforestation.{" "}
            </p>
          </div>
          <div className="impact">
            <div>
              <span>120+</span>
            </div>
            <p>
              Successfully implemented primary education initiatives in the
              village, enrolling 120 children, and providing necessary
              educational materials, fostering a brighter future for the
              community.
            </p>
          </div>
          <div className="impact">
            <div>
              <span>300+</span>
            </div>
            <p>
              Our NGO has empowered 300+ women through Livelihood Training
              programs, conducted health camps, distributed sanitary products,
              and educated women on menstrual hygiene to boost their health and
              improve community.
            </p>
          </div>
          <div className="impact">
            <div>
              <span>10+</span>
            </div>
            <p>
              We implemented sustainable farming workshops for village children,
              teaching them modern agricultural techniques, and water
              conservation, ensuring food security.{" "}
            </p>
          </div>
        </div>
      </section>

      {/* team section //home-team_imgs_c */}
      <section className="home-team">
        <h1 className="home-about_us_h1">
          <span></span> Meet the Team <span></span>
        </h1>
        <div className=" bg-[linear-gradient(to_bottom,var(--primary)_50%,#ece4ef_50%)] h-fit py-10 px-5 md:px-10 mt-5">
          <div className="grid grid-cols-4 items-baseline justify-items-center gap-5 md:gap-10 bg-[#ece5f0] p-5 rounded-lg">
            {members.map((member, i) => (
              <figure
                key={i}
                className="[&>img]:rounded-full font-semibold [&>img]:aspect-square [&>img]:object-cover [&>img]:max-h-40 [&>img]:object-top [&>img]:border-2 [&>img]:border-primary"
              >
                <img loading="lazy" src={`${member.img}`} alt="" />
                <figcaption className="text-center mt-2 whitespace-nowrap text-sm md:text-lg">
                  {member.name}
                </figcaption>
                <figcaption className="text-center font-medium text-xs md:text-base">{member.desig}</figcaption>
              </figure>
            ))}
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
