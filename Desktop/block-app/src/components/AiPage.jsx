import React from "react";
import { FaFileContract } from "react-icons/fa";
import { FaMagic, FaUserCheck, FaBolt, FaProjectDiagram } from "react-icons/fa";
import {
  RiRobotLine,
  RiUserStarLine,
  RiLightbulbFlashLine,
  RiBarChartBoxLine,
} from "react-icons/ri";
// import GenAiLast from "../../snippits/Service/GenaiLast";
// import Trackrecord from "../../snippits/Trackrecord";
const AiPage = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r h-[100vh] from-orange-100 to-white  flex flex-row items-center justify-between">
        <div className=" lg:py-30 lg:px-35 w-[80vw] ml-[10vw] lg:ml-0 ">
          <h1 className="text-black text-2xl lg:text-4xl mb-8 font-bold ">
            Generative AI Development
          </h1>

          <p className="text-gray-600 mb-3 text-lg max-w-2xl">
            Harness the power of Generative AI to create intelligent, creative,
            and adaptive solutions that transform your business processes. From
            text and image generation to conversational AI and predictive
            models, we help you unlock new possibilities with cutting-edge AI
            technologies.
          </p>

          <button className=" text-black font-medium border-b-1 px-4 py-2 hover:cursor-pointer">
            Start Your AI Journey{" "}
            <span className="animate-growArrow  font-extrabold">→</span>
          </button>
        </div>
        <div></div>
      </section>

      <section className="w-[100vw] bg-white py-18   lg:px-35">
        <div className="text-center w-[80vw]  ml-[10vw] lg:ml-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-5 text-left">
            Why Generative AI?
          </h2>
          <p className="text-gray-600 max-w-4xl text-lg text-left">
            Generative AI is transforming how businesses create, innovate, and
            engage with their customers. From automating complex workflows to
            delivering personalized experiences, this technology empowers
            organizations to scale faster, innovate smarter, and stay ahead in
            the digital era.
          </p>
        </div>

        <div className="flex flex-col mt-[10vh] ml-[10vw] lg:ml-0 lg:flex-row gap-10 ">
          <div className="  lg:mr-5 mb-2 w-[80vw] lg:w-120  p-10 text-center rounded-2xl  shadow-2xl  hover:shadow-amber-200 transition">
            <div className="w-10 h-10 mx-auto bg-orange-100  rounded-full flex items-center justify-center text-2xl  mb-4">
              <RiRobotLine className="text-2xl text-blue-500" />{" "}
            </div>
            <p className="mb-3 text-cyan-900 font-bold ">
              Automated Content Creation
            </p>
            <p className="text-gray-800">
              Generate high-quality text, images, videos, and code efficiently.
            </p>
          </div>

          <div className="  lg:mr-5 mb-2 w-[80vw] lg:w-120  p-10 text-center rounded-2xl  shadow-2xl  hover:shadow-amber-200 transition">
            <div className="w-10 h-10 mx-auto bg-orange-100  rounded-full flex items-center justify-center text-2xl  mb-4">
              <FaUserCheck className="text-2xl text-pink-500" />{" "}
            </div>
            <p className="mb-3 text-cyan-900 font-bold ">
              Personalized Experiences
            </p>
            <p className="text-gray-800">
              Deliver tailored recommendations and customer interactions.
            </p>
          </div>

          <div className="  lg:mr-5 mb-2 w-[80vw] lg:w-120  p-10 text-center rounded-2xl  shadow-2xl  hover:shadow-amber-200 transition">
            <div className="w-10 h-10 mx-auto bg-orange-100  rounded-full flex items-center justify-center text-2xl  mb-4">
              <RiLightbulbFlashLine className="text-2xl text-yellow-500" />{" "}
            </div>
            <p className="mb-3 text-cyan-900 font-bold ">Faster Innovation</p>
            <p className="text-gray-800">
              Rapidly prototype new ideas using AI-driven creativity.
            </p>
          </div>

          <div className=" lg:mr-5 mb-2 w-[80vw] lg:w-120  p-10 text-center rounded-2xl  shadow-2xl  hover:shadow-amber-200 transition">
            <div className="w-10 h-10 mx-auto bg-orange-100  rounded-full flex items-center justify-center text-2xl  mb-4">
              <FaProjectDiagram className="text-2xl text-green-500" />{" "}
            </div>
            <p className="mb-3 text-cyan-900 font-bold ">Scalability</p>
            <p className="text-gray-800">
              Easily integrate AI solutions into your existing workflows and
              platforms.
            </p>
          </div>
        </div>
      </section>

      <section className=" lg:bg-gray-50 lg:mt-12 ml-10 lg:ml-[0vw] w-[80vw] lg:w-full  lg:py-18 lg:px-35">
        <p className="text-orange-400 font-medium lg:mb-2">Services</p>
        <h1 className="font-bold mb-4 text-xl lg:text-3xl text-black">
          Our Generative AI Services
        </h1>
        <p className="max-w-5xl  text-gray-800 mb-15">
          Empower your business with next-generation AI solutions that go beyond
          automation. From intelligent content creation to dynamic image and
          video generation, we deliver custom-built AI systems that drive
          innovation, improve efficiency, and transform your workflows. Our
          services are designed to unlock creativity and scalability for your
          organization.
        </p>

        <div className="grid lg:grid-cols-2 items-center gap-10 ">
          <div className=" ">
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4 ">
              Custom AI Model Development{" "}
            </p>
            <p className="text-gray-600 ">
              We develop domain-specific generative models customized for your
              business needs. Whether it's for text, images, or code, our models
              deliver high accuracy, scalability, and optimal performance. We
              leverage the latest frameworks to ensure your AI solution is
              future-proof and competitive.
            </p>
          </div>

          <div className="">
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4">
              Natural Language Processing (NLP) Solutions
            </p>
            <p className="text-gray-600">
              Our NLP services power human-like conversations, summarization,
              sentiment analysis, and more. From intelligent chatbots to
              automated report generation, we ensure your business communicates
              effectively with customers and processes data faster than ever.
            </p>
          </div>

          <div>
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4">
              {" "}
              Image & Video Generation
            </p>
            <p className="text-gray-600">
              Create stunning visuals, marketing creatives, product mockups, and
              even videos using GANs and diffusion models. Our AI-driven
              solutions enable brands to cut design costs, speed up creative
              workflows, and maintain originality
            </p>
          </div>

          <div>
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4">
              AI-Powered Automation
            </p>
            <p className="text-gray-600">
              Automate repetitive tasks like content creation, document
              processing, and data analysis with AI-driven automation. Our
              solutions help businesses increase efficiency, reduce operational
              costs, and free up human resources for strategic tasks.
            </p>
          </div>

          <div>
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4">
              Generative AI Consulting
            </p>
            <p className="text-gray-600">
              We provide expert consulting to identify the right AI use cases,
              choose the best tools, and design an implementation roadmap. Our
              goal is to help businesses harness AI responsibly and effectively,
              ensuring measurable ROI and long-term success.
            </p>
          </div>

          <div>
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4">
              Voice & Speech Generation Solutions (NEW)
            </p>
            <p className="text-gray-600">
              Enhance customer engagement and accessibility with AI-powered
              voice synthesis and speech generation. From voice assistants and
              audio content creation to personalized voice experiences, our
              solutions deliver natural, expressive, and lifelike voices
              tailored to your brand.
            </p>
          </div>
        </div>
      </section>
      {/* <Trackrecord /> */}

      <section className="lg:w-full w-[80vw] m-10 lg:m-[0vw] bg-white   lg:py-18  lg:px-35">
        <p className="text-orange-400  font-medium mb-2">Use Cases</p>
        <div className="">
          <h1 className="text-cyan-900 font-bold text-xl lg:text-3xl mb-4">
            {" "}
            Generative-AI Use Cases Across Industries
          </h1>
          <p className="mb-10 text-gray-600">
            Generative AI is revolutionizing multiple sectors by automating
            creative processes, enhancing personalization, and improving
            efficiency. From marketing campaigns to game development, its
            applications unlock limitless possibilities for businesses to
            innovate and scale.
          </p>
        </div>

        <div className="grid grid-rows-1 gap-10">
          <div className="shadow-lg h-40vw p-10 shadow-gray-200 hover:shadow-amber-200 rounded-2xl">
            <h1 className=" mb-4 lg:mb-2 font-semibold">
              {" "}
              Marketing: Automated Ad Copy and Creative Generation
            </h1>
            <p className="text-gray-600">
              Generative AI enables businesses to produce engaging ad copies,
              social media posts, and visuals within seconds. This helps brands
              maintain consistency and scale marketing campaigns without
              compromising quality.
            </p>
          </div>

          <div className="shadow-lg h-40vw p-10 shadow-gray-200 hover:shadow-amber-200 rounded-2xl">
            <h1 className="mb-4 lg:mb-2 font-semibold">
              E-commerce: Personalized Product Descriptions and Recommendations
            </h1>
            <p className="text-gray-600">
              AI can generate unique, SEO-optimized product descriptions and
              create tailored recommendations for each customer, improving
              conversion rates and user experience.
            </p>
          </div>

          <div className="shadow-lg h-40vw p-10 shadow-gray-200 hover:shadow-amber-200 rounded-2xl">
            <h1 className="mb-4 lg:mb-2 font-semibold">
              Entertainment: AI-Generated Music, Art, and Scripts
            </h1>
            <p className="text-gray-600">
              Generative AI is transforming entertainment by creating original
              music tracks, digital art, and even scripts for movies or shows,
              allowing creators to produce innovative content faster and
              cost-effectively.
            </p>
          </div>

          <div className="shadow-lg h-40vw p-10 shadow-gray-200 hover:shadow-amber-200 rounded-2xl">
            <h1 className="mb-4 lg:mb-2 font-semibold">
              Healthcare: Synthetic Data Generation for Research
            </h1>
            <p className="text-gray-600">
              AI generates synthetic medical data to train models without
              compromising patient privacy, helping healthcare providers and
              researchers develop better treatments and predictive models.
            </p>
          </div>

          <div className="shadow-lg h-40vw p-10 shadow-gray-200 hover:shadow-amber-200 rounded-2xl">
            <h1 className="mb-4 lg:mb-2 font-semibold">
              Gaming: AI-Powered Character and Environment Design
            </h1>
            <p className="text-gray-600">
              AI can design lifelike characters, immersive environments, and
              dynamic storylines, making game development faster, more creative,
              and highly interactive.
            </p>
          </div>
        </div>
      </section>
      {/* <GenAiLast /> */}
    </div>
  );
};

export default AiPage;