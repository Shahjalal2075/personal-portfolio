import AboutHome from "./AboutHome";
import BannerHome from "./BannerHome";
import ResumeHome from "./ResumeHome";
import SkillHome from "./SkillHome";

const Home = () => {
    return (
        <div>
            <BannerHome></BannerHome>
            <AboutHome></AboutHome>
            <SkillHome></SkillHome>
            <ResumeHome></ResumeHome>
        </div>
    );
};

export default Home;