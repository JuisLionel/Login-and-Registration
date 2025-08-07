
import Typewriter from "../Components/Typewriter-Effects";

import "../CSS/Error-Style.css"
import { useState, useEffect } from "react";

const customTextArray = [
    "The page you are looking for might have been removed or",
    "had its name changed or is temporarily unavailable.",
];

function NoPage() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("isLogin?")) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);

    return (
        <>
            <div className="Error404">
                <h1>Oops!</h1>

                <div className="Text-Bottom css-typing">
                    <h2>404 Page Not Found :(</h2>
                    <Typewriter textArray={customTextArray} speed={40} scrollAt={10000} />
                </div>

                <a href= {!isLogin ? ("/Login") : ("/")}>
                
                    <button>{!isLogin ? ("Go To Login") : ("Go To Home")}</button>
                </a>

            </div>
        </>
    )
}

export default NoPage;