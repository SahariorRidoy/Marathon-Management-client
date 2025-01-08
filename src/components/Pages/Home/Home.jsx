import Banner from "./Banner";
import MarathonSection from "./MarathonSection";
import UpcomingMarathon from "./UpcomingMarathon";
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Marathon | Home</title>
      </Helmet>
      <Banner></Banner>
      <h1 className="text-center mt-24 mb-12 text-3xl font-semibold">Ongoing Marathon</h1>
      <MarathonSection></MarathonSection>

      <h1 className="text-center mt-24 mb-12 text-3xl font-semibold">Upcoming Marathon Events</h1>
      <UpcomingMarathon></UpcomingMarathon>
    </div>
  );
};

export default Home;
