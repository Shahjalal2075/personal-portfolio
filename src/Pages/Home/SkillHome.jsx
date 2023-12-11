
const SkillHome = () => {
    return (
        <div>
            <h2 className="text-4xl text-center font-semibold my-16 text-[#FEC544]">My Skills</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-0">
                <div className="lg:mx-10 mx-5 flex flex-col justify-center">
                    <h2 className="text-4xl font-medium">All the skills that I have in that field of work are mentioned.</h2>
                    <p className="text-lg mt-8">I have rich experience in Designing and Developing Custom and theme based websites and has expertise with Development/Customization/Integration.<br /><br />My skills are also good fit in creating Landing Pages, Tailwind Css, React Js, Node Js, Express Js, MongoDB, HTML, CSS, JavaScript, jQuery etc.<br /><br />I can make sure beautiful, responsive and user friendly website.</p>
                </div>
                <div className="lg:mx-20 mx-5 flex flex-col justify-center">
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">HTML</h2>
                            <h2 className="text-lg font-semibold">95%</h2>
                        </div>
                        <progress className="progress progress-warning bg-[#3F4551] w-full" value="95" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">CSS</h2>
                            <h2 className="text-lg font-semibold">90%</h2>
                        </div>
                        <progress className="progress progress-warning bg-[#3F4551] w-full" value="90" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">JS</h2>
                            <h2 className="text-lg font-semibold">85%</h2>
                        </div>
                        <progress className="progress progress-warning bg-[#3F4551] w-full" value="85" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">REACT</h2>
                            <h2 className="text-lg font-semibold">90%</h2>
                        </div>
                        <progress className="progress progress-warning bg-[#3F4551] w-full" value="90" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">NODE JS</h2>
                            <h2 className="text-lg font-semibold">85%</h2>
                        </div>
                        <progress className="progress progress-warning bg-[#3F4551] w-full" value="85" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">MONGODB</h2>
                            <h2 className="text-lg font-semibold">80%</h2>
                        </div>
                        <progress className="progress progress-warning bg-[#3F4551] w-full" value="80" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">EXPRESS JS</h2>
                            <h2 className="text-lg font-semibold">85%</h2>
                        </div>
                        <progress className="progress progress-warning bg-[#3F4551] w-full" value="85" max="100"></progress>
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">TAILWIND CSS</h2>
                            <h2 className="text-lg font-semibold">90%</h2>
                        </div>
                        <progress className="progress progress-warning bg-[#3F4551] w-full" value="90" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillHome;