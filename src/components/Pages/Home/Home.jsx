import Banner from "./Banner";
import FAQSection from "./FAQSection";
import MarathonSection from "./MarathonSection";
import MarathonTips from "./MarathonTips";
import UpcomingMarathon from "./UpcomingMarathon";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Marathon | Home</title>
      </Helmet>
      <Banner></Banner>
      <h1 className="text-center mt-24 mb-6 text-3xl font-semibold">Ongoing Marathon</h1>
      <MarathonSection></MarathonSection>

      <h1 className="text-center mt-24 mb-6 text-3xl font-semibold">Upcoming Marathon Events</h1>
      <UpcomingMarathon></UpcomingMarathon>
      <h1 className="text-center mt-24 mb-6 text-3xl font-semibold"> Marathon Tips</h1>
      <MarathonTips></MarathonTips>
      <h1 className="text-center mt-24 mb-6  text-3xl font-semibold"> Frequently Asked Question</h1>
     <FAQSection></FAQSection>
    </div>
  );
};

export default Home; 
