import "../CSS/Profile-Card-Style.css"
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";


function ProfileCard() {
    return (
        <div className="Profile">
            <div className="Top-Container">
                <img src="./img/Background.png" className="Background" alt="Profile background" />
                <div className="Profile-picture">
                    <img src="./img/Guy3.png" alt="Mr. Rahmad" />
                </div>

                <div className="profile-info">
                    <h2>Mr Rahmad</h2>
                    <p>Advisor and Consultant at Stripe inc</p>
                    <div className="Info">
                        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" id="Hover-1">
                            <FaLocationDot style={{ fontSize: "20px", marginRight: "5px" }} />
                            <p>Pekanbaru</p>
                        </a>

                        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" id="Hover-2">
                            <FaTwitter style={{ fontSize: "20px", marginRight: "5px" }} />
                            <p>Mr_Advisor_and_Consultant</p>
                        </a>

                        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" id="Hover-3">
                            <FaFacebookF style={{ fontSize: "20px", marginRight: "5px" }} />
                            <p>Mr_Rahmad</p>
                        </a>

                        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" id="Hover-4">
                            <FaLinkedin style={{ fontSize: "25px", marginRight: "3px" }} />
                            <p>Rahmad</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileCard;