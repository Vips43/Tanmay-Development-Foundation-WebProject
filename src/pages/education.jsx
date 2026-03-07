import { motion } from "framer-motion";
import { useMystore } from "../store/myStore";

function Education() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const roles = useMystore(state=> state.roles);


  return (
    <main className="w-full bg-[#ece5f0] py-16 ">
      <div className="border-8 border-primary w-sm md:w-xl ml-10 rounded-sm "></div>
      <h1 className="text-3xl md:text-5xl font-bold my-5 ml-10">Education</h1>
      <div className="border-b-[1.5rem] md:border-b-[2rem] border-primary w-full overflow-hidden">
        <img
          fetchPriority="high"
          src="/images/edu/education-hero.webp"
          alt="Students learning"
          className="w-full h-[40vh] md:h-[60vh] object-cover object-right md:object-center"
        />
      </div>

      <section className="mt-20">
        <h1 className="text-2xl text-bgClr font-bold px-10 py-1 bg-orange-600 w-fit mx-auto rounded-md ">
          WHAT WE DO{" "}
        </h1>

        <div className="">
          <h1 className="flex items-center justify-center my-10 text-3xl gap-3 text-primary font-bold">
            <span className="h-px border border-primary block w-20"></span>Rural
            Education
            <span className="h-px border border-primary block w-20"></span>
          </h1>
        </div>
        <p className="mx-5 text-lg">
          We are working on to provide quality education to rural children. A
          large portion of rural students must deal with a lack of access to
          quality reading materials and instruction at a early age(especially
          preschool)
        </p>
      </section>

      <section>
        <h1 className="flex items-center justify-center my-10 text-3xl gap-3 text-primary font-bold">
          <span className="h-px border border-primary block w-20"></span>Digital
          Literacy
          <span className="h-px border border-primary block w-20"></span>
        </h1>

        <div className="flex items-center justify-center gap-3 text-xl font-bold my-2 whitespace-normal mx-5">
          <h1 className="text-2xl text-center">
            Empowering Rural India through{" "}
            <span className="text-primary">
              Digital Literacy : A Path to Progress
            </span>
          </h1>
        </div>

        <p className="mx-5 text-lg">
          As a dedicated NGO working towards the upliftment of rural India , we
          recognize the transformative power of digital literacy.<br></br>
          Our mission is to bridge the digital divide and empower rural
          communities by providing essential digital skills and resources
        </p>
        <div className="my-10 mx-5 space-y-2">
          <h1 className="text-2xl font-bold">
            Importance of Digital Literacy in Rural Areas
          </h1>
          <p className="text-lg">
            Access to information : Digital literacy enables rural populations
            to access vital information on agriculture , health, education, and
            government services. Economic opportunities: it open up new avenues
            for employment, entrepreneurship, and financial inclusion through
            online platforms. Social connectivity : it helps bridge social gaps
            , allowing rural residents to connect with the wider world,
            enhancing social cohesion and inclusion. Education Enhancement :
            Digital tool can significantly enhance the quality of education,
            providing students with access to a wealth of online and learning
            opportunities.
          </p>
        </div>
      </section>

      <img
        loading="lazy"
        src="/images/edu/Rectangle-7.webp"
        alt="children-with-books"
        className="w-full"
      />
      <section className="flex flex-col md:flex-row my-10 items-center gap-4 md:gap-10 mx-3 py-3">
        <img
          loading="lazy"
          src="/images/our-role.png"
          alt="our-role-education"
          className="rounded-2xl aspect-square w-72"
        />
        <p className="para">
          Tanmay Development Foundation is dedicated to improving to Rural
          Education. we Focus on to provide quality educationto rural children.
          A large portion of rural students must deal with a lack of access to
          quality reading materials and instruction at an early age(especially
          preschool).
          <br />
          <br />
          We operate at the grassroots level, implementing programs to address
          educational disparities
        </p>
      </section>

      <motion.section
        className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 my-10 font-montserrat"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {roles?.map((role, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center tracking-tighter"
          >
            <div className="w-full p-2 mb-4 overflow-hidden rounded-2xl">
              <motion.img
                loading="lazy"
                src={role.img}
                alt={role?.alt || ""}
                className="w-full h-full aspect-square object-cover rounded-2xl shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <p className="text-center text-gray-800 font-medium px-4 border-b border-gray-200">
              {role?.name || ""}
            </p>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
export default Education;
