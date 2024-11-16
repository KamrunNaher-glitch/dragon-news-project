import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";


const RightNav = () => {
    return (
        <div className="space-y-11">
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
        </div>
    );
};

export default RightNav;
