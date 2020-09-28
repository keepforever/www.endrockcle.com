import fs from 'fs';
import { aliveYouTube, basketCaseYouTube, endRockPromoOne, testTest } from '../utils/media-links';

const Media = ({ files = [] }) => {
    return (
        <>
            <div className="masthead masthead-contact"></div>
            <div className="container txt-silver">
                <div className="row start-xs my-2 txt-silver">
                    <h1>Media</h1>
                </div>
                <div className="row center-xs mb-3">
                    <h3 className="txt-underline">Promo</h3>
                </div>
                <div className="row center-xs mb-6">
                    <iframe
                        width="560"
                        height="315"
                        style={{
                            maxWidth: '100%',
                        }}
                        src={endRockPromoOne}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="row center-xs mb-3">
                    <h3 className="txt-underline">Demos</h3>
                </div>

                <div className="row center-xs mb-6">
                    <iframe
                        width="560"
                        height="315"
                        style={{
                            maxWidth: '100%',
                        }}
                        src={aliveYouTube}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width="560"
                        height="315"
                        style={{
                            maxWidth: '100%',
                        }}
                        src="https://www.youtube.com/embed/l9-800L2M-0"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>


                <div className="row center-xs mb-3">
                    <h3 className="txt-underline">Photos</h3>
                </div>

                <div className="row display-flex-around">
                    {files.map((p) => {
                        return (
                            <img
                                key={`media/${p}`}
                                src={`media/${p}`}
                                alt="concert photograph"
                                style={{ maxHeight: '300px', maxWidth: '100%', marginBottom: '40px' }}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const files = fs.readdirSync('public/media');
    return {
        props: {
            files: files,
        },
    };
};

export default Media;
