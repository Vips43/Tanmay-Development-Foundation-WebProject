import "../styles/about-us.css";
import { motion } from "framer-motion";

function AboutUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
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
  const works = [
    {
      img: "/images/about/education-comp.jpg",
      label:
        "Tanmay Development Foundation which is providing free computer education to rural poor and underprivileged children.",
      alt: "providing computer education",
    },
    {
      img: "/images/about/computer-education.jpg",
      label: "Computer Education ",
    },
    {
      img: "/images/about/tree-plantation.jpg",
      label:
        "on the occasion of 76th Republic Day villagers and children of Shiksha Kendra planted trees at a public place",
      alt: "tree-plantation",
    },
    {
      img: "/images/about/kids-craft.jpg",
      label: "All the children participated in it enthusiastically.",
      alt: "kids-craft",
    },
    {
      img: "/images/about/certificate1.jpg",
      label: "Cumputer certificate given to youngsters.",
      alt: "certificate",
    },
    {
      img: "/images/about/certificate.jpg",
      label: "Cumputer certificate given to youngsters.",
      alt: "certificate",
    },
    {
      img: "/images/about/computer-skills.jpg",
      label: "Kids are exploring their skills",
      alt: "skills on computer",
    },
    {
      img: "/images/about/solar-roof.jpg",
      label:
        "heartfelt gratitude to Diwakar and Priya Nigam Education Trust for their generous support in providing a 1.5 kW solar inverter for the TDF Computer Centre.",
      alt: "solar-roof",
    },
  ];

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
          sanitation and waste management, women empowerment, education and
          skill development. .Tanmay Development Foundation is a grassroots
          organization that aims to bring qualitative improvement and change in
          the lives of vulnerable people. The strength of Tanmay Development
          Foundation is its strong community connect and its commitment to the
          betterment of the underprivileged society.
        </p>

        <motion.section
          className="about-focus"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="about_focus_h1">
            Promoting Digital India
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl px-6 md:px-10 text-center md:text-left leading-relaxed" >
            Tanmay Computer Center is an initiative of Tanmay Development
            Foundation which is providing free computer education to rural poor
            and underprivileged children. The main support in this is from
            Diwakar and Priya Nigam Education Trust with whose support we are
            able to run this campaign.
            <br />
            Our target in the first year is to provide free computer education
            to 100+ underprivileged children. We hope that with your continued
            support, we will be able to provide proper path to the children in
            future.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="p-3 md:p-5 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {works.map((work, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 200 }}
                className="space-y-3 text-center shadow-md rounded-xl overflow-hidden bg-white p-4"
              >
                <motion.img
                  src={work.img}
                  alt={work.alt}
                  className="h-44 md:h-48 w-full object-cover rounded-md"
                  transition={{ duration: 0.3 }}
                />
                <p className="whitespace-normal font-medium text-gray-800">
                  {work.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

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
