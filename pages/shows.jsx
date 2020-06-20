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

const Shows = (props) => {
    return (
        <>
            <div className="masthead masthead-shows"></div>
            <div className="container txt-silver">
                <div className="row start-xs my-2 txt-silver">
                    <h1>Summer 2020</h1>
                </div>

                <div className="row start-xs my-2 txt-silver">
                    <h5 className="">July 11th &mdash; Stella's Music Club, Cleveland</h5>
                </div>

                <hr />

                <div className="row start-xs my-2 txt-silver">
                    <h5 className="">July 25th &mdash; Shooters on the Water, Cleveland</h5>
                </div>
                <hr />

                <div className="row start-xs my-2 txt-silver">
                    <h5 className="">August 1st &mdash; Stella's Music Club, Cleveland</h5>
                </div>
                <hr />

                <div className="row start-xs my-2 txt-silver">
                    <h5 className="">August 29th &mdash; Stella's Music Club, Cleveland</h5>
                </div>
                <hr />

                <div className="row start-xs my-2 txt-silver">
                    <h5 className="">September 5th &mdash; Shooters on the Water, Cleveland</h5>
                </div>
                <hr />

                <div className="row start-xs my-2 txt-silver">
                    <h5 className="">September 26th &mdash; Stella's Music Club, Cleveland</h5>
                </div>
            </div>
        </>
    );
};

export default Shows;
