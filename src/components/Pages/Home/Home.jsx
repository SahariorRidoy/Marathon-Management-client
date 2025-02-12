import Banner from "./Banner";
import FAQSection from "./FAQSection";
import MarathonSection from "./MarathonSection";
import MarathonTips from "./MarathonTips";
import UpcomingMarathon from "./UpcomingMarathon";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <Helmet>
        <title>Marathon | Home</title>
      </Helmet>
      <div className="pt-4">
      <Banner></Banner>
      </div>
      <h1 className="text-center mt-12 mb-6 text-3xl font-semibold">Ongoing Marathon</h1>
      <MarathonSection></MarathonSection>

      <h1 className="text-center mt-12 mb-6 text-3xl font-semibold">Upcoming Marathon Events</h1>
      <UpcomingMarathon></UpcomingMarathon>
      <h1 className="text-center mt-12 mb-6 text-3xl font-semibold"> Marathon Tips</h1>
      <MarathonTips></MarathonTips>
      <h1 className="text-center mt-12 pb-6  text-3xl font-semibold"> Frequently Asked Question</h1>
     <div className="pb-12">
     <FAQSection></FAQSection>
     </div>
    </div>
  );
};

export default Home; 
