import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { scrollIntoView } from 'scroll-js';

import { songList } from '../utils/songs';

const scrollToElement = (id) => {
    var myElement = document.getElementById(id);
    scrollIntoView(myElement, document.body, { behavior: 'smooth' });
};

const About = (props) => {
    return (
        <>
            <div className="masthead masthead-about"></div>
            <div className="container txt-white">
                <div className="row">
                    <h3>hello about</h3>
                </div>
            </div>
        </>
    );
};

export default About;
