import fs from 'fs';
import { aliveYouTube, basketCaseYouTube, endRockPromoOne, testTest } from '../utils/media-links';

const Media = ({ files = [] }) => {
    return (
        <>
            <div className="masthead masthead-contact"></div>
            <div className="container txt-silver">
                <div className="row mb-3">
                    <h2 className="txt-underline">Promo</h2>
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

                <div className="row mb-3">
                    <h2 className="txt-underline">Demos</h2>
                </div>

                <div className="row mb-6">
                    <div className="row center-xs mb-6">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/SyAMNObui-c"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
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

                <div className="row mb-3">
                    <h2 className="txt-underline">Photos</h2>
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
