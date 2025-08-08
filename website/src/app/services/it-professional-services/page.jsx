import FeaturesCards from "../common/FeaturesCards";
import SearvicesHeader from "../common/ServicesHeader";

const featuresData = [
  {
    title: "Help Desk & Equipment",
    description:
      "Device support, setup guidance, equipment selection",
    bgColor: "bg-zinc-100",
    textColor: "text-black",
  },
  {
    title: "Network & Data Security",
    description:
      "Network protection, data backup & recovery",
    bgColor: "bg-zinc-100",
    textColor: "text-black",
  },
  {
    title: "Cloud & Data Services",
    description:
      "Cloud solutions, secure data storage & management",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Consulting & Repair",
    description:
      "IT & social media consulting, equipment repair",
    bgColor: "bg-black",
    textColor: "text-white",
  },
];

export default function HardwareServicePage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <SearvicesHeader>IT Professional </SearvicesHeader>

      <div className="w-full px-4 md:px-12 lg:px-24 py-8 my-20">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* LEFT: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-6xl font-extralight text-gray-800">
              Your <span className="font-semibold text-black">All-in-One
                {" "} IT Professional</span> {" "}
              Services Partner
            </h2>
            <p className="text-gray-600 mt-4 font-extralight max-w-2xl text-2xl">
              Reliable support for Apple and IT hardware, network setup, and
              CISCO solutions. From installations to repairs and preventive
              maintenance, we ensure smooth, secure, and uninterrupted
              operations.
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
