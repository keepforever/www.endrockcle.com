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
        <>
            <div className="masthead masthead-song-list"></div>
            <div className="container mt-4">
                <h1 className="txt-silver">The gist...</h1>
                <hr />
                <div className="row mt-3">
                    {songList.map((s) => {
                        return (
                            <h5
                                key={s.song + '_' + s.artist}
                                className="mr-3 my-3 p-3"
                                style={{ border: '2px solid #ee3342', borderRadius: '8px', color: 'lightgray' }}
                            >{`"${s.song}",  ${s.artist}`}</h5>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default SongList;
