
const AboutHome = () => {
    return (
        <div className="mx-5">
            <h2 className="text-4xl text-center font-semibold my-16 text-[#FEC544]">About Me</h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                <div className="">
                    <img className="w-full rounded-lg" src="https://i.ibb.co/Pz60Z9M/ssss2.jpg" alt="" />
                </div>
                <div className="flex justify-center items-center">
                    <div className="">
                        <h2 className="text-4xl font-semibold">Hi There! I'm Shahjalal</h2>
                        <h4 className="text-2xl font-semibold mt-5 text-[#FEC544]">Web Developer</h4>
                        <div className="text-lg my-7">
                            <p>I'm a Front-End Developer who loves creating beautiful and responsive web applications using React JS, Node JS, Express JS, and MongoDB. I'm always eager to learn new technologies and improve my skills. Check out some of my projects and feel free to contact me if you have any questions or feedback.</p>
                        </div>
                        <div className="grid grid-cols-12 text-lg">
                            <div className="col-span-3">
                                <h2 className="mb-3">Full Name</h2>
                                <h2 className="mb-3">Birthday</h2>
                                <h2 className="mb-3">Phone</h2>
                                <h2 className="mb-3">Email</h2>
                                <h2 className="mb-3">From</h2>
                                <h2 className="mb-3">Language</h2>
                                <h2 className="mb-3">Freelance</h2>
                            </div>
                            <div className="">
                                <h2 className="mb-3">:</h2>
                                <h2 className="mb-3">:</h2>
                                <h2 className="mb-3">:</h2>
                                <h2 className="mb-3">:</h2>
                                <h2 className="mb-3">:</h2>
                                <h2 className="mb-3">:</h2>
                                <h2 className="mb-3">:</h2>
                            </div>
                            <div className="col-span-8">
                                <h2 className="mb-3">Mullah Mohammad Shahjalal</h2>
                                <h2 className="mb-3">September 23, 2001</h2>
                                <h2 className="mb-3">+8801763-628770</h2>
                                <h2 className="mb-3">shahjalal2075@gmail.com</h2>
                                <h2 className="mb-3">Jashore, Khulna, Bangladesh</h2>
                                <h2 className="mb-3">English, Bangla</h2>
                                <h2 className="mb-3">Available</h2>
                            </div>
                        </div>
                        <div className="mt-10">
                            <a target="blank" href="https://drive.google.com/file/d/1hsCFXmk1hmgfhHlCLT09aOG6ZNnP7jlR/view?usp=sharing" className="px-8 py-3 bg-[#FEC544] rounded-3xl text-xl font-bold text-[#0A101E]" download={true}>Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;