import appleinhospimg from "@/assets/images/apple-in-hosp.png";
import patientcareathomeimg from "@/assets/images/patient-care-at-home.png";
import Image from "next/image";

export default function SolutionCard() {
  return (
    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 px-4 sm:px-8 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-16 bg-black">
      
      {/* First Card */}
      <div className="custom-gradient-border flex flex-col bg-[#101010] overflow-hidden shadow-lg flex-1 relative">
        {/* Gradient Borders */}
        <div className="left-gradient"></div>
        <div className="right-gradient"></div>
        <div className="bottom-left-gradient"></div>
        <div className="bottom-right-gradient"></div>

        {/* Image */}
        <Image
          src={appleinhospimg}
          alt="Apple in Hospital"
          width={600}
          height={1000}
          className="object-cover w-full"
        />

        {/* Text */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h2 className="text-white text-lg sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4 mt-4 sm:mt-8">
            Apple in Hospital
          </h2>
          <p className="text-neutral-300 text-sm sm:text-lg lg:text-2xl leading-relaxed mt-2 sm:mt-5">
            Apple products have revolutionized how doctors and medical staff
            interact with patients...
          </p>
        </div>
      </div>

      {/* Second Card */}
      <div className="custom-gradient-border flex flex-col bg-[#101010] overflow-hidden shadow-lg flex-1 relative">
        {/* Gradient Borders */}
        <div className="left-gradient"></div>
        <div className="right-gradient"></div>
        <div className="bottom-left-gradient"></div>
        <div className="bottom-right-gradient"></div>

        {/* Image */}
        <Image
          src={patientcareathomeimg}
          alt="Patient Care at Home"
          width={600}
          height={1000}
          className="object-cover w-full h-56 sm:h-[15rem] md:h-[15rem] lg:h-[23rem]"
        />

        {/* Text */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h2 className="text-white text-lg sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4 mt-4 sm:mt-8">
            Patient Care at Home
          </h2>
          <p className="text-neutral-300 text-sm sm:text-lg lg:text-2xl leading-relaxed mt-2 sm:mt-5">
            Apple devices have redefined home healthcare by enabling seamless
            communication between patients and medical teams...
          </p>
        </div>
      </div>
    </div>
  );
}
