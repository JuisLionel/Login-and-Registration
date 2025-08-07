import React, { useState, useEffect } from "react";
import "../CSS/Typewriter-Style.css"

const Typewriter = ({ textArray = [], speed = 100, scrollAt = 20 }) => {
    const [content, setContent] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPos, setCurrentPos] = useState(0);

    useEffect(() => {
        if (textArray.length === 0) return;

        const type = () => {
            let updatedContent = "";
            let row = Math.max(0, currentIndex - scrollAt);

            while (row < currentIndex) {
                updatedContent += textArray[row++] + "<br />";
            }

            const destination =
                updatedContent +
                textArray[currentIndex]?.substring(0, currentPos) +
                `<span id="cursor">|</span>`;

            setContent(destination);

            if (currentPos + 1 < textArray[currentIndex]?.length) {
                setCurrentPos((prev) => prev + 1);
            } else if (currentIndex + 1 < textArray.length) {
                setCurrentPos(0);
                setCurrentIndex((prev) => prev + 1);
            }
        };

        const timer = setTimeout(type, speed);
        return () => clearTimeout(timer);
    }, [currentPos, currentIndex, textArray, speed, scrollAt]);

    return (
        <>
            <div id="typedtext" dangerouslySetInnerHTML={{ __html: content }}></div>
        </>
    );
};

export default Typewriter;
