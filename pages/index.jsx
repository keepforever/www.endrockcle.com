import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { scrollIntoView } from 'scroll-js';

const scrollToElement = (id) => {
    var myElement = document.getElementById(id);
    scrollIntoView(myElement, document.body, { behavior: 'smooth' });
};

const Home = (props) => {
    return (
        <div className="page-home">
            <div className="cta-wrapper">
                <div className="content">
                    <img className="center-logo" src="/EndRock_logo_color_nobg.png" alt="band logo" />
                    <h1>Cleveland's Alternative Rock Cover Band</h1>
                    <ul className="list-flex-inline">
                        <li>
                            <Link href="/experience">
                                <a href="mailto:endrockcle@gmail.com">
                                    <FiMail size={32} style={{ color: 'red' }} />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience">
                                <a
                                    href="https://www.instagram.com/endrockcle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagramSquare size={32} style={{ color: 'red' }} />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience">
                                <a href="https://www.facebook.com/EndRockCle" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={32} style={{ color: 'red' }} />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience">
                                <a>Link</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="background-wrapper">
                    <video
                        autoPlay={true}
                        className="bg-video"
                        id="myVideo"
                        src="/concert-placeholder-video.mp4"
                        poster="/crow-hero.png"
                        playsInline={true}
                        disablePictureInPicture={true}
                        muted
                        loop
                    />
                    <div className="video-overlay"></div>
                </div>
                <div className="more">
                    <button className="btn btn-link" onClick={() => scrollToElement('about')}>
                        <FaArrowDown size="2rem" onClick={() => {}} style={{ color: 'red' }} />
                    </button>
                </div>
            </div>
            <div className="features">
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
            </div>

            {/* About */}

            <div id="about" className="about">
                <div className="container">
                    <div className="row middle-sm">
                        <div className="col-xs-12 col-md-8 col-lg-4">
                            <h2>About End Rock</h2>
                            <p>
                                We are an alternative rock cover baned based in <strong>Cleveland Ohio</strong>. Five
                                good time dudes &mdash; always working to add new songs to our set and deliver an
                                entertaining show.
                            </p>
                            <Link href="/">
                                <a>Book Us!</a>
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
                            <Link href="/">
                                <a>Link</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="brands py-5">
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
                                <a className="fancy-cta d-inline-block mb-2">FANCY LINK</a>
                            </Link>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
                            <Link href="/">
                                <a className="fancy-cta d-inline-block mb-2">FANCY LINK</a>
                            </Link>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
