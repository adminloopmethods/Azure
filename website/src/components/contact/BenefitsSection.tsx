import React from "react";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  iconAlt: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  iconAlt,
}) => {
  return (
    <div className="flex flex-col flex-1 items-center text-center">
      <img src={icon} alt={iconAlt} className="mb-2.5 w-11 h-14" />
      <div className="mb-2.5 text-lg font-semibold leading-6 text-zinc-900">
        {title}
      </div>
      <div className="text-sm leading-5 max-w-[300px] text-neutral-500">
        {description}
      </div>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ecda8f319f377123e2a829dabfdc9bec4b231def?width=88",
      title: "Fast, free delivery",
      description:
        "Enjoy quick, free delivery or pick up your order at a nearby Apple Store.",
      iconAlt: "icon-shipping-grey-2017",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/bec1318e8eabc4a24941bfa7b4542343ae71edac?width=88",
      title: "Free and easy returns",
      description:
        "Return online or at any Apple Store—simple and hassle-free.",
      iconAlt: "icon-return-2018",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/bde46adeb55329589ff0d8df33ef0e184523cfc1?width=112",
      title: "Get 3% Daily Cash back",
      description:
        "Get 3% back daily when you pay with Apple Card, plus interest-free monthly installments.",
      iconAlt: "acmi-value-prop-calendar-2020",
    },
  ];

  return (
    <div className="flex justify-center items-center px-36 py-24 w-full bg-zinc-100 h-[343px] max-md:px-12 max-md:py-16 max-sm:px-5 max-sm:py-10">
      <div className="flex gap-24 justify-between items-start w-full max-w-[1168px] max-md:flex-col max-md:gap-10 max-md:items-center max-sm:gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            iconAlt={benefit.iconAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
