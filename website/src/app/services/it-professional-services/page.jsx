import FeaturesCards from "../common/FeaturesCards";
import SearvicesHeader from "../common/ServicesHeader";

const featuresData = [
  {
    title: "Technology Advisory & Planning",
    shortDescription: "Strategic guidance to help organisations plan, evaluate, and align IT decisions with business objectives.",
    longDescription: "Our technology advisory services support organisations in making strategic IT decisions. We assess current environments, identify gaps, and provide guidance on architecture, platforms, and scalability. By aligning technology planning with business priorities, we help organisations invest confidently and avoid fragmented or reactive IT decisions.",
    bgColor: "bg-zinc-100",
    textColor: "text-black",
  },
  {
    title: "Infrastructure Architecture & Design",
    shortDescription: "Design of secure, scalable IT and network architectures built to support performance and growth.",
    longDescription: "We provide expert design services for secure, scalable IT and network architectures. Our approach focuses on structure, performance, and future readiness, ensuring infrastructure is designed to support evolving business needs. We work with established enterprise technologies to create environments that are stable, secure, and fit for growth.",
    bgColor: "bg-zinc-100",
    textColor: "text-black",
  },
  {
    title: "Operational Readiness & Risk Management",
    shortDescription: "Structured assessments and process alignment to strengthen resilience, reduce risk, and support business continuity.",
    longDescription: "Our operational readiness services focus on strengthening IT governance and resilience. Through structured assessments, documentation, and process reviews, we help organisations identify risks, improve preparedness, and ensure their IT environments can support uninterrupted",
    bgColor: "bg-black",
    textColor: "text-white",
  },
];

export default function ITProfessionalServicePage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <SearvicesHeader>IT Professional </SearvicesHeader>

      <div className="w-full px-4 md:px-12 lg:px-24 py-8 my-20">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* LEFT: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl font-extralight text-gray-800">
              Strategic <span className="font-semibold text-black">Expertise</span> Behind Your {" "}
              <span className="font-semibold text-black">IT Decisions</span>
            </h2>
            <p className="text-gray-600 mt-4 font-extralight max-w-2xl text-xl">
              We support organisations beyond day-to-day operations with expert guidance, planning, and design. Our professional services help businesses make informed technology decisions, strengthen infrastructure, and prepare IT environments for scale and continuity.
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