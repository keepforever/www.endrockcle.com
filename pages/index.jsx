import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { scrollIntoView } from 'scroll-js';

const scrollToElement = (id) => {
    var myElement = document.getElementById(id);
    scrollIntoView(myElement, document.body, { behavior: 'smooth' });
};

const myMailTo =
    "mailto:endrockcle@gmail.com?subject=%3Cyour-biz-or-name%3E%20-%20BOOKING&body=Rock%20and%20Roll%20ain't%20noise%20pollution!";

const Home = (props) => {
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
                            <h3 className="txt-er-red pointer live-events">shows</h3>
                        </Link>
                    </div>
                </div>
                <div className="background-wrapper">
                    <video
                        autoPlay={true}
                        className="bg-video"
                        id="myVideo"
                        // src="/concert-placeholder-video.mp4"
                        src="/puppies-video.mp4"
                        // src="/bug-crawl-movie.mp4"
                        // src="/lady-bug-humping.mp4"
                        // src="/skull-candels-movie.mp4"
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
            {/* <div className="features">
                <div className="feature">
                    <h4>"End Rock rocked so hard I literally shit my pants!"</h4>
                    <h5 className="pl-3">&mdash; Your Grandma</h5>
                </div>
                <div className="feature">
                    <h4>"After going to and End Rock show my dick grew an extra inch!"</h4>
                    <h5 className="pl-3">&mdash; Your Dad</h5>
                </div>
                <div className="feature">
                    <h4>"Becoming an End Rock fan was made everyone at work respect me again!"</h4>
                    <h5 className="pl-3">&mdash; Jan (in accounting)</h5>
                </div>
            </div> */}

            {/* About */}

            <div id="about" className="about">
                <div className="container txt-white">
                    <div className="row middle-sm">
                        <div className="col-xs-12 col-md-8 col-lg-4">
                            <h2>About End Rock</h2>
                            <p>
                                We are an alternative rock cover baned based in <strong>Cleveland Ohio</strong>. Five
                                good time dudes &mdash; always working to add new songs to our set and deliver an
                                entertaining show.
                            </p>

                            <Link href="/shows">
                                <a style={{ fontSize: '32px' }} className="txt-er-red">
                                    Live Shows
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Culture */}

            <div className="culture">
                <div className="container">
                    <div className="row middle-sm">
                        <div className="col-xs-12 col-md-5 col-md-offset-7">
                            <h2>The End Rock members that make it happen.</h2>
                            <p>
                                Hungry. Passionate. Dedicated. Ready to un-fuck the world with the joy of song. End
                                Rockers have an unmistakable DNA that feeds our desire to entertain.
                            </p>

                            <a href={myMailTo} style={{ fontSize: '32px' }} className="txt-er-red">
                                Book Us!
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="brands py-5 txt-white">
                <div className="container">
                    <h3 className="mb-4">End Rock is a Millennial Rock Band.</h3>
                    <div className="row">
                        <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
                            <Link href="/">
                                <a>Link</a>
                            </Link>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
                            <Link href="/">
                                <a>Link</a>
                            </Link>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
                            <Link href="/">
                                <a>LINK</a>
                            </Link>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
                            <Link href="/">
                                <a>LINK</a>
                            </Link>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         */}
        </div>
    );
};

export default Home;
