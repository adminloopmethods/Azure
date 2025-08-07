import FeaturesCards from "../common/FeaturesCards";
import SearvicesHeader from "../common/ServicesHeader";

const featuresData = [
  {
    title: "Comprehensive Support",
    description: "From break/fix services to remote troubleshooting and installations—we cover all your software needs.",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Annual Maintenance Contracts ",
    description: "Ensure smooth performance with AMCs customized for Apple and other IT systems.",
    bgColor: "bg-gray-200",
    textColor: "text-black",
  },
  {
    title: "Seamless Upgrades & Migrations",
    description: "Experience hassle-free software upgrades, updates, and system migrations with expert support.",
    bgColor: "bg-black",
    textColor: "text-white",
  },
];

export default function SoftwareServicePage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <SearvicesHeader>Software</SearvicesHeader>

      <div className="w-full px-4 md:px-12 lg:px-24 py-8">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* LEFT: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-light text-gray-800">
              Your <span className="font-bold">Trusted</span> Software Service{" "}
              <span className="font-bold">Partner</span>
            </h2>
            <p className="text-gray-600 mt-4 text-base max-w-2xl">
              We specialize in expert software support for Apple and other IT
              solutions. Whether online or onsite, we handle everything from
              technical troubleshooting to ongoing maintenance—ensuring smooth,
              reliable performance at every step.
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
