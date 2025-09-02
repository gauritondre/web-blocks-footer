import React from "react";
import { FaFileContract } from "react-icons/fa";
// import BlockchainLast from "../../snippits/Service/BlockchainLast";
// import Trackrecord from "../../snippits/Trackrecord";
import {
  FaNetworkWired,
  FaEye,
  FaLock,
  FaCoins,
  FaBolt,
  FaDatabase,
} from "react-icons/fa";
import {
  RiNodeTree,
  RiShieldKeyholeLine,
  RiFileShieldLine,
} from "react-icons/ri";

const Blockchainpage = () => {
  return (
    <div>

      <section className="relative h-[100vh] bg-gradient-to-r from-orange-100 to-white   flex flex-row items-center justify-between">
        <div className=" lg:py-30 lg:px-35 w-[80vw] ml-[10vw] lg:ml-0 ">
          <h1 className="text-black text-xl lg:text-3xl mb-2 font-bold ">
            Revolutionize Your Business with -<br /> Blockchain Integration
          </h1>

          <p className="text-gray-600 mb-14  ">
            Secure, Transparent, and Decentralized Solutions for the Future.
          </p>

          <p className="text-gray-800 lg:mb-3 mb-4 max-w-2xl">
            Empower your business with cutting-edge blockchain technology. From
            smart contracts to decentralized applications, we help you innovate
            faster, reduce costs, and build trust through transparency.
          </p>

          <button className=" text-black font-medium border-b-1 px-4 py-2 hover:cursor-pointer hover:text-cyan-900">
            Start Your Blockchain Journey{" "}
            <span className="animate-growArrow  font-extrabold">→</span>
          </button>
        </div>
        <div></div>
      </section>

      <section className="lg:w-full   bg-white lg:py-18 lg:px-35">
        <div className="text-center  w-[80vw] ml-10 lg:ml-0 ">
          <h2 className="lg:text-3xl text-xl font-bold text-gray-800 mt-8 lg:mt-0 mb-5 text-left">
            Why Blockchain ?
          </h2>
          <p className="text-gray-600 max-w-4xl text-left">
            Blockchain is transforming the way businesses operate by providing a
            secure, transparent, and efficient way to manage data and
            transactions. Discover why adopting blockchain can give your
            business a competitive edge.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 px-5 lg:px-16 ">
          <div className=" m-6 mr-5 mb-2  p-14 text-center rounded-2xl  shadow-xl  hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto bg-orange-100  rounded-full flex items-center justify-center text-2xl  mb-4">
              <RiNodeTree className="text-4xl text-blue-500" />{" "}
            </div>
            <p className="mb-5 text-cyan-900 font-bold ">
              Decentralized Control
            </p>
            <p className="text-gray-800">
              No single authority controls the network. Decisions are
              distributed, reducing risk of manipulation and single points of
              failure.
            </p>
          </div>

          <div className=" m-6 mr-5 mb-2  p-14 text-center rounded-2xl  shadow-xl  hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto bg-orange-100  rounded-full flex items-center justify-center text-2xl  mb-4">
              <FaEye className="text-4xl text-green-500" />{" "}
            </div>
            <p className="mb-5 text-cyan-900 font-bold ">
              Transparency & Trust
            </p>
            <p className="text-gray-800">
              Blockchain creates a tamper-proof record of all transactions,
              ensuring transparency and building trust with clients and
              partners.
            </p>
          </div>

          <div className=" m-6 mr-5 mb-2  p-14 text-center rounded-2xl  shadow-xl  hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto bg-orange-100  rounded-full flex items-center justify-center text-2xl  mb-4">
              <RiShieldKeyholeLine className="text-4xl text-red-500" />{" "}
            </div>
            <p className="mb-5 text-cyan-900 font-bold ">Enhanced Security</p>
            <p className="text-gray-800">
              Advanced cryptography and consensus mechanisms protect data from
              hacks and unauthorized access.
            </p>
          </div>

          <div className=" m-6 mr-5 mb-2  p-14 text-center rounded-2xl  shadow-xl  hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto bg-orange-100  rounded-full flex items-center justify-center text-2xl  mb-4">
              <FaCoins className="text-4xl text-yellow-500" />{" "}
            </div>
            <p className="mb-5 text-cyan-900 font-bold ">Cost Efficiency</p>
            <p className="text-gray-800">
              By removing intermediaries and automating processes, blockchain
              reduces operational costs significantly.
            </p>
          </div>

          <div className=" m-6 mr-5 mb-2  p-14 text-center rounded-2xl  shadow-xl  hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto bg-orange-100  rounded-full flex items-center justify-center text-2xl  mb-4">
              <FaBolt className="text-4xl text-purple-500" />{" "}
            </div>
            <p className="mb-5 text-cyan-900 font-bold ">Faster Transactions</p>
            <p className="text-gray-800">
              Real-time settlement and peer-to-peer transfers accelerate
              business processes globally.
            </p>
          </div>

          <div className=" m-6 mr-5 mb-2  p-14 text-center rounded-2xl  shadow-xl  hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto bg-orange-100  rounded-full flex items-center justify-center text-2xl  mb-4">
              <RiFileShieldLine className="text-4xl text-pink-500" />{" "}
            </div>
            <p className="mb-5 text-cyan-900 font-bold ">Immutable Record</p>
            <p className="text-gray-800">
              Once data is recorded on the blockchain, it cannot be altered or
              deleted, ensuring data integrity and reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="lg:w-full w-[80vw] ml-10 lg:ml-0 lg:bg-gray-50 mt-25 lg:py-12  lg:px-35">
        <p className="text-orange-400 font-semibold">Services</p>
        <h1 className="font-bold mb-4 text-xl lg:text-3xl text-black">
          Our Blockchain Services
        </h1>
        <p className="max-w-5xl text-gray-800 mb-15">
          From smart contracts to DApps, our blockchain services enable
          organizations to stay ahead of the curve in a rapidly evolving digital
          landscape. We specialize in delivering secure, scalable, and
          customized blockchain solutions that drive efficiency and innovation.
          Whether you need consulting, development, or full-scale integration,
          our team ensures seamless implementation tailored to your business
          goals.
        </p>

        <div className="grid lg:grid-cols-2 items-center gap-20 ">
          <div className=" ">
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4">
              Smart Contract Development{" "}
            </p>
            <p className="text-gray-600">
              We create secure, self-executing smart contracts that automate
              business processes without intermediaries. Our solutions minimize
              risks, ensure accuracy, and provide trustless execution for
              transactions. From development to deployment, we guarantee robust
              and error-free contracts.
            </p>
          </div>

          <div className="">
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4">
              Decentralized Apps (DApps)
            </p>
            <p className="text-gray-600">
              We build high-performance decentralized applications tailored to
              your industry. Our DApps offer enhanced transparency, user
              control, and scalability, ensuring your business is future-ready.
              Whether finance, supply chain, or gaming, we deliver powerful
              decentralized solutions.
            </p>
          </div>

          <div>
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4">
              Private & Public Blockchain Setup
            </p>
            <p className="text-gray-600">
              Get expert assistance in setting up private or public blockchains
              to meet your specific business requirements. We handle everything
              from architecture design to deployment, ensuring a secure and
              reliable infrastructure for your <br />
              operations.
            </p>
          </div>

          <div>
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4">
              Blockchain Consulting
            </p>
            <p className="text-gray-600">
              Our consulting services help businesses identify blockchain
              opportunities and create actionable strategies. We provide
              insights on the best platforms, technologies, and use cases to
              maximize ROI and ensure a smooth adoption process.
            </p>
          </div>

          <div>
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4">
              Token Development (NFT, Utility Tokens)
            </p>
            <p className="text-gray-600">
              Launch custom tokens including NFTs, utility tokens, and security
              tokens with our development services. We design tokenomics, ensure
              compliance, and provide complete lifecycle support to help you
              enter the token economy with <br /> confidence.
            </p>
          </div>

          <div>
            <p className="lg:text-xl font-semibold mb-5 border-b-2 pb-4">
              Supply Chain Blockchain Integration
            </p>
            <p className="text-gray-600">
              Transform your supply chain with blockchain-powered solutions for
              real-time tracking and enhanced transparency. Our integration
              improves trust, reduces fraud, and ensures efficiency by providing
              an immutable record of goods and transactions.
            </p>
          </div>
        </div>
      </section>

      <section className="lg:w-full w-[80vw] ml-10 lg:ml-0 mt-15 lg:mt-0 bg-white  lg:py-18  lg:px-35">
        <div className="flex lg:flex-row flex-col text-gray-600 lg:h-[80vh]  scrollbar-hide">
          <div className=" lg:md:w-[30%]  ">
            <h1 className="lg:text-3xl text-xl font-bold text-black mb-5 ">
              How We Work to Deliver Excellence
            </h1>
            <p className="">
              We follow a structured, transparent, and client-focused approach
              to ensure every project is a success. From initial consultation to
              final deployment and ongoing maintenance, our process is designed
              for efficiency and quality. Each step is carefully planned to
              provide you with secure, scalable, and future-ready blockchain
              solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 w-[80vw] lg:md:w-[70%] lg:px-20 lg:overflow-y-auto maxHeight: [100%]">
            <div className=" lg:p-5 lg:pt-0">
              <h1 className="mb-3 mt-5 lg:mt-0 font-bold lg:text-xl">
                <span className="text-orange-400 ">1.</span> Consultation
              </h1>
              <div className="">
                <p className="pb-3">
                  {" "}
                  We start with a detailed consultation to analyze your business
                  objectives, challenges, and project goals. This helps us
                  understand where blockchain can bring the most value to your
                  operations.
                </p>
                <p>
                  In this phase, we define the scope, outline deliverables, and
                  create a clear roadmap that aligns with your business strategy
                  and long-term vision.
                </p>
              </div>
            </div>

            <div className=" lg:p-5 lg:pt-0">
              <h1 className="mb-3 mt-5 lg:mt-0 font-bold lg:text-xl">
                <span className="text-orange-400">2.</span> Architecture &
                Design
              </h1>
              <p className="pb-3">
                Our experts design a scalable and secure blockchain architecture
                tailored to your needs. We ensure the right technology stack,
                network structure, and design principles for optimal
                performance.
              </p>
              <p>
                We also create a user-focused design that ensures seamless
                interaction, while adhering to best practices for security,
                scalability, and efficiency.
              </p>
            </div>

            <div className=" lg:p-5 lg:pt-0">
              <h1 className="mb-3 mt-5 lg:mt-0 font-bold lg:text-xl">
                <span className="text-orange-400">3.</span> Development
              </h1>
              <p className="pb-3">
                We develop robust blockchain solutions using best practices and
                secure coding standards. From smart contracts to decentralized
                apps, we ensure functionality, scalability, and seamless
                integration.
              </p>
              <p>
                We focus on functionality, scalability, and seamless integration
                with your existing systems, ensuring your solution is
                future-ready and easy to adopt.
              </p>
            </div>

            <div className=" lg:p-5 lg:pt-0">
              <h1 className="mb-3 mt-5 lg:mt-0 font-bold lg:text-xl">
                <span className="text-orange-400">4.</span> Testing & Deployment
              </h1>
              <p className="pb-3">
                Every solution undergoes rigorous testing for security,
                performance, and reliability. Once validated, we deploy the
                solution on the desired network with minimal downtime and
                maximum efficiency.
              </p>
              <p>
                Once validated, we deploy the solution with minimal downtime,
                guaranteeing a smooth transition from development to production
                without disrupting your business operations.
              </p>
            </div>

            <div className=" lg:p-5 lg:pt-0">
              <h1 className="mb-3 mt-5 lg:mt-0 font-bold lg:text-xl">
                <span className="text-orange-400">5.</span> Maintenance
              </h1>
              <p className="pb-3">
                Post-deployment, we provide ongoing support and maintenance to
                ensure smooth operations. This includes updates, security
                patches, and performance optimization to keep your system
                future-ready.
              </p>
              <p>
                We also provide ongoing optimization, scaling options, and
                feature enhancements to keep your blockchain solution aligned
                with evolving business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Trackrecord /> */}

      <section className="lg:w-full w-[80vw] ml-10 lg:ml-0  bg-white   lg:py-18  lg:px-35">
        <div className="mt-20 lg:mt-0">
          <h1 className="text-black font-bold text-xl lg:text-3xl mb-4">
            {" "}
            Blockchain Use Cases Across Industries
          </h1>
          <p className="mb-10 text-gray-600">
            Blockchain technology is transforming industries by improving
            security, transparency, and efficiency. Here are some major sectors
            where blockchain delivers real value and drives innovation.
          </p>
        </div>

        <div className="grid grid-rows-1 gap-10">
          <div className="shadow-lg p-5 lg:h-35 lg:p-10 shadow-gray-200 hover:shadow-amber-200 rounded-2xl">
            <h1 className="mb-2 font-semibold">
              {" "}
              Finance - Secure Transactions 💰
            </h1>
            <p className="text-gray-600">
              Blockchain ensures fast, transparent, and tamper-proof
              transactions in the financial sector. It eliminates
              intermediaries, reduces costs, and enhances security against
              fraud. Smart contracts enable automated, trustless operations in
              banking and trading.
            </p>
          </div>

          <div className="shadow-lg p-5 lg:h-35 lg:p-10 shadow-gray-200 hover:shadow-amber-200 rounded-2xl">
            <h1 className="mb-2 font-semibold">
              Healthcare - Patient Data Security 🏥
            </h1>
            <p className="text-gray-600">
              Blockchain safeguards sensitive medical records with strong
              encryption and decentralization. It enables secure data sharing
              among hospitals, labs, and patients without compromising privacy.
              This ensures better healthcare outcomes through trust and
              transparency.
            </p>
          </div>

          <div className="shadow-lg p-5 lg:h-35 lg:p-10 shadow-gray-200 hover:shadow-amber-200 rounded-2xl">
            <h1 className="mb-2 font-semibold">
              Supply Chain - Transparency & Traceability 📦
            </h1>
            <p className="text-gray-600">
              With blockchain, every step in the supply chain is recorded on an
              immutable ledger. Businesses can track goods from origin to
              destination, ensuring authenticity and compliance. This reduces
              fraud, enhances trust, and improves overall efficiency.
            </p>
          </div>

          <div className="shadow-lg p-5 lg:h-35 lg:p-10 shadow-gray-200 hover:shadow-amber-200 rounded-2xl">
            <h1 className="mb-2 font-semibold">
              Real Estate - Smart Contracts 🏠
            </h1>
            <p className="text-gray-600">
              Smart contracts simplify real estate transactions by automating
              agreements between parties. This reduces paperwork, eliminates
              middlemen, and ensures faster property transfers. Blockchain
              guarantees transparency and prevents disputes during property
              deals.
            </p>
          </div>

          <div className="shadow-lg p-5 lg:h-35 lg:p-10 shadow-gray-200 hover:shadow-amber-200 rounded-2xl">
            <h1 className="mb-2 font-semibold">
              Voting Systems - Tamper-Proof Elections 🗳
            </h1>
            <p className="text-gray-600">
              Blockchain brings transparency and security to voting processes,
              making them tamper-proof. It allows verifiable, decentralized, and
              anonymous voting to prevent fraud. This ensures fair and
              trustworthy elections for governments and organizations.
            </p>
          </div>
        </div>
      </section>
      {/* <BlockchainLast /> */}
    </div>
  );
};

export default Blockchainpage;