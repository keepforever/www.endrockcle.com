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

const SongList = (props) => {
    return (
        <div className="container">
            <div className="row">
                {songList.map((s) => {
                    return (
                        <h5
                            className="mr-3 p-3"
                            style={{ border: '2px solid #ee3342', borderRadius: '8px', color: 'lightgray' }}
                        >{`"${s.song}",  ${s.artist}`}</h5>
                    );
                })}
            </div>
        </div>
    );
};

export default SongList;
