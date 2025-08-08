import { MainContent } from "@/components/service/MainContent";
import SearvicesHeader from "../common/ServicesHeader";
import { ServicesSection } from "@/components/service/ServicesSection";
import { FeaturesGrid } from "@/components/service/FeaturesGrid";

export default function StreamingServicesPage(){
    return(
        <div className="flex overflow-hidden flex-col bg-white">
             <SearvicesHeader>Streaming</SearvicesHeader>
             <MainContent />
             <ServicesSection />
             <FeaturesGrid />
             
        </div>
    )
}