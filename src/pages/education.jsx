function Education() {
 return (
  <main className="w-full bg-[#ece5f0] pt-16">
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
     <h1 className="flex items-center justify-center my-10 text-2xl gap-3 text-primary font-bold">
      <span className="h-px border border-primary block w-20"></span>Rural
      Education<span className="h-px border border-primary block w-20"></span>
     </h1>
    </div>
    <p className="mx-5 text-sm">
     We are working on to provide quality education to rural children. A large
     portion of rural students must deal with a lack of access to quality
     reading materials and instruction at a early age(especially preschool)
    </p>
   </section>

   <section>
    <h1 className="flex items-center justify-center my-10 text-2xl gap-3 text-primary font-bold">
     <span className="h-px border border-primary block w-20"></span>Digital
     Literacy<span className="h-px border border-primary block w-20"></span>
    </h1>

    <div className="flex items-center justify-center gap-3 text-xl font-bold my-2 whitespace-normal mx-5">
     <h1>
      Empowering Rural India through{" "}
      <span className="text-primary">
       Digital Literacy : A Path to Progress
      </span>
     </h1>
    </div>

    <p className="mx-5 text-sm">
     As a dedicated NGO working towards the upliftment of rural India , we
     recognize the transformative power of digital literacy.<br></br>
     Our mission is to bridge the digital divide and empower rural communities
     by providing essential digital skills and resources
    </p>
    <div className="my-10 mx-5">
     <h1 className="text-xl font-bold">
      Importance of Digital Literacy in Rural Areas
     </h1>
     <p className="text-sm">
      Access to information : Digital literacy enables rural populations to
      access vital information on agriculture , health, education, and
      government services. Economic opportunities: it open up new avenues for
      employment, entrepreneurship, and financial inclusion through online
      platforms. Social connectivity : it helps bridge social gaps , allowing
      rural residents to connect with the wider world, enhancing social cohesion
      and inclusion. Education Enhancement : Digital tool can significantly
      enhance the quality of education, providing students with access to a
      wealth of online and learning opportunities.
     </p>
    </div>
   </section>

   <img
    loading="lazy"
    src="/images/edu/Rectangle-7.webp"
    alt="children-with-books"
    className="w-full"
   />
   <div className="flex flex-col md:flex-row my-10 items-center gap-4 md:gap-10 mx-3">
    <img
     loading="lazy"
     src="/images/our-role.png"
     alt="our-role-education"
     className="rounded-2xl aspect-square w-72"
    />
    <p className="para">
     Tanmay Development Foundation is dedicated to improving to Rural Education.
     we Focus on to provide quality educationto rural children. A large portion
     of rural students must deal with a lack of access to quality reading
     materials and instruction at an early age(especially preschool).
     <br />
     <br />
     We operate at the grassroots level, implementing programs to address
     educational disparities
    </p>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 my-10 font-montserrat">
    {/* Card 1 */}
    <div className="flex flex-col items-center justify-between tracking-tighter">
     <div className="w-full p-2 mb-4">
      <img
       loading="lazy"
       src="/images/gallery/image7.webp"
       alt="Providing education material"
       className="w-full h-full aspect-square object-cover rounded-2xl shadow-md"
      />
     </div>
     <p className="text-center text-gray-800 font-medium px-4 border-b">
      Providing material for education
     </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center justify-between tracking-tighter">
     <div className="w-full p-2 mb-4">
      <img
       loading="lazy"
       src="/images/gallery/image3.webp"
       alt="Enhancing rural primary education"
       className="w-full h-full aspect-square object-cover rounded-2xl shadow-md"
      />
     </div>
     <p className="text-center text-gray-800 font-medium px-4 border-b">
      Enhancing primary education in Rural Area
     </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center justify-between tracking-tighter">
     <div className="w-full p-2 mb-4">
      <img
       loading="lazy"
       src="/images/gallery/image15.webp"
       alt="Comprehensive curriculum design"
       className="w-full h-full aspect-square object-cover rounded-2xl shadow-md"
      />
     </div>
     <p className="text-center text-gray-700 text-sm md:text-base px-4 border-b">
      We provide a comprehensive curriculum design to foster critical thinking,
      creativity, and lifelong learning skills.
     </p>
    </div>
   </div>

   <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 my-16 font-montserrat mx-3 pb-64">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center group">
     <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-md mb-6">
      <img
       loading="lazy"
       src="/images/gallery/image6.webp"
       alt="Distributing educational supplies"
       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
     </div>
     <p className="text-gray-800 font-medium text-lg px-2 grow">
      Distributed numbers of educational{" "}
      {/* Hidden br on mobile to prevent awkward line breaks */}
      <br className="hidden lg:block" />
      <span className="text-primary font-bold">supplies and resources</span>
     </p>
     {/* Replaces your custom 'underline' class */}
     <div className="h-0.75 w-24 bg-primary rounded-full mt-5"></div>
    </div>

    {/* Card 2 */}
    <div className="relative flex flex-col items-center text-center group">
     <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-md mb-6">
      <img
       loading="lazy"
       src="/images/gallery/image8.webp"
       alt="Students studying in rural areas"
       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
     </div>
     <p className="text-gray-800 font-medium text-lg px-2 grow">
      Improving Literacy rate in Rural Areas
     </p>
     {/* Replaces your custom 'underline1' class */}
     <div className="h-0.75 w-24 bg-primary rounded-full mt-5"></div>
     <img
      loading="lazy"
      src="/images/edu/Vector-4.png"
      alt=""
      className="absolute hidden md:block top-full left-full h-44"
     />
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center group">
     <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-md mb-6">
      <img
       loading="lazy"
       src="/images/edu/children-watching-tv.webp"
       alt="Children watching educational content"
       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
     </div>
     <p className="text-gray-800 font-medium text-lg px-2 grow">
      Empowering Rural India through Digital Literacy
     </p>
     {/* Replaces your custom 'underline2' class */}
     <div className="h-0.75 w-24 bg-primary rounded-full mt-5"></div>
    </div>
    <img
     loading="lazy"
     src="/images/edu/Frame-154.png"
     alt=""
     className="absolute bottom-0 right-0 h-20"
    />
   </div>
  </main>
 );
}
export default Education;
