import Banner from "../../components/Banner";
import OpenInvitations from "../../components/OpenInvitations";
import PhilosophySection from "../../components/PhilosophySection";
import SmartFAQ from "../../components/SmartFAQ";
import TeamTimeline from "../../components/TeamTimeline";

const Home = () => {
  return (
    <div>
      <Banner />
      <PhilosophySection />
      <TeamTimeline />
      <SmartFAQ />
      <OpenInvitations />
    </div>
  );
};
export default Home;
