import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "../CSS/Phone-and-Email-Style.css"

function PhoneEmail() {
    return (
        <div className="Me-Info">
            <div className="Full-Information">
                <div className="Phone-and-Email">
                    <div className="Phone">
                        <FaPhone className="Icon" />
                        {' '}
                        <p>
                            275-298-5319 (Office)
                            <br />
                            771-480-9753 (Mobile)
                        </p>
                    </div>

                    <div className="Email">
                        <MdEmail size={30} />
                        {' '}
                        <p style={{ color: "#006CA5" }}>Mr_Rahmad@gmail.com</p>
                    </div>


                    <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
                        <button >
                            <IoChatbubbleEllipses style={{ marginRight: "5px" }} />
                            {' '}
                            Chat
                        </button>
                    </a>

                    <div className="rating-container">
                        <p className="rating-value">4.0</p>
                        <div className="rating-stars">
                            <i>&#9733;</i>
                            <i>&#9733;</i>
                            <i>&#9733;</i>
                            <i>&#9733;</i>
                            <i style={{ color: "#ccc" }}>&#9733;</i>
                            <p className="reviews">1530 reviews</p>
                        </div>
                    </div>
                </div>

                <div className="Video-About-Me">
                    <video controls>
                        <source src="./Video/Introdution.mp4" type="video/MP4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default PhoneEmail;