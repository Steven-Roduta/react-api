import { useState } from "react";

export default function Postlist({ title, content, image }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((current) => !current)
    }

    return (
    <div className="post">
        <div className="post__title">
            <h3>{title}</h3>
        </div>

        <button className="post__button" onClick={toggleAccordion}>
            {isOpen ? "-" : "+"}
        </button>
        {isOpen && <div>{content}</div>}
        <div>
            <img src={image} alt="" />
        </div>
    </div>
    );
}