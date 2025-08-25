import React from "react";
import Blocks from "../../public/images/bg5.jpg"


export default function AboutSection() {
  return (
    
    <div className="bg-white text-white overflow-x-hidden ">
    <div className=" animated-gradient rounded-b-lg  rounded-r-full max-w-8xl mx-auto  py-18 ml-0">
        <section className="flex flex-col md:flex-row items-center justify-between ml-59 px-15 py-14 max-w-7xl mx-auto bg-white rounded-3xl rounded-br-none ">
      
      <div className=" md:w-[60%] space-y-8 text-center md:text-left ml-10">
        <button className="text-blue-400 border border-blue-500 px-4 py-1 rounded-full font-medium">About Us </button>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800"> Web Blocks </h1>
        <p className="text-gray-600 text-lg leading-relaxed ">
          Your trusted partner for next-level digital transformation. 
          At Web-Blocks, we craft powerful web and mobile solutions, integrate blockchain for security, 
          and harness the cloud for scalability.
          Our goal is simple: to turn your vision into a high-performing, future-ready reality.
        </p>
        <button className="bg-blue-400 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-50 hover:text-blue-400 hover:cursor-pointer  transition duration-300">
          Let’s discuss →
        </button>
      </div>


      <div className="md:w-[40%]  flex justify-center mt-10 md:mt-0">
        <img
          src="/images/web-blocks-logo.jpg"
          alt="Web-Blocks-Logo"
          className="w-190 h-110 md:w-96 "
        />
      </div>
      
    </section>

    </div>

    {/* track record */}
    <section className="bg-[#0b1120] text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-blue-300 font-medium mb-4">Our Track Record</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Hundreds of Businesses </h2>
          <p className="text-gray-300 text-lg mb-12">
            Numbers that speak volumes. Our stats reflect your potential for success. </p>

          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <p className="text-3xl font-bold ">4+</p>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-gray-400">Successful Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">99%</p>
              <p className="text-gray-400">Client Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-gray-400">Clients Served</p>
            </div>
          </div>
        </div>
      </section>


      <section className="relative bg-gray-900 text-white py-20 px-6 md:px-16 mt-16">

        <div className="absolute inset-0">
            <img
            src={Blocks}
            alt="Background"
            className="w-full h-full object-cover opacity-40"
            />
        </div>

        
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

       
        <div className="relative max-w-5xl mx-auto text-center md:text-left z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Story<span className="text-blue-400">.</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
            Founded in 2021, <span className="font-semibold">Web-Blocks</span> started as a software 
            development partner for businesses across multiple industries. With a passion for technology 
            and innovation, we have helped enterprises embrace digital transformation through custom 
            solutions, blockchain, and cloud integration.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
            Today, Web-Blocks serves clients globally, delivering cutting-edge web and mobile applications, 
            ensuring security, scalability, and performance in every solution we build.
            </p>

            <a href="#"
            className="inline-block bg-blue-500/60 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            READ MORE
            </a>
        </div>
      </section>

        {/* values */}
      <section id="values" className="relative wavy-bg text-gray-700 px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row justify-center gap-6 py-12 sm:py-16">

        <div className="max-w-7xl mx-auto mb-8 sm:mb-12 px-4 sm:px-7 text-center lg:text-left">

            <h3 className="text-orange-400 font-semibold text-lg mb-2">Values</h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4 sm:mb-6">Our Values:</h2>
            <p className="text-base sm:text-lg max-w-2xl text-gray-600">

            At WebBlocks, we focus on - innovation, <br/>performance, and trust. We set new <br/>standards in web
            development while building<br/> honest relationships that ensure customer success.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-9">

            {/* Value Card */}
            <div className="bg-gray-400/10 rounded-2xl p-6 h-80 w-100 text-center shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-105">

            <div className="w-14 h-14 mx-auto m-2 bg-orange-400 flex items-center justify-center rounded-full">
                <i className="fas fa-users text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-2">People First</h3>
            <p className="text-gray-700 text-sm">
                It is our strong belief that strength lies in our people. We are head bound towards creating an environment that puts people first and relationship-building based on mutual respect and trust. 
                All of our decisions are based on the benefits of our people and enhancing their experiences.
            </p>
            </div>

            
            <div className="bg-gray-400/10 rounded-2xl p-6 h-80 w-100 text-center shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-105">
            <div className="w-14 h-14 mx-auto mb-4 bg-orange-400 flex items-center justify-center rounded-full">
                <i className="fas fa-lightbulb text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-2">Innovation</h3>
            <p className="text-gray-700 text-sm">
                At Angular Minds, we unite commitment with excellence. We believe that our continuous effort of cutting-edge solutions and superior performance is achieved due to our ongoing thirst for knowledge and adaptability. 
                Our team is set to push boundaries, create groundbreaking solutions, and build new industry standards. All of this while supporting an environment that encourages skills, curiosity, and professional growth.
            </p>
            </div>


            <div className="bg-gray-400/10 rounded-2xl p-6 h-80 w-100 text-center shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-105">
            <div className="w-14 h-14 mx-auto mb-4 bg-orange-400 flex items-center justify-center rounded-full">
                <i className="fas fa-handshake text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-2">Customer Success</h3>
            <p className="text-gray-700 text-sm">
                Your success is our priority.We understand that the customer's success is our success. Our People First ideology extends to our customers too. We are committed to understanding their unique needs and expectations, developing solutions that will add success to them, and maintaining a long-term relationship with them.
            </p>
            </div>

            <div className="bg-gray-400/10 rounded-2xl p-6 h-80 w-100 text-center shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-105">
            <div className="w-14 h-14 mx-auto mb-4 bg-orange-400 flex items-center justify-center rounded-full">
                <i className="fas fa-shield-alt text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-2">Integrity</h3>
            <p className="text-gray-700 text-sm">
                We boost the high standards of integrity in all our actions. Our motto is transparency and it is te key to successful communication with both our customers and the employees, motivating a relationship based on trust and understanding.
            </p>
            </div>
        </div>
        </section>



    {/* explore */}

      <section className="py-16 bg-gray-100">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Explore Web-Blocks</h2>
            <p className="text-gray-600 mt-4">Driving innovation and trust with every solution we deliver.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div>
                <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white">
                <img
                    src="/images/bg1.jpg"
                    alt="Home"
                    className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-130"/>
                </div>

                <div>
                    <a href="#"
                        className="inline-block text-blue-900 font-semibold py-3 px-4 rounded-lg  transition duration-300">
                        Home  </a>
                </div>
            </div>

            {/* Card 2 */}
            <div>
                <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white">
                <img
                    src="/images/services.webp"
                    alt="sevices"
                    className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-130"/>
                </div>

                <div>
                     <a href="#"
                        className="inline-block  text-blue-900  font-semibold py-3 px-4 rounded-lg  transition  duration-300 ">
                        Services  </a>
                </div>
            </div>
            
            {/* Card 3 */}
            <div>
                <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white">
                <img
                    src="/images/bg4.jpeg"
                    alt="Works"
                    className="w-full h-80  object-cover transform transition-transform duration-500 group-hover:scale-130"/>
                </div>

                <div>
                     <a href="#"
                        className="inline-block  text-blue-900 font-semibold py-3 px-4 rounded-lg transition duration-300">
                        Works  </a>
                </div>
            </div>
            
        </div>
        </section>

        <section className="w-full py-30 bg-gray-100 flex items-center justify-center">
            <h1
                className="text-center font-extrabold text-4xl sm:text-5xl md:text-8xl lg:text-8xl uppercase
                        text-transparent bg-clip-text bg-cover bg-center
                        bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1440&q=80')]"
            >
                Great Place To <br /> Work
            </h1>
        </section>

        <section className="bg-gray-900 border-b border-white text-white py-19  h-[400px]">
            <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 gap-12">
                
                {/* Left Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-medium font-serif mb-6">
                    Transformation <br /> starts here
                </h2>
                <p className="text-lg text-gray-300 mb-6">Reimagine your future.</p>
                <a
                    href="#"
                    className="inline-block bg-blue-500 border border-gray-400 text-white py-3 px-8 rounded-full hover:bg-white hover:text-blue-500 transition transform hover:scale-110"
                >
                    Connect with us
                </a>
                </div>

                {/* Divider */}
                <div className="hidden md:block h-60 w-px bg-gray-300"></div>

                {/* Right Section */}
                <div className="w-full md:w-1/2  flex flex-col items-center md:items-start gap-4 md:pl-8">
                <h3 className="uppercase text-xl font-semibold mb-4">Find out more</h3>
                <a
                    href="#"
                    className="w-full md:w-auto text-center border border-blue-400 text-white py-2 px-6 rounded-full hover:bg-white hover:text-blue-500 transition"
                >
                    What we do →
                </a>
                <a
                    href="#"
                    className="w-full md:w-auto text-center border border-blue-400 text-white py-2 px-6 rounded-full hover:bg-white hover:text-blue-500 transition"
                >
                    The Web-Blocks Way →
                </a>
                </div>
            </div>
            </section>






    </div>



    
  );
}
