import AboutMe from "../Components/Profile-Aboutme.jsx";
import PhoneEmail from "../Components/Profile-Phone-and-Email.jsx"
import ProfileCard from "../Components/Profile-Card.jsx";

function Profile() {
    return (
        <>
            <ProfileCard />
            <PhoneEmail />
            <AboutMe />
        </>
    );
}
export default Profile;