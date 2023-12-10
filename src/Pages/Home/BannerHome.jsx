import {FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const BannerHome = () => {
    return (
        <div className="flex flex-col justify-center items-center my-10">
            <img className="mask mask-circle w-44" src="https://raw.githubusercontent.com/Shahjalal2075/Shahjalal/main/assets/img/shahjalal.jpg" />
            <h2 className="text-6xl font-semibold text-center my-10">Hi, I am <span className="text-[#FEC544]">Shahjalal</span></h2>
            <p className="text-lg text-center">I am a web developer. I can provide clean code and pixel perfect design.<br />Every website I make will be responsive and load fast</p>
            <div className="flex mt-8 gap-6">
                <a href="https://www.linkedin.com/shahjalal2075/" className="border rounded-full p-3 text-xl flex items-center gap-3">
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