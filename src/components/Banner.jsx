import teamLottie from "../animationLottie/team.json";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";
import Container from "./Container";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <section className="text-white bg-[#1c072e] rounded-4xl mt-10 md:mt-16">
      <Container>
        <div className="flex flex-col justify-center gap-5 mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center">
            <Lottie
              animationData={teamLottie}
              loop={true}
              className="w-full max-w-xl"
            />
          </div>

          <div className="flex  flex-col justify-center p6 text-center rounded-sm lg:max-w-2xl lg:text-left">
            <h1 className="text-5xl md:leading-14 text-cente font-bold  sm:text-5xl">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-blue-500">
                {" "}
                BitBuilder{" "}
              </span>
              Collaborative Projects Crafted.
            </h1>

            <p className="mt-6 mb-8 text-lg sm:mb-12">
              A curated collection of team projects showcasing shared effort,
              creativity, technical skills, and real project-based experience.
            </p>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <PrimaryBtn text={"See Our Projects"} link={"/projects"} />
              <SecondaryBtn text={"Contact Us"} link={"/contact"} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Banner;
