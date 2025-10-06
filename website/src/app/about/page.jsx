import GradientDivider from "@/components/about/GradientDivider";
import { Hero } from "@/components/about/Hero";
import { TeamCard } from "@/components/about/TeamCard";
import React from "react";
import team1 from "@/assets/images/cofounder.png";
import team2 from "@/assets/images/cofounder2.png";
import team3 from "@/assets/images/cofounder3.png";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sanjeev Sharma",
      title: "Managing director and cofounder",
      image: team1,
    },
    {
      name: "Jaj Padmakaran",
      title: "Technical and Support Services Director",
      image: team2,
    },
    {
      name: "Parag Kohli",
      title: "Pre Sales Head",
      image: team3,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* <Header /> */}
      <Hero />

      {/* Main Content Section */}
      <div className="px-24 pt-10 max-md:px-12 max-md:py-16 max-sm:px-5 max-sm:py-5">
        <div className="flex gap-11 items-start max-md:flex-col max-md:gap-8 max-sm:gap-5">
          <div className="font-light text-[15px] leading-[28px] tracking-[0] text-justify font-poppins text-black w-[664px] max-md:w-full max-sm:text-base max-sm:leading-6">
            Service Provider for products as well as Apple Corporate partners,
            having <span className="font-bold">head office at Naraina (Delhi)</span> and branch office at Noida,
            Gurgaon. 
            <br /><br />
            We are also <span className="font-bold"> MS Surface Partner</span>.
             As an organisation we
            believe in teamwork, diversity, innovation and integrity. We're
            driven by professional eminence and always place our customers at
            the centre of anything and everything we do. Azure Innovations
            Corporate Background: Azure Innovations , commencing its operations
            since long. A passionate management team with well experienced
            Engineers and Professional Business Development team makes Azure
            Innovations as a best choice for Apple Solutions.
            <br/> <br/>
            To service,
            service and service was the commitment we gave to our clients. While
            this continues to be the bedrock, today we are well established as a
            Apple Reseller, Service Provider.
            <br/> <br/>
            This has happened only by virtue
            of a clear understanding of the future we were seeking and what it
            takes to achieve that future. So with time and evolving goals came
            more people, more growth and more importantly an insightful
            understanding of Apple technology. Our Customer Support services
            focus on customer satisfaction . The service offerings range from
            fundamental hardware and software Support to out-tasking services.
            Based on the combination of flexible support portfolio, pro-active
            way of working and our focus on the every purchase.
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/95eb0e2f9524f8af6f23bb1c251d150d9a1e9b8c?width=1062"
            alt=""
            className="object-cover rounded-lg h-[640px] w-[531px] max-md:w-full max-md:h-auto"
          />
        </div>
      </div>

      <div className="py-0 px-24 max-sm:px-5 mt-10 max-sm:py-5">
        <div className="h-[1px] w-full bg-gray-200" />
      </div>

      {/* Statistics Section */}
      <div className="px-24 py-0 bg-white">
        <div className="flex gap-15 justify-center items-center px-28 py-7 max-md:gap-24 max-md:px-12 max-md:py-7 max-sm:flex-col max-sm:gap-10 max-sm:p-5">
          <div className="text-center lg:w-350">
            <div className="text-6xl font-medium text-black leading-[56px] max-sm:text-5xl">
              20k
            </div>
            <div className="mt-4 text-lg font-light leading-7 text-zinc-900">
              Happy Customers
            </div>
          </div>
          {/* divider */}
          <div className="h-px w-full bg-gradient-to-r from-white via-gray-300 to-white lg:rotate-90" />
          <div className="text-center lg:w-350">
            <div className="text-6xl font-medium text-black leading-[56px] max-sm:text-5xl">
              20+
            </div>
            <div className="mt-4 text-lg font-light leading-7 text-zinc-900">
              Year of Experience
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-white via-gray-300 to-white lg:rotate-90" />
          <div className="text-center lg:w-350">
            <div className="text-6xl font-medium text-black leading-[56px] max-sm:text-5xl">
              100+
            </div>
            <div className="mt-4 text-lg font-light leading-7 text-zinc-900">
              Clients Served
            </div>
          </div>
        </div>
      </div>

      <div className="py-0 px-24 max-sm:px-5 mb-10 max-md:mb-0 max-sm:py-5">
        <div className="h-[1px] w-full bg-gray-200" />
      </div>

      {/* Vision/Mission Section */}
      <div className="flex px-24 py-10  gap-10 max-md:flex-col max-md:px-12 max-md:py-5 max-sm:px-0 max-sm:py-5 max-sm:mb-5">

        <div className="flex flex-col min-h-[282px] w-[610px] max-md:w-full">
          <div className="p-12 bg-gray-200 min-h-[282px] max-w-[610px] max-sm:px-5 max-sm:py-8">
            <div className="mb-5 text-4xl font-medium leading-[50px] text-zinc-900 max-sm:text-3xl max-sm:leading-10">
              Our Vision
            </div>
            <div className="text-lg font-light leading-7 text-justify text-zinc-900 max-w-[500px] max-sm:text-base max-sm:leading-6">
              To be a leading technology partner, delivering innovative Apple
              and IT solutions that empower our clients to grow, adapt, and
              succeed in a digital-first world.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-center items-start p-12 bg-zinc-900 min-h-[282px] max-w-[610px] max-md:w-full max-sm:px-5 max-sm:py-8">
          <div className="text-4xl font-medium leading-[50px] text-neutral-100 max-sm:text-3xl max-sm:leading-10">
            Our Mission
          </div>
          <div className="text-lg font-light leading-7 text-justify text-white max-w-[500px] max-sm:text-base max-sm:leading-6">
            To provide authentic Apple products, reliable IT solutions, and
            exceptional customer service through innovation, integrity, and a
            commitment to continuous improvement.
          </div>
        </div>

      </div>

      {/* Team Section */}
      {/* <div className="px-24 pt-12 pb-14 bg-black max-md:p-12 max-sm:px-5 max-sm:py-10">
        <div className="mb-12 text-5xl text-white leading-[58px] max-sm:text-4xl max-sm:leading-10">
          Managing Director &amp; Co-Founder
        </div>
        <div className="flex gap-5 justify-between max-md:flex-col max-md:gap-8 max-md:items-center">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </div> */}

      {/* Features Section */}
      
    </div>
  );
}
