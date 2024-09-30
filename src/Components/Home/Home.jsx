import Banner from "../Banner/Banner";
import FeaturedJobs from "../JobCategory/FeaturedJobs/FeaturedJobs";
import JObCategory from "../JobCategory/JObCategory";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <JObCategory></JObCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;