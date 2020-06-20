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
                <div className="row my-3">
                    <h1 className="txt-silver">End Rock</h1>
                </div>
                <div className="row">
                    <h3 className="txt-silver">
                        A band of five exquisite Cleveland, Ohio based primates with highly evolved a senses of rhythm,
                        tonality, and a passion for alternative rock we want to share with the world.
                    </h3>
                </div>
            </div>
        </>
    );
};

export default About;
