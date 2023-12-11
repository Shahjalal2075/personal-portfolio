import {FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const BannerHome = () => {
    return (
        <div className="flex flex-col justify-center items-center my-10">
            <img className="mask mask-circle w-44" src="https://raw.githubusercontent.com/Shahjalal2075/Shahjalal/main/assets/img/shahjalal.jpg" />
            <h2 className="text-6xl font-semibold text-center my-10">Hi, I am <span className="text-[#FEC544]">Shahjalal</span></h2>
            <p className="text-lg text-center">I'm a Front-End Developer who loves creating beautiful and responsive web<br />applications using React JS, Node JS, Express JS, and MongoDB.</p>
            <div className="flex mt-8 gap-6">
                <a href="https://www.linkedin.com/in/shahjalal2075/" className="border rounded-full p-3 text-xl flex items-center gap-3">
                <FaLinkedinIn />
                </a>
                <a href="https://www.facebook.com/shahjalal2075/" className="border rounded-full p-3 text-xl flex items-center gap-3">
                <FaFacebookF />
                </a>
                <a href="https://www.twitter.com/shahjalal2075/" className="border rounded-full p-3 text-xl flex items-center gap-3">
                    <FaTwitter />
                </a>
            </div>
        </div>
    );
};

export default BannerHome;