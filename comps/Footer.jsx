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
                            src="/EndRock_logo_color_nobg.jpg"
                            alt="band logo"
                        />
                    </Link>
                </div>
                <div className="col-xs-12 col-md-2 col-md-offset-1 mb-xs-4 mb-md-0">
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </div>
                <div className="col-xs-12 col-md-2 mb-xs-4 mb-md-0">
                    <Link href="/experience">
                        <a>Set List</a>
                    </Link>
                </div>
                <div className="col-xs-12 col-md-2">
                    <Link href="/experience">
                        <a className="col-header mb-4">Contact</a>
                    </Link>
                </div>
                <div className="col-xs-12 col-md-3">
                    <p className="mb-4">69420 Green Love Dr., Cleveland OH, 44069</p>
                    <ul className="list-inline">
                        <li>
                            <a href="https://www.facebook.com/EndRockCle/" target="_blank" rel="noopener noreferrer">
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
            <p>
                <strong>&copy; 2020 End Rock LLC</strong>
            </p>
        </div>
    </footer>
);

export default Footer;
