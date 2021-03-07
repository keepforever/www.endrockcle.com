import Link from 'next/link';
import { songList } from '../utils/songs';

const SongList = (props) => {
    const transform = songList.reduce((accumulator, song) => {
        accumulator[song.song] = { id: song.song, content: song.song };
        return accumulator;
    }, {});

    return (
        <>
            <div className="masthead masthead-song-list"></div>
            <div className="container mt-4">
                <h1 className="txt-silver">Songs like:</h1>
                <div className="row">
                    <Link href="/setlist-builder">
                        <a>Builder</a>
                    </Link>
                </div>
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
