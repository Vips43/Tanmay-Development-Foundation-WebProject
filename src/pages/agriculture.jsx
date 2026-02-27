import React, { useEffect, useState } from "react";
import { agriculturalProjects } from "../data/data.js";

function Agriculture() {
 const [projects, setProjects] = useState([]);
 useEffect(() => {
  setProjects(agriculturalProjects);
 }, []);

 const CommunityHandle = () => {
  window.open("https://chat.whatsapp.com/LbSH4XC8PJC8IcPZwLy1VS", "_blank");
 };

 return (
  <main className="w-full bg-[#ece5f0] py-16">
   <header className="px-3 md:px-7">
    <div className="border-8 border-primary w-sm md:w-xl rounded-sm "></div>
    <h1 className="text-3xl font-bold font-montserrat">
     Sustainable Agriculture
    </h1>
   </header>

   <main className="px-3 md:px-7 space-y-10">
    <img
     src="images/agriculture/har.webp"
     alt="Farmers working in a field during sunset with green crops in the foreground"
     className="rounded-2xl shadow-[12px_20px_4px_0px_#00000040] my-5"
    />

    <section className="mt-10">
     <h2 className="text-lg font-bold my-5">
      What is sustainable agriculture?
     </h2>
     <p className="mb-4">
      Sustainable agriculture is farming in ways that meet society's food and
      textile needs without compromising the ability of current or future
      generations to meet their own needs. It aims to integrate ecological
      processes, reduce reliance on non-renewable inputs, and promote
      self-reliance among farmers.
     </p>

     <h2 className="text-lg font-bold my-5">
      How does sustainable agriculture help our farmers?
     </h2>
     <div className="space-y-4">
      <p>
       <strong>1.</strong> Sustainable agriculture prioritizes maintaining and
       improving soil health. This involves practices such as crop rotation,
       cover cropping, reduced tillage, and organic matter additions to enhance
       soil fertility, structure, and water retention.
      </p>
      <p>
       <strong>2.</strong> Efficient water use is crucial in sustainable
       agriculture. Techniques like drip irrigation, rainwater harvesting, and
       using drought-resistant crops help conserve water resources.
      </p>
     </div>
    </section>

    <section className="mt-14 grid gap-5 place-items-center">
     <h1 className="bg-primary text-bgClr w-fit text-2xl font-semibold px-4 py-2 rounded-lg">
      Our work
     </h1>
     <div className="grid grid-cols-3 gap-2">
      <img
       src="images/agriculture/manInField1.webp"
       className="aspect-square object-cover object-bottom-left"
       alt="manInField"
      />
      <img
       src="images/agriculture/manInField.webp"
       className="aspect-square object-cover object-bottom-left"
       alt="manInField"
      />
      <img
       src="images/agriculture/field-image.webp"
       className="aspect-square object-cover object-bottom-right"
       alt="peopleInField"
      />
     </div>
    </section>

    {/* Existing CSS-dependent sections below */}
    <section className="mt-14 font-montserrat space-y-10 md:space-y-16">
     <h2 className="font-semibold text-2xl bg-neutral-300 py-3 px-5 rounded-md w-fit">
      Featured Projects
     </h2>

     <div className="flex flex-col md:flex-row gap-10 md:gap-8 items-stretch">
      {projects?.map((project, index) => (
       <React.Fragment key={index}>
        {/* The Project Card */}
        <div className="flex-1 flex flex-col gap-4">
         <h6 className="text-xl">
          <strong>Project {index + 1}</strong>: {project?.name}
         </h6>

         <p className="text-gray-700 grow">{project?.desc}</p>

         <img
          src={project?.img}
          alt={project?.name}
          className="w-full h-64 object-cover rounded-xl shadow-md"
         />
        </div>

        {index !== projects.length - 1 && (
         <>
          {/* Desktop Vertical Divider */}
          <div className="hidden md:block w-px bg-neutral-300 self-stretch"></div>
          {/* Mobile Horizontal Divider */}
          <div className="md:hidden h-px w-full bg-neutral-200"></div>
         </>
        )}
       </React.Fragment>
      ))}
     </div>
    </section>

    <section className="font-montserrat space-y-10 mt-20 pb-32">
     <h2 className="text-3xl font-semibold ">
      Our Sustainable Farming Solutions
     </h2>
     <p>
      Through our sustainable farming solutions, we were able to achieve more
      crop yield and minimize the negative environmental impacts of agriculture,
      such as soil erosion, water pollution, habitat destruction, and greenhouse
      gas emissions.
     </p>
     <img
      className="rounded-2xl aspect-video w-full"
      src="/images/tractor-2.webp"
      srcSet="
    /images/agriculture/tractor-1.webp 400w,
    /images/agriculture/tractor-2.webp 800w,
  "
      sizes="(max-width: 640px) 90vw,
         (max-width: 1024px) 50vw,
         800px"
      alt="Tractor working in a large green field"
      loading="lazy"
     />

     <div className="mt-14 space-y-20">
      <h1 className="leading-9 text-4xl font-semibold">
       Join our Farming <br /> Community Today
      </h1>
      <div className="w-full max-w-xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
       <input
        type="email"
        placeholder="Type your email address"
        className="w-full sm:flex-1 px-5 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
       />
       <button
        onClick={CommunityHandle}
        className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 transition px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
       >
        Join Now
        <span className="transition-transform group-hover:translate-x-1">
         →
        </span>
       </button>
      </div>
     </div>
    </section>
   </main>
  </main>
 );
}

export default Agriculture;
