import FeaturesCards from "../common/FeaturesCards";
import SearvicesHeader from "../common/ServicesHeader";

const featuresData = [
  {
    title: "Hardware Support & Lifecycle Management",
    shortDescription: "We provide structured hardware support across Apple and enterprise IT environments, covering diagnostics, repairs, and performance optimisation to ensure long-term reliability.",
    longDescription: "We deliver comprehensive hardware support across Apple and enterprise IT environments, covering diagnostics, repairs, replacements, and lifecycle planning. Our structured approach ensures devices perform reliably throughout their lifespan while minimising downtime and operational risk. From day-to-day issues to long-term asset management, we help organisations maintain stable, efficient hardware environments.",
    bgColor: "bg-zinc-100",
    textColor: "text-black",
  },
  {
    title: "Network Infrastructure & Support",
    shortDescription: "Design, deployment, and ongoing support of secure, high-performance network infrastructure, delivered in collaboration with established technology partners such as Cisco.",
    longDescription: "We design, deploy, and support secure, high-performance network infrastructures tailored to business needs. Working with established technology partners such as Cisco, we ensure network reliability, scalability, and security. Our services include installation, optimisation, monitoring, and issue resolution to support uninterrupted connectivity across offices and distributed teams.",
    bgColor: "bg-zinc-100",
    textColor: "text-black",
  },
  {
    title: "Preventive Maintenance & System Health",
    shortDescription: "Proactive monitoring, routine health checks, and timely updates to minimise risk, prevent downtime, and maintain stable hardware and network operations.",
    longDescription: "Our preventive maintenance services focus on identifying issues before they impact operations. Through regular system health checks, updates, and performance monitoring, we help organisations reduce unplanned downtime and extend the life of their hardware and network assets, ensuring consistent performance and long-term operational stability.",
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
                  Keeping Your <span className="font-semibold text-black">Technology Reliable</span>, Every Day
                </h2>
                <p className="text-gray-600 mt-4 font-extralight max-w-2xl text-xl">
                  We ensure your Apple and IT hardware operates smoothly across its lifecycle. From ongoing reliability to long-term stability, our support is structured, responsive, and built to minimise disruption so teams can stay focused on their work.
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