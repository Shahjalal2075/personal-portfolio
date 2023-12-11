import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {

    const handleSubmitForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const reviewMessage = { name, email, message };
        console.log(reviewMessage);

    }

    return (
        <div>
            <h2 className="text-5xl text-center font-semibold my-16 text-[#FEC544]">Contact Me</h2>
            <div className="grid grid-cols-2 gap-10">
                <div className="">
                    <h2 className="text-4xl font-semibold text-center mb-4">Just say Hello</h2>
                    <form action="https://formspree.io/f/xleyqaee" className="flex flex-col justify-center items-center " method="post">
                        <input className="border-[#FEC544] border-2 px-3 py-2 text-lg text-[#fff] bg-[#0A101E] rounded-xl mt-4 w-10/12" placeholder="Your Name" type="text" name="name" required />
                        <input className="border-[#FEC544] border-2 px-3 py-2 text-lg text-[#fff] bg-[#0A101E] rounded-xl mt-4 w-10/12" placeholder="Your Email" type="email" name="email" required />
                        <input className="border-[#FEC544] border-2 px-3 py-2 text-lg text-[#fff] bg-[#0A101E] rounded-xl mt-4 w-10/12" placeholder="Your Subject" type="text" name="subject" required />
                        <textarea className="border-[#FEC544] border-2 p-3 h-48 text-x text-[#fff] bg-[#0A101E] rounded-lg mt-4 w-10/12 text-start" placeholder="Your Message" type="text" name="message" required />
                        <input className="cursor-pointer px-8 py-3 bg-[#FEC544] rounded-3xl text-xl font-bold text-[#0A101E] mt-4 mb-4 w-80" type="submit" value={"Send Message"} />

                    </form>
                </div>
                <div className="">
                    <h2 className="text-4xl font-semibold text-center mb-5">Contact Info</h2>
                    <p className="text-lg font-medium text-center my-6">If you want to contact us, here you will find our contact address.</p>
                    <div className="mt-6">
                        <div className="flex items-center gap-5">
                            <p className="border rounded-full p-3 text-xl"><IoMdMail /></p>
                            <div className="">
                                <a className="text-lg " href="mailto:shahjalal2075@gmail.com">shahjalal2075@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center gap-5">
                            <p className="border rounded-full p-3 text-xl"><IoCall /></p>
                            <div className="">
                                <p className="text-lg ">+8801763-628770</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center gap-5">
                            <p className="border rounded-full p-3 text-xl"><FaLocationDot /></p>
                            <div className="">
                                <p className="text-lg">Jashore, Khulna, Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-12">
                        <h2 className="text-xl">Visit my social profile and get connected</h2>
                        <div className="flex mt-8 gap-6">
                            <a href="https://www.linkedin.com/shahjalal2075/" className="border rounded-full p-3 text-xl flex items-center gap-3">
                                <FaLinkedin />
                                <span className="">LinkedIn</span>
                            </a>
                            <a href="https://www.facebook.com/shahjalal2075/" className="border rounded-full p-3 text-xl flex items-center gap-3">
                                <FaFacebook />
                                <span className="">Facebook</span>
                            </a>
                            <a href="https://www.twitter.com/shahjalal2075/" className="border rounded-full p-3 text-xl flex items-center gap-3">
                                <FaTwitter />
                                <span className="">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;