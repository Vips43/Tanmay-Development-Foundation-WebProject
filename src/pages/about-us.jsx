import { useEffect } from "react";
import { useMystore } from "../store/myStore";
import "../styles/about-us.css";
import { motion } from "framer-motion";
import { CiCalendarDate } from "react-icons/ci";
import { FaFileAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  const NgoDetails = [
    { label: "Year Established", text: "2024", icon: <CiCalendarDate /> },
    {
      label: "License and Registration",
      text: "BAB/06798/2023-2024",
      icon: <FaFileAlt />,
    },
    { label: "Organizational Head", text: "N/A", icon: <FaUser /> },
  ];
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
  const works = useMystore((state) => state.work);

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

        {/* section organization details  */}
        <section className="bg-bgClr p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {NgoDetails.map((d, i) => (
              <div
                key={i}
                className="bg-white py-5 px-6 flex-1 flex justify-between items-center gap-4 rounded-2xl border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                    {d.label}
                  </span>
                  <span className="font-bold text-xl text-gray-800 mt-1">
                    {d.text}
                  </span>
                </div>

                <div
                  className="text-3xl text-gray-300 cursor-pointer"
                  onClick={() => i === 1 && navigate(`/certificate`)}
                >
                  {d.icon}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Promoting digital india */}
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
            className="text-xl px-6 md:px-10 text-center md:text-left leading-relaxed"
          >
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
            {works?.map((work, index) => (
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
