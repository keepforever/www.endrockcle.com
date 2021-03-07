import NoSSR from 'react-no-ssr';
import { songList } from '../utils/songs';
import SetListBuilder from '../comps/SetListBuilder';

const SongList = (props) => {
    return (
        <NoSSR>
            <SetListBuilder />
        </NoSSR>
    );
};

export default SongList;
