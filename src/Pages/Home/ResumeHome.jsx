import { PiToolboxBold } from "react-icons/pi";
import { PiGraduationCapBold } from "react-icons/pi";

const ResumeHome = () => {
    return (
        <div className="lg:px-20 px-5">
            <h2 className="text-4xl text-center font-semibold my-16 text-[#FEC544]">Resume</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-44 gap-16">
                <div className="">
                    <div className="flex items-center gap-6">
                        <p className="text-4xl font-semibold">Experience</p>
                        <p className="text-5xl text-[#232936]"><PiToolboxBold /></p>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-3xl font-semibold text-[#FEC544]">Admin & HR</h2>
                        <p className="text-xl text-[#A9ADB8] my-3">August 2023 - November 2023 </p>
                        <p className="text-2xl font-medium">TechNest</p>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-3xl font-semibold text-[#FEC544]">Junior Web Developer</h2>
                        <p className="text-xl text-[#A9ADB8] my-3">July 2021 - December 2023</p>
                        <p className="text-2xl font-medium">Brandcull</p>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-3xl font-semibold text-[#FEC544]">Junior Graphics Designer</h2>
                        <p className="text-xl text-[#A9ADB8] my-3">March 2020 - March 2021</p>
                        <p className="text-2xl font-medium">AN Solution</p>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center gap-6">
                        <p className="text-5xl text-[#232936]"><PiGraduationCapBold /></p>
                        <p className="text-4xl font-semibold">Education</p>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-3xl font-semibold text-[#FEC544]">Bachelor of Computer Science</h2>
                        <p className="text-xl text-[#A9ADB8] my-3">2022 - Present</p>
                        <p className="text-2xl font-medium">North Western University, Khulna</p>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-3xl font-semibold text-[#FEC544]">Higher Secondary Certificate</h2>
                        <p className="text-xl text-[#A9ADB8] my-3">2018 - 2020</p>
                        <p className="text-2xl font-medium">Jashore Government City College, Jashore</p>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-3xl font-semibold text-[#FEC544]">Secondary School Certificate</h2>
                        <p className="text-xl text-[#A9ADB8] my-3">2013 - 2018</p>
                        <p className="text-2xl font-medium">Jashore Zilla School, Jashore</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeHome;