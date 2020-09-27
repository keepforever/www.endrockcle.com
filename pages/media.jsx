import fs from 'fs';

const Media = ({ files = [] }) => {
    return (
        <>
            <div className="masthead masthead-contact"></div>
            <div className="container txt-silver">
                <div className="row start-xs my-2 txt-silver">
                    <h1>Media</h1>
                </div>
                <div className="row center-xs mb-6">
                    <iframe
                        width="560"
                        height="315"
                        style={{
                            maxWidth: '100%',
                        }}
                        src="https://www.youtube.com/embed/vI3DbQcGr7Q"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
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
