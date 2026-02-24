import FeaturesCards from "../common/FeaturesCards";
import SearvicesHeader from "../common/ServicesHeader";

const featuresData = [
  {
    title: "Comprehensive Support",
    shortDescription: "Structured IT support designed to ensure stability, security, and uninterrupted operations.",
    longDescription: "We provide structured, end-to-end IT support designed to ensure system stability and operational continuity. Our services include break/fix assistance, remote troubleshooting, and on-site installations across software environments. With experienced engineers and defined support processes, we help organisations maintain secure, reliable systems while minimising downtime and operational risk.",
    bgColor: "bg-zinc-100",
    textColor: "text-black",
  },
  {
    title: "Annual Maintenance Contracts (AMC) ",
    shortDescription: "Predictable maintenance and priority support for long-term system reliability.",
    longDescription: "Our Annual Maintenance Contracts are designed to deliver consistent system performance and predictable support outcomes. Tailored for Apple and enterprise IT environments, our AMCs include preventive maintenance, routine health checks, and priority support. This approach enables organisations to reduce unexpected disruptions and maintain long-term reliability across their IT infrastructure.",
    bgColor: "bg-zinc-100",
    textColor: "text-black",
  },
  {
    title: "Seamless Upgrades & Migrations",
    shortDescription: "Carefully managed upgrades and migrations with minimal operational disruption.",
    longDescription: "We manage software upgrades, updates, and system migrations with a structured, low-risk approach. From initial assessment and planning to execution and post-migration validation, our team ensures continuity, data integrity, and minimal operational disruption. This enables organisations to transition confidently to updated, secure, and scalable technology environments.",
    bgColor: "bg-black",
    textColor: "text-white",
  },
];

export default function SoftwareServicePage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <SearvicesHeader>Software</SearvicesHeader>

      <div className="w-full px-4 md:px-12 lg:px-24 py-8 my-20">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* LEFT: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl font-extralight text-gray-800">
              Software Support <span className="font-semibold text-black">You Can Rely On</span>
            </h2>
            <p className="text-gray-600 mt-4 font-extralight max-w-2xl text-xl">
              We partner with organisations to deliver dependable software services across Apple and enterprise IT environments. Our team provides structured support, from technical troubleshooting and system optimisation to ongoing maintenance, delivered both remotely and on-site. With a focus on reliability, security, and continuity, we help businesses operate efficiently with technology they can trust.
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