import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { GiPartyFlags } from 'react-icons/gi';
import { scrollIntoView } from 'scroll-js';
import { songList } from '../utils/songs';

const scrollToElement = (id) => {
    var myElement = document.getElementById(id);
    scrollIntoView(myElement, document.body, { behavior: 'smooth' });
};

const myMailTo =
    "mailto:endrockcle@gmail.com?subject=%3Cyour-biz-or-name%3E%20-%20BOOKING&body=Rock%20and%20Roll%20ain't%20noise%20pollution!";

export async function getStaticProps(context) {
    const artistList = songList.map((s) => {
        return s.artist;
    });

    return {
        props: {
            artistList: [...new Set(artistList)],
        }, // will be passed to the page component as props
    };
}

const Home = ({ artistList }) => {
    return (
        <div className="page-home">
            <div className="cta-wrapper">
                <div className="content">
                    <img className="center-logo" src="logo-main-for-dark-bg.png" alt="band logo" />
                    <ul className="list-flex-inline mt-2">
                        <li>
                            <a href={myMailTo}>
                                <FiMail size={32} className="txt-er-red" />
                            </a>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a
                                    href="https://www.instagram.com/endrockcle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagramSquare size={32} className="txt-er-red" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a href="https://www.facebook.com/EndRockCle" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={32} className="txt-er-red" />
                                </a>
                            </Link>
                        </li>
                    </ul>

                    <div className="row center-xs mt-4">
                        <Link href="/shows">
                            <h4 className="txt-er-red pointer live-events">shows</h4>
                        </Link>
                    </div>
                    <div className="row center-xs mt-4">
                        <Link href="/media">
                            <h4 className="txt-er-red pointer live-events">media</h4>
                        </Link>
                    </div>
                </div>
                <div className="background-wrapper">
                    <video
                        autoPlay={true}
                        className="bg-video"
                        id="myVideo"
                        src="/end-rock-hero-video.mp4"
                        poster="/end-rock-stellas-large.jpg"
                        playsInline={true}
                        disablePictureInPicture={true}
                        muted
                        loop
                    />
                    <div className="video-overlay"></div>
                </div>
                <div className="more">
                    <button className="btn btn-link" onClick={() => scrollToElement('about')}>
                        <FaArrowDown size="2rem" onClick={() => {}} className="txt-er-red" />
                    </button>
                </div>
            </div>

            {/* Testimonials here */}

            {/* About */}

            <div id="about" className="about">
                <div className="container txt-white">
                    <div className="row middle-sm">
                        <div className="col-xs-12 col-md-8 col-lg-6 center-xs">
                            <h2>About End Rock</h2>
                            <p style={{ fontSize: '18px' }} className="pt-3">
                                End Rock is a high-energy, alternative rock cover band based in{' '}
                                <strong>Cleveland, Ohio.</strong> We play alternative rock from the ‘90s and early ‘00s,
                                and also like to break out a classic or two when the crowd is feeling it. <br /> <br />{' '}
                                We’re all about having a great time with great tunes to get your body moving and toe
                                tapping (and sometimes head banging!) ‘till the end of the night. Check out our
                                <span className="mx-2">
                                    <Link href="/song-list">
                                        <a className="txt-er-red">Song List Page</a>
                                    </Link>
                                </span>
                                to get a feel for our set, and make sure to come see us at one of our
                                <span className="mx-2">
                                    <Link href="/shows">
                                        <a className="txt-er-red">Upcoming Shows</a>
                                    </Link>
                                </span>
                            </p>

                            <br />

                            <Link href="/shows">
                                <a style={{ fontSize: '18px' }} className="txt-er-yellow">
                                    lets party
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Culture */}

            <div className="culture">
                <div className="container">
                    <div className="row middle-sm center-xs">
                        <div className="col-xs-12 col-md-6 col-md-offset-6">
                            <h2>
                                Available for live music venues and your favorite bars <br />
                            </h2>

                            <h4>(and maybe a bowling alley)</h4>

                            <p style={{ fontSize: '18px' }} className="pt-3">
                                We're always open to picking up new gigs. We like playing on the Eastside, Westside,
                                Downtown, and anywhere in between. Hit us up on here or
                                <span className="mx-2">
                                    <a href={myMailTo} className="txt-er-red">
                                        send us an email
                                    </a>
                                </span>
                                and we'll get back to you!
                            </p>

                            <br />

                            <Link href="/contact">
                                <a style={{ fontSize: '18px' }} className="txt-er-yellow">
                                    contact
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about" className="hype-vid">
                <div className="container txt-white">
                    <div className="row middle-sm">
                        <div className="col-xs-12 col-md-8 col-lg-6 center-xs">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/vI3DbQcGr7Q"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* row of 4 here */}
        </div>
    );
};

export default Home;

// Row of 4

// <div className="brands py-5 txt-white">
// <div className="container">
//     <h3 className="mb-4">End Rock is a Millennial Rock Band.</h3>
//     <div className="row">
//         <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
//             <Link href="/">
//                 <a>Link</a>
//             </Link>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                 incididunt ut labore et dolore magna aliqua
//             </p>
//         </div>
//         <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
//             <Link href="/">
//                 <a>Link</a>
//             </Link>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                 incididunt ut labore et dolore magna aliqua
//             </p>
//         </div>
//         <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
//             <Link href="/">
//                 <a>LINK</a>
//             </Link>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                 incididunt ut labore et dolore magna aliqua
//             </p>
//         </div>
//         <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
//             <Link href="/">
//                 <a>LINK</a>
//             </Link>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                 incididunt ut labore et dolore magna aliqua
//             </p>
//         </div>
//     </div>
// </div>
// </div>

// Testimonials

// <div className="features">
//     <div className="feature">
//         <h4>"End Rock rocked so hard I literally shit my pants!"</h4>
//         <h5 className="pl-3">&mdash; Your Grandma</h5>
//     </div>
//     <div className="feature">
//         <h4>"After going to and End Rock show my dick grew an extra inch!"</h4>
//         <h5 className="pl-3">&mdash; Your Dad</h5>
//     </div>
//     <div className="feature">
//         <h4>"Becoming an End Rock fan was made everyone at work respect me again!"</h4>
//         <h5 className="pl-3">&mdash; Jan (in accounting)</h5>
//     </div>
// </div>
