import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3 mt-3 ">Find Us On</h2> 
            <div className="join flex join-vertical bg-base-100 ">
            <div className="join join-vertical">
            <button className="btn join-item justify-start">
             <FaFacebook></FaFacebook>Facebook</button>
            <button className="btn join-item justify-start">
                <BsTwitter></BsTwitter>Twitter
            </button>
            <button className="btn join-item justify-start">
            <FaLinkedin></FaLinkedin>LinkedIn</button>
</div>
</div>
        </div>
    );
};

export default FindUs;