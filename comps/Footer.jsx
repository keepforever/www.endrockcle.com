import Link from 'next/link';
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = (props) => (
    <footer>
        <div className="container">
            <div className="row mb-5">
                <div className="col-xs-12 col-md-2 mb-xs-3">
                    <Link href="/">
                        <img
                            style={{
                                height: '33px',
                                width: '164px',
                            }}
                            src="/erc-logo-yellow-header.png"
                            alt="band logo"
                        />
                    </Link>
                </div>
                <div className="col-xs-12 col-md-2 col-md-offset-1 mb-xs-4 mb-md-0">
                    <div className="row">
                        <Link href="/shows">
                            <a>Shows</a>
                        </Link>
                    </div>
                    <div className="row mt-2">
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </div>
                </div>
                <div className="col-xs-12 col-md-2 mb-xs-4 mb-md-0">
                    <div className="row">
                        <Link href="/song-list">
                            <a>Song List</a>
                        </Link>
                    </div>
                </div>
                <div className="col-xs-12 col-md-2">
                    <div className="row">
                        <Link href="/contact">
                            <a className="mb-4">Contact</a>
                        </Link>
                    </div>
                </div>
                <div className="col-xs-12 col-md-3">
                    <div className="row">
                        <ul className="list-inline">
                            <li>
                                <a
                                    href="https://www.facebook.com/EndRockCle/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/wearefindaway" target="_blank" rel="noopener noreferrer">
                                    <FaInstagramSquare />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/wearefindaway" target="_blank" rel="noopener noreferrer">
                                    <FiMail />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>
                <strong>&copy; 2020 End Rock LLC</strong>
            </p>
        </div>
    </footer>
);

export default Footer;
