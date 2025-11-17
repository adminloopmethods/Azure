import GradientDivider from "@/components/about/GradientDivider";
import { Hero } from "@/components/about/Hero";
import { TeamCard } from "@/components/about/TeamCard";
import React from "react";
import team1 from "@/assets/images/cofounder.png";
import team2 from "@/assets/images/cofounder2.png";
import team3 from "@/assets/images/cofounder3.png";
import office from "@/assets/images/about-image.jpeg";
import Image from "next/image";

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
    <div className=" bg-white">
      {/* <Header /> */}
      <Hero />
      <div className="flex justify-center">
        <div className="container flex flex-col gap-5 py-10 px-12">
          {/* Main Content Section */}
          <div className="w-full py-10 flex max-lg:flex-col justify-between gap-10">
            <div className="font-light text-[15px] leading-[28px] tracking-[0] text-justify font-poppins text-black w-[664px] max-md:w-full max-sm:text-base max-sm:leading-6">
              Service Provider for products as well as Apple Corporate partners,
              having{" "}
              <span className="font-bold">head office at Naraina (Delhi)</span>{" "}
              and branch office at Noida, Gurgaon.
              <br />
              <br />
              We are also <span className="font-bold"> MS Surface Partner</span>
              . As an organisation we believe in teamwork, diversity, innovation
              and integrity. We're driven by professional eminence and always
              place our customers at the centre of anything and everything we
              do. Azure Innovations Corporate Background: Azure Innovations ,
              commencing its operations since long. A passionate management team
              with well experienced Engineers and Professional Business
              Development team makes Azure Innovations as a best choice for
              Apple Solutions.
              <br /> <br />
              To service, service and service was the commitment we gave to our
              clients. While this continues to be the bedrock, today we are well
              established as a Apple Reseller, Service Provider.
              <br /> <br />
              This has happened only by virtue of a clear understanding of the
              future we were seeking and what it takes to achieve that future.
              So with time and evolving goals came more people, more growth and
              more importantly an insightful understanding of Apple technology.
              Our Customer Support services focus on customer satisfaction . The
              service offerings range from fundamental hardware and software
              Support to out-tasking services. Based on the combination of
              flexible support portfolio, pro-active way of working and our
              focus on the every purchase.
            </div>
            <Image
							src={office}
              alt=""
              className="object-cover rounded-lg h-[640px] w-[531px] max-md:w-full max-md:h-auto"
            />
          </div>

          <div className="py-5">
            <div className="h-[1px] w-full bg-gray-200" />
          </div>

          {/* <div className="">
            <div className="h-[1px] w-full bg-gray-200" />
          </div> */}

          {/* Vision/Mission Section */}
          <div className="flex max-lg:flex-col justify-between gap-10">
            <div className="flex flex-col min-h-[282px] w-[610px] max-md:w-full">
              <div className="p-12 bg-gray-200 min-h-[282px] max-w-[610px] max-sm:px-5 max-sm:py-8">
                <div className="mb-5 text-4xl font-medium leading-[50px] text-zinc-900 max-sm:text-3xl max-sm:leading-10">
                  Our Vision
                </div>
                <div className="text-lg font-light leading-7 text-justify text-zinc-900 max-w-[500px] max-sm:text-base max-sm:leading-6">
                  To be a leading technology partner, delivering innovative
                  Apple and IT solutions that empower our clients to grow,
                  adapt, and succeed in a digital-first world.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-start p-12 bg-zinc-900 min-h-[282px] max-w-[610px] max-md:w-full max-sm:px-5 max-sm:py-8">
              <div className="text-4xl font-medium leading-[50px] text-neutral-100 max-sm:text-3xl max-sm:leading-10">
                Our Mission
              </div>
              <div className="text-lg font-light leading-7 text-justify text-white max-w-[500px] max-sm:text-base max-sm:leading-6">
                To provide authentic Apple products, reliable IT solutions, and
                exceptional customer service through innovation, integrity, and
                a commitment to continuous improvement.
              </div>
            </div>
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
