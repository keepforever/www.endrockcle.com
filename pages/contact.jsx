import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { scrollIntoView } from 'scroll-js';

const scrollToElement = (id) => {
    var myElement = document.getElementById(id);
    scrollIntoView(myElement, document.body, { behavior: 'smooth' });
};

const Shows = (props) => {
    return (
        <>
            <div className="masthead masthead-contact"></div>
            <div className="container txt-silver">
                <div className="row start-xs my-2 txt-silver">
                    <h1>Contact</h1>
                </div>

                <div className="row start-xs middle-xs my-2 txt-silver">
                    <FiMail size={32} />
                    <h5 className="ml-3">email: endrockcle@gmail.com</h5>
                </div>
            </div>
        </>
    );
};

export default Shows;
