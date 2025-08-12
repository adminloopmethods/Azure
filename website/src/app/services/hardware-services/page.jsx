import FeaturesCards from "../common/FeaturesCards";
import SearvicesHeader from "../common/ServicesHeader";

const featuresData = [
  {
    title: "Reliable Hardware Assistance",
    description: "From diagnostics to repairs, we ensure your Apple and IT hardware performs at its best.",
    bgColor: "bg-zinc-100",
    textColor: "text-black",
  },
  {
    title: "Robust Network Solutions",
    description: "Design, installation, and support for secure and high-performance networks—powered by trusted vendors like CISCO.",
    bgColor: "bg-zinc-100",
    textColor: "text-black",
  },
  {
    title: "Proactive Maintenance",
    description: "Prevent downtime with regular health checks, updates, and troubleshooting for your hardware and network systems.",
    bgColor: "bg-black",
    textColor: "text-white",
  },
];


export default function HardwareServicePage(){
    return (
        <div className="flex overflow-hidden flex-col bg-white">
          <SearvicesHeader>Hardware</SearvicesHeader>
    
          <div className="w-full px-4 md:px-12 lg:px-24 py-8 my-20">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* LEFT: Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-5xl font-extralight text-gray-800">
                  Your <span className="font-semibold text-black">Hardware</span> and {" "}
                  <span className="font-semibold text-black">Network Support</span> Services
                </h2>
                <p className="text-gray-600 mt-4 font-extralight max-w-2xl text-xl">
                  Reliable support for Apple and IT hardware, network setup, and CISCO solutions. From installations to repairs and preventive maintenance, we ensure smooth, secure, and uninterrupted operations.
                </p>
              </div>
    
              {/* RIGHT: Cards */}
              <div className="w-full lg:w-1/2">
                <FeaturesCards data={featuresData} />
              </div>
            </div>
          </div>
        </div>
      );
}