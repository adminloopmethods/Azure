import ostrixsolimg from "@/assets/images/ostrix-sol.png";
import HospitalGrid from "./HospitalGrid";
import Image from "next/image";

export default function OstrixSolutionSection() {
  return (
    <div className="w-full">
      {/* Heading & Text */}
      <div className="px-6 md:px-12 lg:px-24 pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-14 lg:pb-16">
        <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 md:mb-6 lg:mb-7">
          Ostrix Solutions
        </h1>
        <p className="text-black text-base md:text-lg lg:text-2xl font-extralight leading-relaxed md:leading-8 lg:leading-9">
          OsiriX is advanced image processing software built for DICOM (.dcm)
          files from imaging tools like MRI, CT, PET, and ultrasound. It fully
          supports DICOM standards and can receive and manage images from PACS
          or imaging devices using protocols like C-STORE, C-MOVE, C-FIND, and
          WADO, enabling efficient and seamless medical image handling.
        </p>
      </div>

      {/* Full-width Image with padding */}
      <div className="px-6 md:px-12 lg:px-24 pb-6 md:pb-8">
        <Image
          src={ostrixsolimg}
          alt="ostrix solution img"
          className="w-full h-auto"
          width={1000}
          height={1000}
        />
      </div>

      {/* HospitalGrid */}
      <div className="px-6 md:px-12 lg:px-24 mt-6 md:mt-8">
        <HospitalGrid />
      </div>
    </div>
  );
}
