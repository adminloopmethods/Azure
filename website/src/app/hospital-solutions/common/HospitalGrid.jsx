import { useState } from "react";
import HospitalCard from "./HospitalCard";

export default function HospitalGrid() {
  const staticCards = [
    {
      title: "Basic Features",
      bullets: [
        "2D Viewer, 2D Orthogonal and curved MPR",
        "3D Reconstruction and 3D MIP   ",
        "3D Volume rendering and Surface rendering",
        "4D Viewer and Navigator"
      ],
    },
    {
      title: "CT Specific Features",
      bullets: ["Volume calculation, Substraction",
        "Image fusion, 3D Endoscopy",
        "Calcium score, Ejection fraction",
        "ROI Manager and FLY through movies",
        "Bulls eye and CT Angiography",
        "Hip Templating and Dental reconstruction",
        "3D Panel view and Bone removal tool"
      ],
    },
    {
      title: "MRI Specific Features",
      bullets: ["B1 Map, SNR Calculator, ROI Segmentation",
        "T1 fit map, T2 fit map, Ejection Fraction",
        "ROI manager, Tumor Volume Calculation",
        "Merge Spine Images, MR image fusion",
        "Diffusion Tensor Imaging (Works only on Mac Pro)"
      ],
    },
    {
      title: "PET Specific Features",
      bullets: ["Volume calculation, Substraction",
        "Image fusion, 3D Endoscopy",
        "3D Volume rendering and Surface rendering",
        "4D Viewer and Navigator",
      ],
    },
  ];



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {staticCards.map((c, idx) => (
        <HospitalCard key={idx} title={c.title} bullets={c.bullets} />
      ))}

      
    </div>
  );
};
