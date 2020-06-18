import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';
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
                                <a>Retailers</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience">
                                <a>Retailers</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience">
                                <a>Retailers</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience">
                                <a>Retailers</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="background-wrapper">
                    <video
                        autoPlay={true}
                        className="bg-video"
                        id="myVideo"
                        src="/header-video.mp4"
                        poster="/crow-hero.png"
                        muted
                        loop
                    />
                    <div className="video-overlay"></div>
                </div>
                <div className="more">
                    <button className="btn btn-link" onClick={() => scrollToElement('about')}>
                        <FaArrowDown size="2rem" onClick={() => {}} />
                    </button>
                </div>
            </div>
            <div className="features">
                <div className="feature">foo</div>
                <div className="feature">
                    <Link href="/">
                        <a>Retailers</a>
                    </Link>
                </div>
                <div className="feature">
                    <Link href="/">
                        <a>Retailers</a>
                    </Link>
                </div>
            </div>

            {/* About */}

            <div id="about" className="about">
                <div className="container">
                    <div className="row middle-sm">
                        <div className="col-xs-12 col-md-8 col-lg-4">
                            <h2>About Findaway</h2>
                            <p>
                                We are an audio technology company &mdash; innovating every day to bring more audiobooks
                                to more listeners around the globe.
                            </p>
                            <Link href="/">
                                <a>Retailers</a>
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
                            <h2>The Findawayers that make it happen.</h2>
                            <p>
                                Hungry. Passionate. Creative. Ready to change the world. Findawayers have an
                                unmistakable DNA that feeds our culture and our work.
                            </p>
                            <Link href="/">
                                <a>Retailers</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="brands py-5">
                <div className="container">
                    <h3 className="mb-4">Findaway is a multi-product, multi-brand company.</h3>
                    <div className="row">
                        <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
                            <Link href="/">
                                <a>Retailers</a>
                            </Link>
                            <p>
                                Proprietary technology that enables retailers and libraries to deliver digital
                                audiobooks to million of listeners around the globe.
                            </p>
                        </div>
                        <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
                            <Link href="/">
                                <a>Retailers</a>
                            </Link>
                            <p>
                                The world’s largest audiobook distributor, creating opportunities for publishing
                                partners to succeed in a rapidly changing audiobook market.
                            </p>
                        </div>
                        <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
                            <Link href="/">
                                <a className="fancy-cta d-inline-block mb-2">FANCY LINK</a>
                            </Link>
                            <p>
                                Access to the world's largest network of audiobook sellers and everything authors need
                                to create professional audiobooks.
                            </p>
                        </div>
                        <div className="brand-item col-xs-12 co-sm-6 col-lg-3">
                            <Link href="/">
                                <a className="fancy-cta d-inline-block mb-2">FANCY LINK</a>
                            </Link>
                            <p>
                                Audiobooks, learning apps, videos, and read-alongs built for circulation in libraries,
                                schools, and military installments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
