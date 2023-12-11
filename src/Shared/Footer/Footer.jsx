import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-20">
            <aside>
                <Link to={"/"}>
                    <img className="w-16" src="https://i.ibb.co/k0mFjS3/9211049.png" alt="SJ" />
                </Link>
                <p className="mt-6">© 2023 Shahjalal. All right reserved.</p>
            </aside>
            <nav>
                <div className="flex gap-6">
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
            </nav>
        </footer>
    );
};

export default Footer;