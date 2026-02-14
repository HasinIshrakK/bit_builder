import Banner from "../../components/Banner";
import ContributorsMembers from "../../components/ContributorsMembers";
import Loader from "../../components/Loader";
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
      <ContributorsMembers />
      <SmartFAQ />
      <OpenInvitations />
    </div>
  );
};
export default Home;
