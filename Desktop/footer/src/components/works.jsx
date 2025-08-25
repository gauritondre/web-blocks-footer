import React from "react";


const Works = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-12">
      
      <h2 className="lg:text-3xl text-2xl  font-bold text-center mb-12 text-white h-[8vh] w- lg:w-">
        Explore Our Recent Works
      </h2>

      <div className="flex flex-col items-center gap-16">

        
          {/* --- Work 1 (Image Left) --- */}
        <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl  p-6 text-white flex flex-col md:flex-row
                     items-center gap-6 transform transition-all duration-500 hover:scale-105  hover:shadow-[0_0_40px_rgba(64,224,208,0.9)] ">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img
              src="/images/brew.webp"
              alt="Healthcare AI Portal"
              // style={{ width: "42vw", height: "44vh" }}
              className="object-contain rounded-lg animate-float w-full max-w-[400px] lg:w-[500px] lg:h-[55vh]"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center items-start px-12">
            <h3 className="text-2xl font-semibold mb-4">Healthcare AI Portal</h3>
            <ul className="text-gray-300 w-60 list-disc list-inside space-y-2">
              <li>Interactive food & beverage menu</li>
              <li>Google Maps integration</li>
              <li>Quick contact buttons (call & email)</li>
              <li>Basic on-page SEO setup</li>
              <li>SSL-secured browsing (HTTPS)</li>
            </ul>
          </div>

        </div>

        {/* --- Work 2 (Image Right) --- */}
        <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl p-6 text-white flex flex-col lg:flex-row-reverse items-center gap-6 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(64,224,208,0.9)]">
          <div className="flex justify-center items-center lg:w-[30vw] lg:h-[60vh]">
            <img
              src="/images/asset.webp"
              alt="Smart Ecommerce App"
              // style={{ width: "32vw", height: "50vh" }}
              className="object-contain rounded-lg animate-float w-[200px] lg:w-[32vw] lg:h-[50vh]"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start px-12">
            <h3 className="text-2xl font-semibold mb-4">Smart Ecommerce App</h3>
            <ul className="text-gray-300 w-65 list-disc list-inside space-y-2">
              <li>Asset Management</li>
              <li>Product Label Design</li>
              <li>Subscription Offers</li>
              <li>Blog Section</li>
              <li>Online Reputation Management</li>
            </ul>
          </div>
        </div>


        {/* --- Work 3 (Image Left) --- */}
        <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl p-6 text-white flex flex-col lg:flex-row items-center gap-6 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(64,224,208,0.9)] ">
          <div className="flex justify-center items-center lg:w-[30vw] lg:h-[60vh]">
            <img
              src="/images/quality.webp"
              alt="AgriTech Dashboard"
              // style={{ width: "42vw", height: "46vh" }}
              className="object-contain rounded-lg animate-floa w-[300px] lg:w-[42vw] lg:h-[46vh]"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">AgriTech Dashboard</h3>
            <ul className="text-gray-300  w-65 list-disc list-inside space-y-2">
              <li>Responsive Design</li>
              <li>Shipping Setup</li>
              <li>Ecommerce Functionality</li>
              <li>Order Tracking System</li>
              <li>Payment Integration</li>
            </ul>
          </div>
        </div>

        {/* --- Work 4 (Image Right) --- */}
        <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl p-6 text-white flex flex-col lg:flex-row-reverse items-center gap-6 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(64,224,208,0.9)] ">
          <div className="flex justify-center items-center lg:w-[30vw] lg:h-[50vh]">
            <img
              src="/images/dynamicUI.webp"
              alt="Dynamic UI"
              className="lg:w-full h-full object-contain w-[200px] rounded-lg animate-float"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start px-18">

            <h3 className="text-2xl font-semibold mb-4">Dynamic UI</h3>
            <ul className="text-gray-300  w-65 list-disc list-inside space-y-2">
              <li>Dynamic UI</li>
              <li>Social Media Management</li>
              <li>E-commerce Setup</li>
              <li>Dashboard Creation</li>
              <li>Payment Integration</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Works;



